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
    color: white;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    background: radial-gradient(black, transparent);
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 4px 24px 103px -19px rgba(117, 117, 117, 1);
    -moz-box-shadow: 4px 24px 103px -19px rgba(117, 117, 117, 1);
    box-shadow: 4px 24px 103px -19px rgba(117, 117, 117, 1);
}
.login-container:hover{
    -webkit-box-shadow: 4px 24px 103px -19px rgba(117, 117, 117, 1);
    -moz-box-shadow: 4px 24px 103px -19px rgba(117, 117, 117, 1);
    box-shadow: 4px 24px 103px -19px rgb(82, 42, 42);

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
