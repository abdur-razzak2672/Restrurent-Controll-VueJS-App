 
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomeComponent from '@/components/HomePage.vue';
import SignUpComponent from '@/components/SignUp.vue';
import SignInComponent from '@/components/SignIn.vue';

 
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
