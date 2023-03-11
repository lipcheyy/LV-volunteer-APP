<template>
<div>personal page but its backend rem</div>
</template>

<script>
import api from "../../api";
export default {
    name: "Personal",
    mounted() {
        this.username()
        this.userdata()
    },
    methods:{
        userdata() {
            api.post('/api/auth/me')
                .then(res=>{
                    const user =res.data.name
                    localStorage.setItem('username',user)
                })
        },
        username(){
            api.get('/api/auth/personal')
                .then(res=>{
                    console.log(res);
                })
        }
    },

}
</script>

<style scoped>

</style>
