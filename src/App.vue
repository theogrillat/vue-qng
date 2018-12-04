<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">
        <div class="navlink">
          <div></div>
        </div>
      </router-link>
      <router-link to="/help">
        <div class="navlink">
          <div></div>
        </div>
      </router-link>
      <router-link to="/play">
        <div class="navlink">
          <div></div>
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="navlink">
          <div></div>
        </div>
      </router-link>
      <router-link to="/shop">
        <div class="navlink">
          <div></div>
        </div>
      </router-link>
    </div>
    
      <router-view/>
    
  </div>
</template>


<script>

import headerComp from '@/components/header.vue'
import store from '@/store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import vuefire from 'vuefire'

export default {
  vuefire,
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
$primary: #86E9D5;
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


.button {
  border-radius: 100px;
  border: none;
  box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  transition: all 0.1s;
  &.is-large {
    font-weight: 800;
    margin-top: 7vh;
  }
  &:hover {
    border: none !important;
    outline: none !important;
    box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18) !important;
    color: #ffffff !important;
  }
  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18) !important;
  }
  &:active {
    border: none !important;
    outline: none !important;
    box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18) !important;
    color: #ffffff !important;
  }
}


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
  border-radius: 100px;
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  position: fixed;
  bottom: 5px;
  left: 1vw;
  width: 98vw;
  height: 75px;
  box-shadow: 0 6px 26px 0px rgba($color: #000000, $alpha: 0.15);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
  
#nav a {
  margin: 0px;
  font-weight: bold;
  color: #499276;
  text-decoration: none;
}

#nav a .navlink div {
  border-radius: 100px;
  background-color: rgba($color: #FFA935, $alpha: 0.3);
  height: 50px;
  width: 50px;
  font-weight: bold;
  color: #499276;
  text-decoration: none;
  transition: all 300ms;
}

#nav a .navlink {
  margin-top: 12.5px;
  display: inline-flex;
  justify-content: center;
  width: 20%;
}

#nav a.router-link-exact-active .navlink div {
  background-color: $primary;
  transition: all 300ms;
  transform: scale(1.1);
}





</style>
