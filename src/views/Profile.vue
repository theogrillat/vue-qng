<template>
  <div class="home about">
    <headerComp pageName="Profile"/>
    <!-- <loginComp/> -->
    <registerCompGoogle/>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '@/store'
import HelloWorld from '@/components/HelloWorld.vue'
import loginComp from '@/components/loginComp.vue'
import registerComp from '@/components/registerComp.vue'
import registerCompGoogle from '@/components/registerCompGoogle.vue'
import headerComp from '@/components/header.vue'

export default {
  firebase,
  store: store,
  name: 'profile',
  components: {
    HelloWorld,
    loginComp,
    registerComp,
    registerCompGoogle,
    headerComp
  },
  data() {
    return {
      user: store.state.user
    }
  }
}
</script>
