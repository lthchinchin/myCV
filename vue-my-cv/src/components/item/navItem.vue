<template>
  <li :style="getPath == item.href ? 'z-index: 1;' : ''">
    <router-link
      :class="[{ 'navigator-active': getPath == item.href }, item.class]"
      :to="getRouter(item.href)"
    ></router-link>
  </li>
  <!--    :class="[getPath == item.href ? 'navigator-active' : '', item.class]" -->
</template>

<script>
export default {
  methods: {
    getRouter(link) {
      return "/" + link.split(".")[0];
    },
  },
  props: {
    item: Object,
    getPath: String,
  },
};
</script>

<style>
</style>