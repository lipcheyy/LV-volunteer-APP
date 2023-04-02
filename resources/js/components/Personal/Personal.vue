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

        }
    },
    name: "Personal",
    mounted() {
        this.username()
        this.userdata()
    },
    methods:{
        userdata() {
            api.post('/api/auth/me')
                .then(res=>{
                    const user =res.data
                    console.log(user.name);
                    localStorage.setItem('username',user.name)
                })
        },
        username(){
            api.get('/api/auth/personal')
                .then(res=>{
                    this.user=res.data[0]
                    console.log(this.user);
                })
        }
    },

}
</script>

<style scoped>

</style>
