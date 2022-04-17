export default {
    namespaced: true,
    state () {
        return {
          count: 1,
        }
      },
      mutations: {
       increment (state) {
         state.count++
       },
       addProject (state, newProject) {
          state.projects.push (newProject);
        }
     },
     getters: {},
     actions: {
        asyncIncrement({commit}) {
           return new Promise((res, rej)=>{
              setTimeout(()=>{
                commit('increment');
                res();
              },1000)
           })
        }
     }
}