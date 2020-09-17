import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home';

// import Home from 'pages/home';
// import Category from 'pages/category';
// import Cart from 'pages/cart';
// import Personal from 'pages/personal';
// import Search from 'pages/search';
// import Product from 'pages/product';

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home,
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: Home
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category/index.vue')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart/index.vue')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal/index.vue')
  },

  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search/index.vue') },
  {
    path: '*',
    redirect: '/home'
  }
];
export default new Router({
  routes
});
