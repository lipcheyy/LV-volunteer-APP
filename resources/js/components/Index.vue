<template>
    <div>
        <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <router-link v-if="user_role==='1' && access_token" :to="{name:'admin.statistic'}">adminka</router-link>
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
        this.userRole()
        this.getAccessToken()
        console.log(this.user_role);
    },
    updated() {
        this.getAccessToken()
        this.userRole()
    },
    methods:{
        getAccessToken(){
            this.access_token=localStorage.getItem('access_token')
        },
        userRole(){
            this.user_role=localStorage.getItem('user_role')
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
