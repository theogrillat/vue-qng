import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import vuefire from 'vuefire'
import VueAnime from 'vue-animejs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faArrowLeft, faUser, faInfo, faThLarge, faTrophy, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faArrowLeft, faUser, faInfo, faThLarge, faTrophy, faShoppingBag)

Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

new Vue({
  firebase,
  router,
  store,
  vuefire,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(Buefy)
Vue.use(VueAnime)
