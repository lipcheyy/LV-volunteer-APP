<template>
    <div>
<!--        <router-link v-if="userRole===1" :to="{name:'admin.statistic'}">Admin panel</router-link>-->
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
