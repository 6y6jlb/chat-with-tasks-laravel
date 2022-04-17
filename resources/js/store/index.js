import { createStore } from 'vuex';
import userStore from './userStore';
import exampleStore from './exampleStore';
import notificationStore from './notificationStore';

export default createStore({
 modules: {
   user: userStore,
   example: exampleStore,
   notification: notificationStore,
 }
})