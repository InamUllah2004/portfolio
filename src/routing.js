import { createRouter, createWebHistory } from 'vue-router';
import About  from './About.vue'
import Home from './mainFunc.vue'
import Contact from './contact.vue'
const routes = [
  { path: '/about', component: About, meta: { 
    title: 'About Me', 
  } },
  { path: '/', component: Home, meta: { 
    title: 'Home', 
  } } ,
  { path: '/Contact', component: Contact, meta: { 
    title: 'Contact Me', 
  } } ,
 ];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
