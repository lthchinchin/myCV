<template>
  <div>
    <!---------------------- navigator starts ---------------------->
    <div class="main-navigator">
      <span class="mdi mdi-menu"></span>
      <ul class="navigator-list">
        <navItem
          v-for="item in getNavItemList"
          :key="item.href"
          :getPath="getPath"
          :item="item"
        >
        </navItem>
      </ul>
    </div>
    <!---------------------- end of navigator ---------------------->

    <!---------------------- mobile-menu starts ---------------------->

    <nav class="mobile-nav">
      <div class="container-fluid">
        <div class="page-title col-10 px-0 float-left">
          <h2>
            Mr. <span>{{ getMyName }}</span>
          </h2>
        </div>
        <button class="trigger px-0 col-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-menu">
          <ul class="nav-links">
            <li v-for="item in getNavItemList" :key="item.href">
              <router-link
                :class="{ 'nav-active': getPath == item.href }"
                :to="getRouter(item.href)"
              >
                <i :class="[item.class, 'mr-3']"></i>{{ item.href }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!---------------------- end of mobile-menu ---------------------->

    <!---------------------- next & prev btn starts ---------------------->

    <div class="main-arrow" style="top: calc(50vh - 25px)">
      <arrow-item :navItemList="getNavItemList" />
    </div>

    <!---------------------- end of next & prev btn ---------------------->

    <!---------------------- color switcher starts ---------------------->

    <div class="switcher-wrapper">
      <button class="switcher-trigger">
        <i class="mdi mdi-cog mdi-spin"></i>
      </button>
      <div class="switcher-inner">
        <h6>CHOOSE STYLE</h6>
        <ul class="color-list">
          <li v-for="color in getColorThemeList" :key="color" :class="color">
            <button class="mdi mdi-check" @click="colorChange($event)"></button>
          </li>
        </ul>
      </div>
    </div>

    <!---------------------- end of color switcher ---------------------->
  </div>
</template>

<script>
import navItem from "./item/navItem.vue";
import arrowItem from "./item/arrowItem.vue";
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  methods: {
    getRouter(link) {
      return "/" + link.split(".")[0];
    },
    colorChange(e) {
      const color = $(e.target).closest("li").attr("class");
      import("../assets/CSS/Color/" + color + ".css");
      // console.log(color);
    },
  },
  computed: {
    ...mapGetters([
      "getNavItemList",
      "getMyName",
      "getColorThemeList",
      // ...
    ]),
    getPath() {
      return this.$route.path.replace("/", "");
    },
  },
  components: {
    navItem,
    arrowItem,
  },
};
</script>

<style>
/* @import '../assets/styles/mystyle.css'; */
</style>