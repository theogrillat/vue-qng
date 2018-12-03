<template>
  <div class="about">
    <headerComp pageName="Aides"/>
    <h1>{{message}}</h1>
  </div>
</template>


<script>

import store from '@/store'
import headerComp from '@/components/header.vue'

export default {
  store: store,
  data () {
    return {
      message: store.state.user.connected
    }
  },
  components: {
    headerComp
  }
}
</script>
