<template>
    <div>
        <user-create ref="create"></user-create>
        <div class="mb-3">
            search
            <input id="search-name" v-model="search_user" type="text" >
        </div>
        <table class="table">
            <thead>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
            <th colspan="2">actions</th>
            </thead>
            <tbody>
            <template v-for="user in filteredUsers">
                <tr :class="userToEdit(user.id)?'d-none':''">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td>
                        <a href="#"
                           @click.prevent="getUserDataToEdit(user.id,user.name,user.role)"
                        >edit</a>
                        <a href="#" @click.prevent="destroy(user.id)">destroy</a>
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
    data() {
        return {
            users: null,
            toEdit: null,
            name: '',
            role_id: null,
            roles: null,
            search_user: ''
        }
    },
    mounted() {
        this.getUsers()
        this.getRoles()
    },
    computed: {
        filteredUsers() {
            if (!this.search_user) {
                return this.users
            } else {
                return this.users.filter(user => user.name.toLowerCase().includes(this.search_user.toLowerCase()))
            }
        }
    },
    methods: {
        getUsers() {
            api.get('/api/auth/admin/users')
                .then(res => {
                    this.users = res.data
                })
        },
        getRoles() {
            api.get('/api/auth/admin/users/roles')
                .then(res => {
                    this.roles = res.data
                    console.log(this.roles);
                })
        },
        getUserDataToEdit(id, name, role) {
            this.toEdit = id
            this.name = name
            this.role_id = role
        },
        userToEdit(id) {
            return this.toEdit === id
        },
        update(id) {
            this.toEdit=null
            api.patch(`/api/auth/admin/users/${id}`, {
                name: this.name,
                role: this.role_id
            })
                .then(() => {
                    this.name = ''
                    this.getUsers()
                })
        },
        destroy(id) {
            if (confirm('Ви точно хочете видалити даного користувача?')) {
                api.delete(`/api/auth/admin/users/${id}`)
                    .then(() => {
                        this.getUsers()
                        this.search_user=''
                    })
            }
        },
    }
}
</script>
<style scoped>
</style>
