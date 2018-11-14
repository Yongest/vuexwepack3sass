<template>
    <div>
        <h1>one</h1>
        <ul>
        <li v-for="v in product">
            <span>{{v.name}}</span>
            <span>￥{{v.price}}</span>
        </li>
        </ul>
        <button @click="reducePrice">降价</button>
    </div>
    
</template>

<script>
export default {
 
  computed:{
      product(){
         return this.$store.getters.product
      }
  },
  data(){
      return{

      }
  },
  methods:{
      reducePrice(){
          this.$store.commit("reducePrice")
      }
  }
};
</script>