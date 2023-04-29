<template>
    <div>
        <user-create></user-create>
        <table class="table">
            <thead>
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
            </thead>
            <tbody>
                <template v-for="user in users">
                    <tr>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role}}</td>
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
           users:null
        }
    },
    mounted() {
        this.getUsers()
    },
    methods:{
        getUsers(){
            api.get('/api/auth/admin/users')
                .then(res=>{
                    this.users=res.data
                    console.log(this.users);
                })
        }
    }
}
</script>

<style scoped>

</style>
