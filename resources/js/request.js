// import _ from "lodash"; // LODASH is imported and used globally, configured in webpack
import axios from "axios"
import store from "./store/index" // store is the Vuex store instance
import router from "./router/index" // router is the Vue Router instance
import {PRIVATE_ROUTES} from "./router/private"

// create an axios instance
const service = axios.create({
  baseURL: '/api/',
  // withCredentials: true,
  timeout: 30000, // request timeout,
  // Flag to handle the error directly in the respose
  __handleErrorsInResponse: true,
  // validateStatus: status => status < 204, // Reject only if the status code is greater than or equal to 500
  // Default Headers & empty data. Empty data is used because if it isn't present, this headers are not sent
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  data: {},
})

// request interceptor
service.interceptors.request.use(
  async request => {
    // If one of these specific pages that doesn't need a token, use current token (possibly none),
    // If NOT one of these specific, try to get the current token or request a new one
    if (
      Object.values(PRIVATE_ROUTES).find(route=>request.url.includes(route))
    ) {
      const token = await store.getters["essence/tokenGetter"]
      if (token) {
        request.headers["Authorization"] = `Bearer ${token}`
      }
    } else {
      try {
        const token = await getAuthToken()
        request.headers["Authorization"] = `Bearer ${token}`
      } catch (e) {
        throw new axios.Cancel(e || "No pudo refrescar el token :(")
      }
    }

    return request
  },
  error => {
    // Do something with request error
    console.debug(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => response,
  async error => {
    const req = _.get(error, "request", undefined) // (error && error.request) || undefined
    const message = _.get(
      error,
      "response.data.message",
      "Ocurrio un problema al procesar su petición",
    )
    const status = _.get(error, "response.status", undefined) // (error && error.response && error.response.status) || undefined
    const errorData = _.get(error, "response.data", undefined) // (error && error.response && error.response.data) || undefined

    // Check if it was 'Unprocessable Entity' error and if it has to handle it here:
    const handleErrorsHere = _.get(error, "config.__handleErrorsInResponse", undefined)
    // (error && error.config && error.config.__handleErrorsInResponse) || false
    let errorsArray = _.get(error, "response.data.errors", undefined)
    if (!errorsArray) {
      errorsArray = _.get(error, "response.data.data.errors", undefined)
    }

    if (status === 422 && handleErrorsHere && errorsArray) {
      commit('notification/setError', errorsArray, { root: true });
      return Promise.reject({
        message: null,
        status,
        data: errorData,
      })
    }

    //Si esta en el login, rejecto el error
    if (req !== undefined && req.responseURL.includes("login")) {
      return Promise.reject({
        message,
        status,
        data: errorData,
      })
    }

    // TODO: ver de pasar esta logica al metodo del store auth/refresh

    // If you can't refresh your token or you are sent Unauthorized on any request, reset token and go to login
    const isRefreshOrLogout =
      req !== undefined &&
      (req.responseURL.includes("refresh") || req.responseURL.includes("logout"))

    if (isRefreshOrLogout || (status === 401 && error.config.__isRetryRequest)) {
      await store.dispatch("essence/resetToken", null, { root: true })
      router.replace({ name: "login" })
      return Promise.reject({
        message,
        status,
        data: errorData,
      })
    }
    // retry the request ONLY if not already tried
    if (isRefreshOrLogout || (status === 401 && !error.config.__isRetryRequest)) {
      await store.dispatch("essence/refresh", null, { root: true })
      error.config.__isRetryRequest = true
      return service.request(error.config)
    }

    // Check if it's server error:
    if (status >= 500) {
      commit('notification/setMessage', "Ocurrio un problema al procesar su petición", { root: true });
    }

    return Promise.reject({
      message,
      status,
      data: errorData,
    })
  },
)

// let refreshed = false
// eslint-disable-next-line no-unused-vars
async function getAuthToken() {
  return new Promise(async resolve => {
    // if the current token expires soon
    const expiresIn = store.getters["essence/expiresIn"]
    const expiresMinus15Minutes = new Date(+expiresIn)

    const minutesBefore = 60 * 15

    // const minutesBefore = 60 * 15
    expiresMinus15Minutes.setSeconds(expiresMinus15Minutes.getSeconds() - minutesBefore) // returns unix 58

    const expiresDateMinus15Minutes = new Date(expiresMinus15Minutes)
    const isTokenExpiredOrAboutTo = expiresDateMinus15Minutes.getTime() <= Date.now()
    let refreshed = store.state.essence.refreshed

    let token
    if (isTokenExpiredOrAboutTo && !refreshed) {
      console.log("tokenExpiredOrAboutTo")
      // refresh the token & update 'refreshed' flag in the store
      token = await store.dispatch("essence/refresh", null, { root: true })
    } else {
      token = store.getters["essence/token"]
    }

    resolve(token)
  })
}

export default service