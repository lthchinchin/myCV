<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TrgHieu :txt="dataText" />
    <router-link to="/hieu">Go to Hieu</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/contact">Go to Count</router-link>
    <router-view />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TrgHieu from './components/TrgHieu.vue'
export default {
  data () {
    return {
        dataText : 'ssdsd'
    }
  },
  name: 'App',
  components: {
    TrgHieu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
