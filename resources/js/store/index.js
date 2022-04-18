import { createStore } from 'vuex';
import essenceStore from './essenceStore';
import exampleStore from './exampleStore';
import notificationStore from './notificationStore';

export default createStore({
 modules: {
   essence: essenceStore,
   example: exampleStore,
   notification: notificationStore,
 }
})