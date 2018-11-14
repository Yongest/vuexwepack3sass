<template>
    <div>
        <h1>three</h1>
        <ul>
        <li v-for="v in product">
            <span>{{v.name}}</span>
            <span>￥{{v.price}}</span>
        </li>
        </ul>
        <button @click="addPrice(0.1)">升价格</button>
    </div>
    
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:{
     /*  product(){
          return this.$store.getters.getProduct
      } */
      ...mapGetters([
          'product'
      ])
  },
  data(){
      return{

      }
  },
  methods:{
      /* addPrice(num){
          console.info(num)
          this.$store.dispatch('addPrice',num)
      } */

        ...mapActions([
            "addPrice"
        ])
  }
};
</script>