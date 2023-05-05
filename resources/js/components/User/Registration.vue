<template>
    <div class="registration-form">
        <h2>Registration</h2>
        <div class="form-group">
            <label for="name">Username</label>
            <input type="text" v-model="name" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password">
        </div>
        <div class="form-group">
            <label for="password_confirm">Confirm Password</label>
            <input type="password" v-model="password_confirm" class="form-control" id="password_confirm">
        </div>
        <button @click.prevent="storeUser" class="btn btn-primary">Register</button>
        <p v-if="error" class="text-danger">{{ this.error }}</p>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirm: null,
            error:null,
        }
    },
    methods: {
        storeUser() {
            axios.post('/api/users/registration',
                {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password_confirm
                })
                .then(res => {
                    localStorage.setItem('access_token',res.data.access_token)
                    this.$router.push({name:'personal.page'})
                })
                .catch(
                    error=>{
                        this.error=error.response.data.message
                        //this.error=error.response.data.errors.password[0];
                    }
                )
        }
    }

}
</script>
<style scoped>
.registration-form {
    max-width: 400px;
    margin: 0 auto;
}
.registration-form h2 {
    text-align: center;
}
.registration-form .form-group {
    margin-bottom: 1.5rem;
}
.registration-form label {
    display: block;
    margin-bottom: 0.5rem;
}
.registration-form input[type="text"],
.registration-form input[type="email"],
.registration-form input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
}
.registration-form button[type="submit"] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    background-color: #007bff;
    border: none;
    color: #fff;
    cursor: pointer;
}
.registration-form button[type="submit"]:hover {
    background-color: #0069d9;
}
.registration-form .text-danger {
    margin-top: 0.5rem;
}
</style>






