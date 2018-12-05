<template>
<div>
  
  <div class="container">
    <h1 v-if="!loggedIn" class="title is-2">Se connecter</h1>
    <h1 v-if="loggedIn" class="title is-3">Bienvenue<br> {{getUser.displayName}} !</h1>
    <p v-if="!loggedIn">Pour utliliser les fonctionnalitées de l'application, et pour jouer à <span class="highlight">QuizNGo</span>, vous devez vous connecter</p>
    <img class="profileImg" v-if="loggedIn" :src="getUser.photoURL+'?height=500'" alt="avatar">


      <div v-if="!getCompState" class="wrapper">
        <button v-if="!loggedIn" @click="logInGoogle" class="button google is-primary is-large is-fullwidth">
          Google
        </button>

        <button v-if="!loggedIn" @click="logInFB" class="button facebook is-primary is-large is-fullwidth">
          Facebook
        </button>

        <button v-if="!loggedIn" @click="changeCompState" class="button email is-primary is-large is-fullwidth">
          Email
        </button>
      </div>


      <div v-if="getCompState" class="wrapperEmail">
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
            <div @click="changeCompState" class="button backBtn is-primary is-large is-fullwidth">
              <font-awesome-icon icon="arrow-left" size="1x" :style="{ color: '#ffffff' }"/>
            </div>            
            <button class="button connecter is-primary is-large is-fullwidth">
              Se connecter
            </button>
          </div>
        </form>
      </div>

      <button v-if="loggedIn" @click="logOut" class="button logout is-primary is-large is-fullwidth">
        Se déconnecter
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
      emailClicked: false,
      email: '',
      mdp: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['logInGoogle', 'logInFB', 'logOut', 'changeCompState']),
    success() {
      this.$toast.open({
        message: 'Vous êtes Connecté !',
        type: 'is-twitter',
        position: 'is-top'
      })
    },
  },
  computed: {
    toast () {
      return this.$store.getters.loggedIn
    },
    ...mapGetters(['loggedIn', 'getUser', 'getCompState'])
  },
  watch: {
    toast (value) {
       this.success()
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchCreds')
  }

  
  
}
</script>












<style scoped lang="scss">


$primary: #67D3B9;
$twitter: #FFA845;

$primary-dark: rgb(91, 189, 166);
$twitter-dark: rgb(207, 136, 56);
// * {
//   opacity: 0;
// }

.google {
  color: #ffffff;
}

.input {
  // background-color: white;
  // box-shadow: none;
  border: none;
  // border-radius: 100px;
}

.button {
  color: #ffffff;
  margin-top: 4vh;
  box-shadow: none;
  &.google {
    background-color: #e74630;
    &:hover {
      background-color: #ca3c29;
    }
  }
  &.facebook {
    background-color: #3b5998;
    &:hover {
      background-color: #35508a;
    }
  }
  &.email {
    background-color: $primary;
    &:hover {
      background-color: $primary-dark;
    }
  }
  &.connecter {
    background-color: $primary;
    &:hover {
      background-color: $primary-dark;
    }
  }
  &.backBtn {
    background-color: $twitter;
    &:hover {
      background-color: $twitter-dark;
    }
  }
  &:focus {
    box-shadow: none !important;
  }
  &:active {
    box-shadow: none !important;
  }
  
}

h1 {
  // margin-top: 5vh;
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
  margin-top: 5vh;
}

.grouped {
  margin-top: 4vh;
  display: flex;
}


</style>
