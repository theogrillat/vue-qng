<template>
<div class="section">
  
  <div class="container">
    <h1 v-if="!loggedIn" class="title is-2">Se connecter</h1>
    <h1 v-if="loggedIn" class="title is-3">Bienvenue<br> {{getUser.displayName}} !</h1>
    <p>Pour utliliser les fonctionnalitées de l'application, et pour jouer à <span class="highlight">QuizNGo</span>, vous devez vous connecter</p>
    <img class="profileImg" v-if="loggedIn" :src="getUser.photoURL+'?height=500'" alt="avatar">


      <div v-if="!emailClicked" class="wrapper">
        <button v-if="!loggedIn" @click="logInGoogle" class="button google is-primary is-large is-fullwidth">
          Google
        </button>

        <button v-if="!loggedIn" @click="logInFB" class="button facebook is-primary is-large is-fullwidth">
          Facebook
        </button>

        <button v-if="!loggedIn" @click="goEmail" class="button email is-primary is-large is-fullwidth">
          Email
        </button>
      </div>


      <div v-if="emailClicked" class="wrapperEmail">
        <form>
          <b-field>
            <b-input 
              v-model="email" 
              size="is-large" 
              placeholder="Email" 
              type="email" 
              icon="email">
            </b-input>
          </b-field>

          <b-field>
            <b-input 
              v-model="mdp" 
              icon="lock" 
              size="is-large" 
              type="password" 
              placeholder="Mot de passe" 
              password-reveal>
            </b-input>
          </b-field>

          <div class="grouped">
            <div @click="backEmail" class="button backBtn is-primary is-large is-fullwidth">
              <font-awesome-icon icon="arrow-left" size="1x" :style="{ color: '#ffffff' }"/>
            </div>            
            <button class="button connecter is-primary is-large is-fullwidth">
              Se connecter
            </button>
          </div>
        </form>
      </div>

      <button v-if="loggedIn" @click="logOut" class="button logout is-primary is-large is-fullwidth">
        Logout
      </button>

      
    </form>

  </div>
</div>
</template>











<script>

import { mapGetters, mapMutations } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  firebase,
  name: 'registerComp',
  data () {
    return {
      emailClicked: false
    }
  },
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['logInGoogle', 'logInFB', 'logOut']),
    goEmail () {
      this.emailClicked = true
    },
    backEmail () {
      this.emailClicked = false
    }
  },
  computed: {
    ...mapGetters(['loggedIn', 'getUser'])
  },
  beforeCreate () {
    this.$store.dispatch('fetchCreds')
  }

  
  
}
</script>












<style scoped lang="scss">


// * {
//   opacity: 0;
// }

.google {
  color: #ffffff;
}

.button {
  color: #ffffff;
  margin-top: 4vh;
  &.google {
    background-color: #e74630;
    &:hover {
      background-color: #ca3c29;
    }
    &:focus {
      background-color: #ca3c29;
    }
    &:active {
      background-color: #ca3c29;
    }
  }
  &.facebook {
    background-color: #3b5998;
    &:hover {
      background-color: #35508a;
    }
    &:focus {
      background-color: #35508a;
    }
    &:active {
      background-color: #35508a;
    }
  }
  &.email {
    background-color: #86e9d5;
    &:hover {
      background-color: #6fc0b0;
    }
    &:focus {
      background-color: #6fc0b0;
    }
    &:active {
      background-color: #6fc0b0;
    }
  }
  &.connecter {
    background-color: #86e9d5;
    &:hover {
      background-color: #6fc0b0;
    }
    &:focus {
      background-color: #6fc0b0;
    }
    &:active {
      background-color: #6fc0b0;
    }
  }
  &.backBtn {
    background-color: #86e9d5;
    &:hover {
      background-color: #6fc0b0;
    }
    &:focus {
      background-color: #6fc0b0;
    }
    &:active {
      background-color: #6fc0b0;
    }
  }
  
}

h1 {
  margin-top: 5vh;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.error-mdp {
  color: red;
}

.profileImg {
  height: auto;
  width: 100px;
  border-radius: 100px;
  box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18);
}

.backBtn {
  width: 2.25em;
  height: 2.25em;
  margin-right: 15px;
}

.wrapperEmail {
  margin-top: 15vh;
}

.grouped {
  margin-top: 4vh;
  display: flex;
}


</style>
