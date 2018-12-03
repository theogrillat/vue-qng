<template>
<div class="section">
  
  <div class="container">

    <div v-if="authUser">
      <h1>Connecté en tant que : {{authUser.email}}</h1>
    </div>

    <h1 class="title is-2">Créer un compte</h1>

    <form @submit.prevent="createNewUser()">
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
          v-model="mdpOne" 
          icon="lock" 
          size="is-large" 
          type="password" 
          placeholder="Mot de passe" 
          password-reveal>
        </b-input>
      </b-field>

      <b-field>
        <b-input 
          v-model="mdpTwo" 
          icon="lock" 
          size="is-large" 
          type="password" 
          placeholder="Confirmer" 
          password-reveal>
        </b-input>
      </b-field>


      <h3 class="title error-mdp is-4" v-if="mdpMatch">Les mots de passes ne correspondent pas</h3>

      

      <button class="button is-primary is-large is-fullwidth">
        Valider
      </button>
    </form>

  </div>
</div>
</template>

<script>




export default {
  name: 'registerComp',
  data () {
    return {
      mdpOne: '',
      mdpTwo: '',
      mdpMatch: null,
      email: '',
      authUser: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    createNewUser () {
      if (this.mdpOne === this.mdpTwo) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.mdpOne)
      } else {
        this.mdpMatch = false
      }
    }
  },

  UserIsCreated () {
    firebase.auth().onAuthStateChanged(user => {this.authUser = user} )
  }
}
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
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
