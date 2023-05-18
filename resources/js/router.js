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
        },
        {
            path:'/admin/main',
            component:()=>import('./components/Admin/AdminStatistic'),
            name:'admin.statistic',

        },
        {
            path:'/admin/category',
            component:()=>import('./components/Admin/Category/CategoryIndex'),
            name:'category.index',
        },
        {
            path:'/admin/post',
            component:()=>import('./components/Admin/Post/Create'),
            name:'post.create'
        },
        {
            path:'/admin/users',
            component:()=>import('./components/Admin/User/UsersIndex'),
            name:'user.index'
        },
        {
            path:'/',
            component:()=>import('./components/Admin/Post/PostIndex'),
            name:'posts.index'
        },
        {
            path:'/wanted',
            component:()=>import('./components/FindRelative/WantedRelativesDashboard'),
            name:'wanted.index'
        },
        {
            path:'/wanted/request',
            component:()=>import('./components/FindRelative/FindPersonRequestForm'),
            name:'wanted.request'
        },
        {
            path:'/admin/wanted',
            component:()=>import('./components/Admin/WantedRequests/WantedIndex'),
            name:'admin.wanted'
        },
        {
            path:'/personal/volunteer-role-apply',
            component:()=>import('./components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm'),
            name:'personal.role.apply'
        },
        {
            path:'/admin/accept-user-volunteer-status',
            component:()=>import('./components/Admin/VolunteerRoleRequest/VolunteerRoleRequest'),
            name:'admin.status.request'
        },
        {
            path:'/map',
            component:()=>import('./components/OpenStreetMap/MapIndex'),
            name:'map.index'
        },
        {
            path:'/donations/start-new-donation',
            component:()=>import('./components/MakeDonation/StartDonationForm'),
            name:'donation.start'
        },
        {
            path:'/donations',
            component:()=>import('./components/MakeDonation/DonationRequestLinks'),
            name:'donation.index'
        },
        {
           path:'/wanted/:id/info',
           component:()=>import('./components/FindRelative/WantedPersonShow'),
           name:'wanted.show'
        },
        {
            path:'/region/:id',
            component:()=>import('./components/FindByRegion/FindByRegionIndex'),
            name:'regions.index'
        },
        {
            path:'/donate/:id',
            component:()=>import('./components/MakeDonation/DonateComponent'),
            name:'user.donate'
        }
    ]
})

route.beforeEach((to,from,next)=>{
    const access_token=localStorage.getItem('access_token')
    const user_role=localStorage.getItem('user_role')
    if (!access_token){
        if (to.name==='user.login' || to.name==='user.registration'
            ||to.name==='wanted.index'||to.name==='wanted.show'){
            return next()
        }
        else {
            return next({
                name:'user.login'
            })
        }
    }
    if (user_role!=='1'){
        if (to.name==='admin.statistic'){
            return next({
                name:'personal.page'
            })
        }
    }
    if (user_role==='2'){
        if (to.name==='personal.role.apply'){
            return next({
                name:'personal.page'
            })
        }
    }

    if (to.name==='admin.statistic' )
    if (to.name==='user.login' || to.name==='user.registration'){
        if (access_token){
            next({
                name:'personal.page'
            })
        }
    }
    return next()
})

export default route
