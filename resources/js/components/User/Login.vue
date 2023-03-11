<template>
    <div>
        login
        your email
        <input type="email" v-model="email" class="form-control w-25">
        password
        <input type="password" v-model="password" class="form-control w-25">
        <input type="submit" @click.prevent="login" class="btn btn-primary" value="log">
        <p v-if="error" >{{error}}</p>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            email:null,
            password:null,
            error:null,
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login',
                {
                    'email':this.email,
                    'password':this.password
                })
                .then(res=>{
                    let access_token=res.data.access_token
                    localStorage.setItem('access_token',access_token)
                    this.$router.push({name:'personal.page'})

                })
                .catch(error=>{
                    this.error= error.response.data.error;
                })
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
