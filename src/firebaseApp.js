import firebase from 'firebase/app'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBLlSsMUSxqa_Ghr0SukxuLlDGxKImTPzw',
  authDomain: 'test-vue-ce7d3.firebaseapp.com',
  databaseURL: 'https://test-vue-ce7d3.firebaseio.com',
  projectId: 'test-vue-ce7d3',
  storageBucket: 'test-vue-ce7d3.appspot.com',
  messagingSenderId: '107529348537'
}
firebase.initializeApp(config)

console.log('Firebase init with config : ', firebase.options)

export default {
}
