<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import pbh from "./components/public_header.vue"
export default {
  name: 'App',
  components:{

    pbh
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
