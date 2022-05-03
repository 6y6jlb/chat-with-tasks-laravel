import { createStore } from 'vuex';
import chatStore from './chatStore';
import essenceStore from './essenceStore';
import exampleStore from './exampleStore';
import notificationStore from './notificationStore';

export default createStore({
 modules: {
   essence: essenceStore,
   example: exampleStore,
   notification: notificationStore,
   chat: chatStore,
 }
})