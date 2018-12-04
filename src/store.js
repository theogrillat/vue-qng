import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    logInGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logInFB () {
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut () {
      firebase.auth().signOut()
    }
  },
  actions: {

    fetchCreds ({ commit }) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const { displayName, email, photoURL, uid } = user
          const cleanedUser = { displayName, email, photoURL, uid }

          commit('setUser', cleanedUser)
        } else {
          commit('setUser', {})
        }
      })
    }

  },
  getters: {
    getUser: state => state.user,
    loggedIn: state => 'uid' in state.user
  }
})

global.store = store

export default store
