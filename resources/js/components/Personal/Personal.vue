<template>
    <div>
        <div v-if="this.userRole==='1'">sui</div>
    </div>
</template>

<script>
import api from "../../api";
export default {
    data(){
        return{
            userRole:null,
            username:null,
        }
    },
    name: "Personal",
    mounted() {
        this.userdata()
    },
    methods:{
        userdata() {
            api.post('/api/auth/me')
                .then(res=>{
                    const user =res.data
                    localStorage.setItem('username',user.name)
                    localStorage.setItem('user_role',user.role)
                })
        },
    },

}
</script>

<style scoped>

</style>
