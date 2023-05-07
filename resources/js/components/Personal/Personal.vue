<template>
    <div>
        <router-link :to="{name:'personal.role.apply'}" class="btn btn-primary">Подати заявку на отримання звання волонотера</router-link>
    </div>
</template>

<script>
import api from "../../api";
export default {
    data(){
        return{
            // userRole:null,
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
