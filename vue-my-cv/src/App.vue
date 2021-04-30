<template>
  <div id="app">
    <navBar />
    <!-- <h2 class="testCss">le trung hieu test css imp</h2> -->
    <!-- <router-link to="/hieu">Go to Hieu</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/contact">Go to Count</router-link> -->
    <!-- <img alt="Vue logo" src="img/ava.jpg" /> -->
    <router-view />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
import navBar from "./components/nav.vue";

// import TrgHieu from "./components/TrgHieu.vue";
export default {
  methods: {},
  data() {
    return {
      dataText: "ssdsd",
    };
  },
  name: "App",
  components: { navBar },
};
</script>

<style>
</style>
