<template>
<div class="hero">
  <div class="container">

    <div v-if="authUser">
      <h1>Connecté en tant que : {{authUser.email}}</h1>
    </div>

    <form @submit.prevent="oktest()">
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

      <button class="button is-primary is-large is-fullwidth">
        Valider
      </button>
    </form>

  </div>
</div>
</template>

<script>




export default {
  name: 'loginComp',
  data () {
    return {
      mdp: '',
      email: '',
      authUser: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    oktest() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.mdp)
    }
  },

  created () {
    firebase.auth().onAuthStateChanged(user => {this.authUser = user} )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



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
</style>
