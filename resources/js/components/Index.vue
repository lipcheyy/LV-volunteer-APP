<template>
    <div>
        <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <router-link v-if="access_token" :to="{name:'posts.index'}">posts</router-link>
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
        }
    },
    mounted() {
        this.getAccessToken()
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

    }
}
</script>

<style scoped>

</style>
