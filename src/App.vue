<template>
  <div id="app">

    <headerComp :pageName="currentPage"/>
    
    <div id="nav">
      <router-link to="/play">
        <div @click="changePage('Jouer')" class="navlink">
          <font-awesome-icon icon="th-large" size="lg" :style="{ color: '#ffffff' }"/>
        </div>
      </router-link>
      <router-link to="/help">
        <div @click="changePage('Infos')" class="navlink">
          <font-awesome-icon icon="info" size="lg" :style="{ color: '#ffffff' }"/>
        </div>
      </router-link>
      <router-link to="/">
        <div @click="changePage('Profile')" class="navlink">
            <font-awesome-icon icon="user" size="lg" :style="{ color: '#ffffff' }"/>
        </div>
      </router-link>
      <router-link to="/rank">
        <div @click="changePage('Classement')" class="navlink">
          <font-awesome-icon icon="trophy" size="lg" :style="{ color: '#ffffff' }"/>
        </div>
      </router-link>
      <router-link to="/shop">
        <div @click="changePage('Boutique')" class="navlink">
          <font-awesome-icon icon="shopping-bag" size="lg" :style="{ color: '#ffffff' }"/>
        </div>
      </router-link>
    </div>
    
      <transition name="router-anim" enter-active-class="animated fadeInDown faster" leave-active-class="animated fadeOutDown faster">
        <router-view/>
      </transition>
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
  data () {
    return {
      currentPage: 'Profile'
    }
  },
  methods: {
    changePage (name) {
      this.currentPage = name
    }
  },
  components: {
    headerComp
  },
}
</script>


<style lang="scss">


// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import "~animate.css/animate.min";

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

html {
  background-color: #f5f5f5;
}

.button {
  border-radius: 100px;
  border: none;
  box-shadow: 0 15px 18px -5px rgba($color: #000000, $alpha: 0.18);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s;
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
  z-index: 98;
  border-radius: 100px;
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  position: absolute;
  bottom: 5px;
  left: 1vw;
  width: 98vw;
  height: 75px;
  box-shadow: 0 6px 26px 0px rgba($color: #000000, $alpha: 0.15);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  display: inline-flex;
}
  
#nav a {
  display: flex;
  justify-content: center;
  width: 20%;
  margin: 0px;
  font-weight: bold;
  color: #499276;
  text-decoration: none;
}



#nav a .navlink {
  border-radius: 100px;
  background-color: rgba($color: rgb(183, 233, 223), $alpha: 0.3);
  height: 50px;
  width: 50px;
  color: #499276;
  text-decoration: none;
  transition: all 300ms;
  margin-top: 12.5px;
  padding-top: 14px;
  justify-content: center;
}

#nav a.router-link-exact-active .navlink  {
  background-color: $primary;
  transition: all 300ms;
  transform: scale(1.1);
}


.page {
  position: fixed;
  width: 100vw;
}

.faster {
  animation-duration: 600ms !important;
  animation-timing-function: cubic-bezier(.79, .01, .22, 1) !important;
}

.highlight {
  font-weight: 600;
  color: $primary;
}


</style>
