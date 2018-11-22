<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginComp from '@/components/loginComp.vue'
import registerComp from '@/components/registerComp.vue'

export default {
  name: 'login',
  components: {
    loginComp,
    registerComp
  }
}
</script>
