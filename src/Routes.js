import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import AddContact from './views/AddContact'
import Home from './components/HomeVue'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Projects from './views/Projects'


const router = new VueRouter({
    mode :'history',

    routes: [
        {
            path: "/",
            component: Home
        },
    

        {
            path: "/contact",
            component: AddContact
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/portfolio",
            component: Portfolio
        },
        {
            path:"/projects",
            component: Projects
        },
      ]
    
   
});

export default router