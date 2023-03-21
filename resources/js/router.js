import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
const route =new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/users/login',
            component: ()=> import('./components/User/Login'),
            name:'user.login'
        },
        {
            path:'/users/registration',
            component: ()=> import('./components/User/Registration'),
            name:'user.registration'
        },
        {
            path:'/personal',
            component: ()=> import('./components/Personal/Personal'),
            name:'personal.page'
        }
    ]
})

route.beforeEach((to,from,next)=>{
    const access_token=localStorage.getItem('access_token')
    console.log(access_token);
    if (!access_token){
        if (to.name==='user.login' || to.name==='user.registration'){
            next()
        }
        else {
            next({
                name:'user.login'
            })
        }
    }
    if (to.name==='user.login'){
        if (access_token){
            next({
                name:'personal.page'
            })
        }
    }
    return next()
})

export default route
