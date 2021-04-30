<template>
 <div>
 <h2>{{$store.state.countVuex}}</h2>
    <button @click="up">Click meee</button>
 </div>
 
</template>

<script>
export default {
  methods: {
      up(){
          this.$store.commit('increment')
      }
  },
  data () {
    return {
        count : 999
    }
  },

}
</script>

<style>

</style>