<template>
  <!-- <div style="position: relative; height: 500px">
    <div class="inline">
      <h2>{{ $store.state.countVuex }}</h2>
      <button @click="up">Click meee</button>
    </div>
  </div> -->
  <div class="place">
    <div class="group">
      <h1>Hieu</h1>
      <button @click="up">Click</button>
      <p>Count...{{ $store.state.countVuex }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    up() {
      this.$store.commit("increment");
    },
  },
  data() {
    return {
      count: 999,
    };
  },
};
</script>

<style>
.place {
  position: relative;
  width: 100%;
  height: 200px;
}

.group {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
}

div .inline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inline {
  display: flex;
  flex-direction: center;
  align-items: center;
}

h2 {
  color: tan;
  margin-right: 20px;
}
</style>