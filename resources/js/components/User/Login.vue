<template>
    <div class="login-container">
        <h2 class="login-title">Login</h2>
        <div class="form-group">
            <label for="email">Your email</label>
            <input type="email" v-model="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password">
        </div>
        <button type="submit" @click.prevent="login" class="btn btn-primary">Log in</button>
        <p v-if="error" class="error-message">{{error}}</p>
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
                    this.$router.push({name:'posts.index'})
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
.login-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

.login-title {
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.error-message {
    color: red;
    margin-top: 1rem;
}
</style>
