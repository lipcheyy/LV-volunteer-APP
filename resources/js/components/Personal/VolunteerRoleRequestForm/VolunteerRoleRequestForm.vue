<template>
<div>
    <div class="d-flex flex-column gap-4 w-50">
        <label for="firstname">Ім'я:</label>
        <input v-model="name" type="text" id="firstname">

        <label for="surname">Прізвище:</label>
        <input v-model="surname" type="text" id="surname">

        <label for="middlename">По батькові:</label>
        <input v-model="middlename" type="text" id="middlename">

        <label for="about">Дайте коротку інформацію чому саме ви повинні отримати статус волонтера</label>
        <textarea v-model="about" id="about"></textarea>
        <label for="card">Дайте коротку інформацію про кредитну картку</label>
        <textarea v-model="card" id="card"></textarea>

        <label for="apply">Подати заявку на отримання статусу волонтера</label>
        <input class="btn-primary btn" @click.prevent="store" id="apply" value="подати ">

    </div>
</div>
</template>

<script>
import api from "../../../api";

export default {
    name: "VolunteerRoleRequestForm",
    data(){
        return{
            name:'',
            surname:'',
            middlename:'',
            about:'',
            card:null
        }
    },
    methods:{
        store(){
            api.post('/api/auth/volunteer-role-request',{
                name:this.name, surname:this.surname,
                middlename:this.middlename, about:this.about, card:this.card
            })
        }
    }
}
</script>

<style scoped>

</style>
