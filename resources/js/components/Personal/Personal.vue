<template>
    <div>
        <router-link v-if="userRole===0" :to="{name:'personal.role.apply'}" class="btn btn-primary">Подати заявку на отримання звання волонотера</router-link>
        <router-link v-if="userRole===2" :to="{name:'donation.start'}" class="btn btn-primary">Почати збір</router-link>
    </div>
</template>

<script>
import api from "../../api";
export default {
    data(){
        return{
            userRole:parseInt(localStorage.getItem('user_role')),
            username:null,
        }
    },
    name: "Personal",
    mounted() {
        // this.userdata()
    },
    methods:{
        // userdata() {
        //     api.post('/api/auth/me')
        //         .then(res=>{
        //             const user =res.data
        //             localStorage.setItem('user_role',user.role)
        //             this.userRole=parseInt(user.role)
        //         })
        // },
    },

}
</script>

<style scoped>

</style>
