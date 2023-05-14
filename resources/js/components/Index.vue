<template>
    <div >
        <div style="margin-bottom: 10px">
            <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
            <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
            <router-link v-if="access_token" :to="{name:'posts.index'}">posts</router-link>
            <router-link v-if="access_token" :to="{name:'personal.page'}">personal</router-link>
            <router-link :to="{name:'map.index'}">map</router-link>
            <router-link  :to="{name:'wanted.index'}">wanted</router-link>
            <router-link v-if="access_token && user_role===1" :to="{name:'admin.statistic'}">admin</router-link>
            <a href="#" v-if="access_token" @click.prevent="logout">logout</a>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>

import api from "../api";
export default {
    name: "Index",
    data(){
        return{
            access_token:null,
            user_role:null
        }
    },
    mounted() {
        this.getAccessToken()
        this.getUserRole()
        this.markerIconConfig()
    },
    updated() {
        this.getAccessToken()
        this.getUserRole()
        this.markerIconConfig()
    },
    methods:{
        getAccessToken(){
            this.access_token=localStorage.getItem('access_token')
        },
        getUserRole() {
            if (this.access_token){
                api.post('/api/auth/me')
                    .then(res=>{
                        const user =res.data
                        localStorage.setItem('user_role',user.role)
                        this.user_role=parseInt(user.role)
                    })
            }

        },
        markerIconConfig(){
            let config={
                iconUrl:'storage/icons/pin.png',
                iconSize: [30, 38],
                iconAnchor: [16, 35]
            }
            localStorage.setItem('markerIconUrl', config.iconUrl);
            localStorage.setItem('markerIconSize', JSON.stringify(config.iconSize));
            localStorage.setItem('markerIconAnchor', JSON.stringify(config.iconAnchor));
        },
        logout() {
            api.post('/api/auth/logout')
                .then(res=>{
                    localStorage.clear()
                    this.$router.push({name:'user.login'})
                })
        },

    }
}
</script>

<style scoped>

</style>
