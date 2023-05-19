<template>
<div>

    <div class="change-name">
        Редагувати профіль
        <input type="text" class="form-control" v-model="name">
        <input type="submit" class="btn btn-outline-info" value="Оновити ім'я" @click.prevent="updateUsername">
    </div>
    <div class="password-form">
        Змінити пароль
        <input type="password" v-model="old_password" placeholder="Старий пароль" class="form-control">
        <input type="password" v-model="password" placeholder="Новий пароль" class="form-control">
        <input type="password" v-model="password_confirm" placeholder="Підтвердження пароля" class="form-control">
        <input type="submit" @click.prevent="updateUserData" value="Змінити пароль" class="btn btn-primary">
        <div v-if="response" class="alert-danger alert mt-3">{{response}}</div>
    </div>
</div>
</template>

<script>
import api from "../../api";

export default {
    name: "ChangeUserData",
    data(){
        return{
            name:null,
            password:null,
            old_password:null,
            password_confirm:null,
            response:null,
        }
    },
    methods:{
        updateUserData(){
            api.patch('/api/auth/user/update',{
                password:this.password_confirm,
                old_password:this.old_password,
                password_confirm:this.password_confirm,

            }) .then(res=> {
                this.response = res.data.error
                this.password = ''
                this.old_password = ''
                this.password_confirm = ''
            })
        },
        updateUsername(){
            api.patch('/api/auth/user/update/name',{
                name:this.name,
            }) .then(()=>{this.name=''})
        }
        // userdata() {
        //     api.post('/api/auth/me')
        //         .then(res=>{
        //             const user =res.data
        //             localStorage.setItem('user_role',user.role)
        //             this.userRole=parseInt(user.role)
        //         })
        // },
    },
}
</script>

<style scoped>
.password-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.change-name {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-control {
    margin-bottom: 10px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
}

.btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}
.alert{
    padding: 10px;
}


.btn-primary:hover {
    background-color: #0069d9;
}

</style>
