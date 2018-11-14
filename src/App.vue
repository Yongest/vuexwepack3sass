<template>
  <div id="app">
      <one></one>
      <two></two>
      <three></three>
  </div>
</template>

<script>

import one from '../components/one.vue'
import two from '../components/two.vue'
import three from '../components/three.vue'
export default {
  name: 'app',
  components:{
    one,
    two,
    three
  },
  data () {
    return {
     product:[
       {name:'马云',price:'20'},
       {name:'马云2',price:'203'},
     ]
    }
  }
}
</script>

<style lang="scss">

</style>
