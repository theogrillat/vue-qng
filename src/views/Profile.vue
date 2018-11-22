<template>
  <div class="home about">
    <!-- <headerComp pageName="Profile"/> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <loginComp v-if="!user.connected"/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import HelloWorld from '@/components/HelloWorld.vue'
import loginComp from '@/components/loginComp.vue'
import registerComp from '@/components/registerComp.vue'
import headerComp from '@/components/header.vue'

export default {
  store: store,
  name: 'profile',
  components: {
    HelloWorld,
    loginComp,
    registerComp,
    headerComp
  },
  data() {
    return {
      user: store.state.user
    }
  }
}
</script>
