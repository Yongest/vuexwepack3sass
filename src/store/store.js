import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  strict:true,
  state: {
    product: [{
        name: '马云',
        price: '20'
      },
      {
        name: '马云2',
        price: '203'
      },
    ]
  },
  getters:{
    product(state){
      let newArr = state.product.map((v)=>{
        return {
          name:'**'+v.name+'**',
          price:"**"+v.price+"**"
        }
      })
      return newArr;
    }
  },
  mutations:{
    reducePrice(state){
      state.product.forEach(element => {
        element.price -=.1;
      });
    },
    addPrice(state,payload){
      state.product.forEach(element => {
        element.price =element.price-0+payload;
      });
    }
  },
  // 异步操作，使用这个
  actions:{
    /**
     * 
     * @param {*} context  相当于store
     * @param {*} playload  组件传递过来的数据
     */
    addPrice(context,payload){

      setTimeout(() => {
        context.commit('addPrice',payload)
      }, 2000);
    }
  }

})
