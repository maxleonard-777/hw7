const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {apiKey: "AIzaSyCoyimqwfmTFwpKyT2dMLqo3Z4BExwswHg",
authDomain: "kiei-451-6042a.firebaseapp.com",
projectId: "kiei-451-6042a",
storageBucket: "kiei-451-6042a.appspot.com",
messagingSenderId: "490679380429",
appId: "1:490679380429:web:a5db203b4f6bcb27df7c84"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase