import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyCddVNbSWS01Riy47REqSRlu0Lo4NgJtsg",
    authDomain: "tartu-etk.firebaseapp.com",
    databaseURL: "https://tartu-etk.firebaseio.com",
    projectId: "tartu-etk",
    storageBucket: "tartu-etk.appspot.com",
    messagingSenderId: "491308083667",
    appId: "1:491308083667:web:15c5b6d7c4bf2906152726",
    measurementId: "G-E594XTR96E"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
