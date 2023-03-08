<template>
    <div>
        <router-link v-if="!access_token" :to="{name:'user.login'}">logn</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <a href="#" v-if="access_token" @click.prevent="logout">logout</a>
        <router-view></router-view>

    </div>
</template>

<script>
import API from "../api";
export default {
    name: "Index",
    data(){
        return{
            access_token:null
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

            API.post('/api/auth/logout')
                .then(res=>{

                    localStorage.removeItem('access_token')
                    this.$router.push({name:'user.login'})
                })
        },

    }
}
</script>

<style scoped>

</style>
