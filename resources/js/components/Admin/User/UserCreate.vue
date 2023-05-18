<template>
    <div class="create_container">
        login
        <input type="text" v-model="name" class="form-control">
        email
        <input type="email" v-model="email" class="form-control">
        pass
        <input type="password" v-model="password" class="form-control">
        passs_conf
        <input type="password" class="mb-2 form-control" v-model="password_confirm" >
        <select v-model="role_id" class="form-control">
            <template v-for="(role,roleId) in roles">
                <option :value="roleId">{{role}}</option>
            </template>
        </select>
        <input @click.prevent="store" type="submit" value="add new" class="btn btn-success">
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
.create_container{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 10px;
    width: 300px;
}
</style>
