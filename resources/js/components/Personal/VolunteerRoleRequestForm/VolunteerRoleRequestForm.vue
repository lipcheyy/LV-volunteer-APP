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

        <label for="apply">Подати заявку на отримання статусу волонтера</label>
        <input class="btn-primary btn" id="apply" value="подати ">

    </div>
</div>
</template>

<script>
export default {
    name: "VolunteerRoleRequestForm",
    data(){
        return{
            name:'',
            surname:'',
            middlename:'',
            about:'',
        }
    }
}
</script>

<style scoped>

</style>
