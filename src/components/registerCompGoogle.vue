<template>
<div class="section">
  
  <div class="container">
    <h1 v-if="!loggedIn" class="title is-2">Se connecter avec Google</h1>
    <h1 v-if="loggedIn" class="title is-2">Bienvenu {{getUser.displayName}} !</h1>


      <button v-if="!loggedIn" @click="logIn" class="button google is-primary is-large is-fullwidth">
        Google
      </button>

      <button v-if="!loggedIn" @click="logIn" class="button facebook is-primary is-large is-fullwidth">
        Facebook
      </button>

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

    }
  },
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['logIn', 'logOut'])
  },
  computed: {
    ...mapGetters(['loggedIn', 'getUser'])
  },
  beforeCreate () {
    this.$store.dispatch('fetchCreds')
  }

  
  
}
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.google {
  color: #ffffff;
}

.button {
  color: #ffffff;
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

</style>
