<template>
  <div class="header">
      <h1 class="title is-4">{{pageName}}</h1>
  </div>
</template>

<script>
import user from '@/App.vue'


export default {
  name: 'headerComp',
  props: {
    pageName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  padding-bottom: 10px;
  padding-top: 10px;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

h1 {
  margin: 0px;
  color: #ffffff;
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
</style>
