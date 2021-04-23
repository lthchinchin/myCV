<template>
 <div>
 <h2>{{count}}</h2>
    <button @click="count++">Click meee</button>
 </div>
 
</template>

<script>
export default {
  data () {
    return {
        count : 999
    }
  },

}
</script>

<style>

</style>