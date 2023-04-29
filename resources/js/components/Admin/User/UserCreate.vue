<template>
    <div class="d-flex flex-md-column w-25">
        login
        <input type="text" v-model="name">
        email
        <input type="email" v-model="email">
        pass
        <input type="password" v-model="password">
        passs_conf
        <input type="password" class="mb-2" v-model="password_confirm">
        <select v-model="role_id">
            <template v-for="(role,roleId) in roles">
                <option :value="roleId">{{role}}</option>
            </template>
        </select>
        <input @click.prevent="store" type="submit" value="add new">
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "UserCreate",
    data(){
        return{
            name:'',
            email:null,
            password:null,
            password_confirm:null,
            roles:null,
            role_id:0
        }
    },
    mounted() {
        this.getRoles()
    },
    methods:{
        getRoles(){
            api.get('/api/auth/admin/users/roles')
                .then(res=>{
                    this.roles=res.data
                })
        },
        store(){
            api.post('/api/auth/admin/users',
                {
                    name:this.name,
                    email:this.email,
                    password:this.password,
                    password_confirm:this.password_confirm,
                    role:this.role_id

                })
                .then(res=>{
                    this.$parent.getUsers()
                })

        }
    }
}
</script>

<style scoped>

</style>
