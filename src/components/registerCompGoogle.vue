<template>
<div class="section">
  
  <div class="container">
    <h1 v-if="!loggedIn" class="title is-2">Se connecter avec Google</h1>
    <h1 v-if="loggedIn" class="title is-2">Bienvenu {{getUser.displayName}} !</h1>


      <button v-if="!loggedIn" @click="logIn" class="button is-primary is-large is-fullwidth">
        Google
      </button>

      <button v-if="loggedIn" @click="logOut" class="button is-primary is-large is-fullwidth">
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
<style scoped>

button {
  background-color: #e74630 !important;
  font-weight: 800;
  margin-top: 7vh;
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
