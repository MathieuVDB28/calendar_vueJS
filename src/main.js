import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBfPvq9xmJTZVdjyfggqBrmdWCh-G7jbFU",
  authDomain: "calendar-17b31.firebaseapp.com",
  databaseURL: "https://calendar-17b31.firebaseio.com",
  projectId: "calendar-17b31",
  storageBucket: "calendar-17b31.appspot.com",
  messagingSenderId: "211263097601",
  appId: "1:211263097601:web:bd70e052f52f4cc03f2900"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
