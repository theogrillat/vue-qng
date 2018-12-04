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
<style scoped lang="scss">

.header {
  border-radius: 100px;
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  color: #000000;
  padding-bottom: 10px;
  padding-top: 25px;
  position: fixed;
  left: 0px;
  top: 5px;
  width: 100vw;
  height: 75px;
  box-shadow: 0 6px 26px 0px rgba($color: #000000, $alpha: 0.15);
}



h1 {
  margin: 0px;
  color: #000000;
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
  color: #ffffff;
}
</style>
