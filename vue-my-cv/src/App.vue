<template>
  <div id="app">
    <navBar />
    <!-- <h2 class="testCss">le trung hieu test css imp</h2> -->
    <!-- <router-link to="/hieu">Go to Hieu</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/contact">Go to Count</router-link> -->
    <!-- <img alt="Vue logo" src="img/ava.jpg" /> -->
    <button @click="goto">Go</button>
    <router-view />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
import navBar from "./components/nav.vue";
import "./assets/CSS/style.css";
// import "./assets/testcss/styles.css";
import "./assets/CSS/type.css";
import "./assets/CSS/Color/yellow.css";
// import axios from "axios";
// import "./assets/CSS/Color/pink.css";

// <link rel="stylesheet" href="CSS/type.css">

// <link rel="stylesheet" type="text/css" href="CSS/Color/yellow.css" id="switcher">

// import TrgHieu from "./components/TrgHieu.vue";

// import "./assets/JS/jquery.lineProgressbar.js";
// import "./assets/JS/waypoints.js";
// import "./assets/JS/jquery.counterup.min.js";
// import "./assets/JS/imagesloaded.pkgd.min.js";
// import "./assets/JS/masonry.pkgd.min.js";
// import "./assets/JS/classie.js";
// import "./assets/JS/modernizr.custom.js";
// import "./assets/JS/jquery.hoverdir.js";
// import "./assets/JS/cbpGridGallery.js";
// import "./assets/JS/type.js";
// import "./assets/JS/script.js";

export default {
  created: function () {
    // axios
    //   .get("http://localhost:81/cuteweb/vueapi/readvueweb.php")
    //   .then((response) => console.log(response));
  },
  methods: {
    goto() {
      location = "/#/home";
    },
  },
  data() {
    return {
      dogRandom: "",
      dataText: "ssdsd",
    };
  },
  name: "App",
  components: { navBar },
};
</script>

<style>
</style>
