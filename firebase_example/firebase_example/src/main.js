import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1_zdw8DwKDDt_eg4Elk_yEh3ccqbbE8s',
  authDomain: 'fir-demo-4cf53.firebaseapp.com',
  projectId: 'fir-demo-4cf53',
  storageBucket: 'fir-demo-4cf53.appspot.com',
  messagingSenderId: '742307362897',
  appId: '1:742307362897:web:29a5776a260f956ed5e070'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

app.use(router)

app.mount('#app')
