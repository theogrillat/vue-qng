import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + process.env.VUE_APP_FIREBASE_PROJECT_ID + '.firebaseio.com',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + '.appspot.com'
}
const FirebaseApp = firebase.initializeApp(config)

console.log('Firebase init with config : ', FirebaseApp.options)

export default {
  FirebaseApp: FirebaseApp
}
