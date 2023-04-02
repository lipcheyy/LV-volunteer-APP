<template>
    <div>
        <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <router-link v-if="userRole==='1'" :to="{name:'admin.statistic'}">adminka</router-link>
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
            userRole:null
        }
    },
    mounted() {
        this.getAccessToken()
        this.getUser()
    },
    updated() {
        this.getAccessToken()
    },
    methods:{
        getAccessToken(){
            this.access_token=localStorage.getItem('access_token')
        },
        logout() {

            api.post('/api/auth/logout')
                .then(res=>{
                    localStorage.clear()
                    this.$router.push({name:'user.login'})
                })
        },
        getUser(){
            const id=localStorage.getItem('id');
            api.post('/api/auth/user/userdata',{id:id})
                .then(res=>{
                    this.userRole=res.data.role
                    localStorage.setItem('user_role',this.userRole)
                })
        }

    }
}
</script>

<style scoped>

</style>
