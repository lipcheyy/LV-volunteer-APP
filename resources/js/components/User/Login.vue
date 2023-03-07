<template>
    <div>
        login
        your email
        <input type="email" v-model="email" class="form-control w-25">
        password
        <input type="password" v-model="password" class="form-control w-25">
        <input type="submit" class="btn btn-primary" value="log">
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
    }
}
</script>

<style scoped>

</style>
