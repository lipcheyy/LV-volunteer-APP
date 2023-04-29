<template>
    <div>
        <user-create ref="create"></user-create>
        <table class="table">
            <thead>
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th colspan="2">actions</th>
            </thead>
            <tbody>
                <template v-for="user in users">
                    <tr :class="userToEdit(user.id)?'d-none':''">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role}}</td>
                        <td>
                            <a href="#"
                               @click.prevent="getUserDataToEdit(user.id,user.name,user.role)"
                            >edit</a>
                        </td>
                    </tr>
                    <tr :class="userToEdit(user.id)?'':'d-none'">
                        <td>{{user.id}}</td>
                        <td><input v-model="name" type="text" class="form-control" ></td>
                        <td>
                            <select v-model="role_id">
                                <template v-for="(role,roleId) in roles">
                                    <option :value="roleId">{{role}}</option>
                                </template>
                            </select>
                        </td>
                        <td><a href="#" @click.prevent="update(user.id)">update</a></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import UserCreate from "./UserCreate";
import api from "../../../api";
export default {
    name: "UsersIndex",
    components: {UserCreate},
    data(){
        return{
           users:null,
            toEdit:null,
            name:'',
            role_id:null,
            roles:null
        }
    },
    mounted() {
        this.getUsers()
        this.getRoles()
        // this.roles=this.$refs.create.roles
    },
    methods:{
        getUsers(){
            api.get('/api/auth/admin/users')
                .then(res=>{
                    this.users=res.data
                    console.log(this.users);
                })
        },
        getRoles(){
            api.get('/api/auth/admin/users/roles')
                .then(res=>{
                    this.roles=res.data
                })
        },
        getUserDataToEdit(id,name,role){
            this.toEdit=id
            this.name=name
            this.role_id=role
        },
        userToEdit(id){
            return this.toEdit===id
        },
        update(id){
            this.toEdit=null
            api.patch(`/api/auth/admin/users/${id}`,
                {
                    name:this.name,
                    role:this.role_id
                })
                .then(res=>{
                    this.getUsers()
                })
        },
    }
}
</script>

<style scoped>

</style>
