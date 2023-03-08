<template>
    <div class="w-25">
        username
        <input type="text" v-model="name" class="form-control">
        email
        <input type="email" v-model="email" class="form-control">
        pass
        <input type="password" v-model="password" class="form-control">
        pass_conf
        <input type="password" v-model="password_confirm" class="form-control">
        <input @click.prevent="storeUser" type="submit" value="reg">
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
            response:null,
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
                    console.log(res.data);
                })
                .catch(
                    error=>{
                        this.response=error.response.data.response
                        console.log(this.response);
                    }
                )
        }
    }

}
</script>

<style scoped>

</style>
