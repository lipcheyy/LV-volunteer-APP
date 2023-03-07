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
        <input @click.prevent="log" type="submit" value="reg">
    </div>
</template>

<script>
export default {
    name: "Registration",
    data(){
        return{
            name:null,
            email:null,
            password:null,
            password_confirm:null,
        }
    },
    methods:{
        log(){
            console.log(this.name);
        }
    }

}
</script>

<style scoped>

</style>
