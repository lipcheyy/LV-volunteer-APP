<template>
    <div class="container">
        <div class="form-container">
            <div class="d-flex flex-column gap-4">
                <label for="firstname" class="form-label">Ім'я:</label>
                <input v-model="name" type="text" id="firstname" class="form-control">

                <label for="surname" class="form-label">Прізвище:</label>
                <input v-model="surname" type="text" id="surname" class="form-control">

                <label for="middlename" class="form-label">По батькові:</label>
                <input v-model="middlename" type="text" id="middlename" class="form-control">

                <label for="about" class="form-label">Дайте коротку інформацію чому саме ви повинні отримати статус волонтера</label>
                <textarea v-model="about" id="about" class="form-control"></textarea>

                <label for="card" class="form-label">Дайте інформацію про кредитну картку</label>
                <input  type="text" v-model="card" id="card" class="form-control">

                <label for="apply" class="form-label">Подати заявку на отримання статусу волонтера</label>
                <input class="btn btn-outline-info" @click.prevent="store" id="apply" value="Подати">
            </div>
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
.container {
    display: flex;
    justify-content: center;
    align-items: center;

}

.form-container {
    background-color: #494949;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
}

.form-label {
    color: #fff;
}

.form-control {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.btn {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #007bff;
}

.btn:hover {
    background-color: #0056b3;
}

</style>
