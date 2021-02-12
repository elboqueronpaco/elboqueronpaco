import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDaXYMj9crtG2XV0y9ILurHwvB_hZXlIEs",
    authDomain: "elboqueronpaco-261df.firebaseapp.com",
    projectId: "elboqueronpaco-261df",
    storageBucket: "elboqueronpaco-261df.appspot.com",
    messagingSenderId: "672704793995",
    appId: "1:672704793995:web:fdd13171e0b01b7ed7f38e"
  }

app.initializeApp(firebaseConfig)

export const db = app.firestore()
export const auth = app.auth()