<template>
    <div>
        <div class="user">
            <div class="rounded-circle">
                <i class="fa-regular fa-user"></i>

            </div>
            <p>{{username}}</p>
        </div>
        <div class="btns">
            <router-link v-if="userRole===2" :to="{name:'donation.start'}" class="btn btn-primary start">Почати збір</router-link>
            <router-link v-if="userRole===0" :to="{name:'personal.role.apply'}" class="btn btn-outline-primary apply">Подати заявку на отримання звання волонотера</router-link>
            <div class="main-btns">
                <a href="" class="btn btn-outline-info" @click.prevent="my_requests=true, changeUserData=false, my_donations=false">Мої оголошення</a>
                <a v-if="userRole===2" href="" class="btn btn-outline-info" @click.prevent="my_requests=false,  changeUserData=false, my_donations=true">Мої збори</a>
                <a href="" class="btn btn-outline-info" @click.prevent="my_requests=false, changeUserData=true, my_donations=false">Редагування даних</a>
            </div>
        </div>
        <change-user-data v-if="changeUserData" class="mt-3"></change-user-data>
        <my-requests v-if="my_requests" class="mt-3"></my-requests>
        <my-donations v-if="my_donations" class="mt-3"></my-donations>
    </div>
</template>

<script>
import api from "../../api";
import myRequests from "./MyRequests";
import changeUserData from "./ChangeUserData";
import MyDonations from "./MyDonations";
export default {
    components:{
        MyDonations,
        changeUserData,
        myRequests
    },
    name: "Personal",
    data(){
        return{
            username:localStorage.getItem('username'),
            changeUserData:false,
            my_requests:true,
            userRole:parseInt(localStorage.getItem('user_role')),
            my_donations:false
        }
    },
    mounted() {
    },


}
</script>

<style scoped>
.fa-user{
    font-size: 40px;
}
.rounded-circle{
    padding: 20px;
    border: 4px solid black;
    display: flex;
    justify-content: center;
    width: 90px;
}
.user{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btns{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
.start,.apply{
}
.main-btns{
    display: flex;
    gap: 10px;
}
</style>
