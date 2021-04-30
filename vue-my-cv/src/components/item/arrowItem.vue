<template>
  <div>
    <div v-if="indexPrev > -1" class="arrow-prev">
      <router-link class="mdi mdi-menu-up" :to="navItemList[indexPrev].href">
        <h5>{{ navItemList[indexPrev].href }}</h5>
      </router-link>
    </div>
    <div v-if="indexNext < navItemList.length" class="arrow-next">
      <router-link class="mdi mdi-menu-down" :to="navItemList[indexNext].href">
        <h5>{{ navItemList[indexNext].href }}</h5>
      </router-link>
    </div>
  </div>
</template>   

<script>
export default {
  props: { navItemList: Array },
  methods: {
    findIndex() {
      const currentPageIndex = this.navItemList.indexOf(
        this.navItemList.filter((item) => item.href == this.getPath)[0]
      );
      return currentPageIndex;
    },
  },
  computed: {
    getPath() {
      return this.$route.path.replace("/", "");
    },
    indexNext() {
      return this.findIndex() + 1;
    },
    indexPrev() {
      return this.findIndex() - 1;
    },
  },
};
</script>

<style>
</style>