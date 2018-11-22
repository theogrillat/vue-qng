<template>
  <div id="app">
    <headerComp pageName="page"/>
    <div id="nav">
      <router-link to="/">Profile</router-link>
      <router-link to="/help">Aides</router-link>
      <router-link to="/play">Jouer</router-link>
      <router-link to="/rank">Rank</router-link>
      <router-link to="/shop">Shop</router-link>
    </div>
    
      <router-view/>
    
  </div>
</template>


<script>

import headerComp from '@/components/header.vue'
import store from '@/store'

export default {
  store: store,
  components: {
    headerComp
  },
  data() {
    return {
      user: store.state.user
    }
  }
}
</script>


<style>




/* .about::before {
  transform: translateX(10px);
  opacity: 0
} */

.about {
  margin-top: 10vh;
  /* transition: all .3s ease;
  transform: translateX(0px);
  opacity: 1 */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px; 
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
  
#nav a {
  margin: 12px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #61D4A6;
}
</style>
