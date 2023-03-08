<template>
    <div>
        login
        your email
        <input type="email" v-model="email" class="form-control w-25">
        password
        <input type="password" v-model="password" class="form-control w-25">
        <input type="submit" @click.prevent="login" class="btn btn-primary" value="log">
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            email:null,
            password:null,
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
                    console.log(access_token);
                    localStorage.setItem('access_token',access_token)

                })
        }
    }
}
</script>

<style scoped>

</style>
