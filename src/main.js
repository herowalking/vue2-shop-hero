// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueInfiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(VueLazyLoad, {
  loading: 'static/loading-svg/loading-bars.svg',
  // try: 3  //default 1
  attempt: 3  //default 1
});

Vue.use(VueInfiniteScroll);
Vue.use(vuex);

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    //更新购物车信息
    updateCartCont(state, cartCount) {
      state.cartCount = cartCount;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
