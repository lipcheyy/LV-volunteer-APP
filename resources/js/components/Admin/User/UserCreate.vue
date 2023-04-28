<template>
    <div class="d-flex flex-md-column w-25">
        login
        <input type="text">
        email
        <input type="email">
        pass
        <input type="password">
        passs_conf
        <input type="password" class="mb-2">
<!--        <select v-model="role_id">-->
<!--            <template v-for="(roleId,role) in roles">-->
<!--                <option :value="roleId">{{role}}</option>-->
<!--            </template>-->
<!--        </select>-->
        <input @click.prevent type="submit" value="add new">
    </div>
</template>

<script>
export default {
    name: "UserCreate",
    data(){
        return{
            name:'',
            email:null,
            password:null,
            password_confirm:null,
            roles:null,
            role_id:1
        }
    },
    mounted() {
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
