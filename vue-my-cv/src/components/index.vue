<template>
  <section class="home" id="home">
    <div class="container-fluid">
      <div class="color-block"></div>
      <div class="row">
        <div class="col-10 col-md-5 col-lg-4"><div class="home-bg"></div></div>
        <div class="col-10 col-md-7 col-lg-8">
          <div class="home-details">
            <div class="home-text">
              <h6>HI THERE !</h6>
              <h1>
                Mr. <span>{{ getMyName }}</span>
              </h1>
              <div class="cd-intro">
                <h6 class="cd-headline clip">
                  <span>I'M </span>
                  <span class="cd-words-wrapper">
                    <b class="is-visible">{{ getMyName }}</b>
                    <b>A WEB DESIGNER</b>
                    <b>A WEB DEVELOPER</b>
                    <b>A LOGO DESIGNER</b>
                  </span>
                </h6>
              </div>
              <p>{{ getMyIntro }}</p>
            </div>
            <div class="col-sm-12 col-md-7 p-0 pb-4">
              <router-link class="description-btn" to="about">
                <span class="name-description">MORE ABOUT ME</span>
                <div class="btn-icon">
                  <i class="mdi mdi-account"></i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      "getMyIntro",
      "getMyName",
      // ...
    ]),
  },
};
</script>

<style>
</style>