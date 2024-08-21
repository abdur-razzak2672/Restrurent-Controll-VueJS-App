 
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomeComponent from '@/components/HomePage.vue';
import SignUpComponent from '@/components/SignUp.vue';
import SignInComponent from '@/components/SignIn.vue';
import Update from '@/components/restaurent/Update.vue';
import Add from '@/components/restaurent/Add.vue';
import List from '@/components/restaurent/List.vue';
 
 
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomeComponent,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUpComponent,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignInComponent,
  },
  {
    path: '/add',
    name: 'AddRestaurent',
    component: Add,
  },
  {
    path: '/update',
    name: 'UpdateRestaurent',
    component: Update,
  },
  {
    path: '/list',
    name: 'ListRestaurent',
    component: List,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
