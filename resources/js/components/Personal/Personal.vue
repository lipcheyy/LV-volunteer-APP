<template>
    <div>
        <router-link v-if="userRole===0" :to="{name:'personal.role.apply'}" class="btn btn-primary">Подати заявку на отримання звання волонотера</router-link>
        <router-link v-if="userRole===2" :to="{name:'donation.start'}" class="btn btn-primary">Почати збір</router-link>
        Редагувати профіль
        <input type="text" v-model="name">
        <input type="text" v-model="old_password">
        <input type="text" v-model="password">
        <input type="text" v-model="password_confirm">
        <input type="submit" @click.prevent="updateUserData">
    </div>
</template>

<script>
import api from "../../api";
export default {
    data(){
        return{
            userRole:parseInt(localStorage.getItem('user_role')),
            username:null,
            name:null,
            password:null,
            old_password:null,
            password_confirm:null
        }
    },
    name: "Personal",
    mounted() {
        // this.userdata()
    },
    methods:{
        updateUserData(){
            api.patch('/api/auth/user/update',{
                password:this.password_confirm,
                old_password:this.old_password,
                password_confirm:this.password_confirm,

            })
        }
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
