<template>
    <div >
        <div style="margin-bottom: 10px" class="header">
            <router-link v-if="!access_token" :to="{name:'user.login'}">Авторизація</router-link>
            <router-link v-if="!access_token" :to="{name:'user.registration'}">Реєстрація</router-link>
            <router-link v-if="access_token" :to="{name:'posts.index'}">Новини</router-link>
            <router-link v-if="access_token" :to="{name:'donation.index'}">Донати</router-link>
            <router-link v-if="access_token" :to="{name:'map.index'}">Карта</router-link>
            <router-link  :to="{name:'wanted.index'}">Шукай Зниклих</router-link>
            <router-link v-if="access_token && user_role===1" :to="{name:'admin.statistic'}">Адмін Панель</router-link>
            <router-link v-if="access_token" :to="{name:'personal.page'}"><i class="fas fa-user"></i></router-link>
            <a href="#" v-if="access_token" @click.prevent="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
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
            user_role:null,
            siu:'suuui'
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
                        localStorage.setItem('id',user.id)
                        localStorage.setItem('username',user.name)
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
.header{
    padding: 19px 20px;
    background-color: black;
    display: flex;
    justify-content: space-around;
}
a{
    color:white;
    text-decoration: none;
}

</style>
