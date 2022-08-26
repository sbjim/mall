import {createRouter,createWebHistory} from "vue-router";
import Home from '../pages/home';
const routerHistory = createWebHistory();

const router = createRouter({
    history:routerHistory,
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            children:[
                {
                    path:'index',
                    name:'index',
                    component:Home,
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:Home,
                    // component:()=>import('')
                },
            ]
        }

    ]
})
export default router;

