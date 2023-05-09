<template>
    <div>
        <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <router-link v-if="access_token" :to="{name:'posts.index'}">posts</router-link>
        <router-link v-if="access_token" :to="{name:'personal.page'}">personal</router-link>
        <router-link :to="{name:'map.index'}">map</router-link>
        <router-link  :to="{name:'wanted.index'}">wanted</router-link>
        <router-link v-if="access_token && user_role===1" :to="{name:'admin.statistic'}">admin</router-link>
        <a href="#" v-if="access_token" @click.prevent="logout">logout</a>
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
    },
    updated() {
        this.getAccessToken()
        this.getUserRole()
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
