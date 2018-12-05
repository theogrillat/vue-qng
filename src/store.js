import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: {},
    compState: {
      emailClicked: false
    }
  },
  mutations: {
    changeCompState () {
      if (this.state.compState.emailClicked) {
        this.state.compState.emailClicked = false
        // console.log(this.state.compState.emailClicked)
      } else if (!this.state.compState.emailClicked) {
        this.state.compState.emailClicked = true
        // console.log(this.state.compState.emailClicked)
      } else {
        console.log('val:' + this.state.compState.emailClicked)
        console.log('error')
      }
    },
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
    getCompState: state => state.compState.emailClicked,
    getUser: state => state.user,
    loggedIn: state => 'uid' in state.user
  }
})

global.store = store

export default store
