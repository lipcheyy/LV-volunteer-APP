<template>
    <div>
        <div v-if="this.user==='Admin'">sui</div>
    </div>
</template>

<script>
import api from "../../api";
export default {
    data(){
        return{
            user:null,
            username:null,
        }
    },
    name: "Personal",
    mounted() {
        this.userdata()
        this.getUser()
    },
    methods:{
        userdata() {
            api.post('/api/auth/me')
                .then(res=>{
                    const user =res.data
                    localStorage.setItem('username',user.name)
                    localStorage.setItem('id',user.id)
                })
        },
        getUser(){
            const id=localStorage.getItem('id');
            api.post('/api/auth/user/userdata',{id:id})
                .then(res=>{
                    console.log(res.data.role);
                })
        }

    },

}
</script>

<style scoped>

</style>
