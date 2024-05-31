import Vue from 'vue';
import Router from 'vue-router';
import MaxShop from './components/MaxShop.vue'; 

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MaxShop',
      component: MaxShop
    }
    // Alte rute pot fi adăugate aici
  ]
});
