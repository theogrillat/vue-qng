<template>
  <div id="app">
    
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
import firebase from 'firebase/app'

export default {
  firebase,
  store: store,
  components: {
    headerComp
  },
  data() {
    return {
      page: 'test',
      user: store.state.user
    }
  }
}
</script>


<style lang="scss">


// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #42b983;
$primary-invert: findColorInvert($primary);
$twitter: rgb(219, 179, 0);
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

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
  border-radius: 50px 50px 0px 0px;
  background-color: $primary;
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
  color: #499276;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: $white;
  font-weight: bolder;
}

.header {
  border-radius: 0px 0px 50px 50px;
  background-color: $primary;
  color: $white;
}

</style>
