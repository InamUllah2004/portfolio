import { createRouter, createWebHistory } from 'vue-router';
import About  from './About.vue'
import Home from './mainFunc.vue'

const routes = [
  { path: '/about', component: About, meta: { 
    title: 'About Me', 
  } },
  { path: '/', component: Home, meta: { 
    title: 'Home', 
  } } 
 ];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
