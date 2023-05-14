<template>
    <div>
        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
        <div class="main">
            <div class="containers">

            </div>

        </div>
    </div>
</template>

<script>
import api from "../../api";
import {getWanteds} from '../../Scripts/Wanteds/getWanteds'
export default {
    name: "WantedRelativesDashboard",
    data(){
        return{
            wanteds:null
        }
    },
    mounted() {
        getWanteds(this.wanteds);
    },
    methods:{
        findForm(){
            const access_token=localStorage.getItem('access_token')
            return access_token ? this.$router.push({name:'wanted.request'}):this.$router.push({name:'user.login'})
        },

    }
}
</script>

<style scoped>
.main{
    width: 100%;
    padding-top: 40px;
    height: 100vh;
    background-color: grey;
    display: flex;
    justify-content: space-around;
}
.containers{
    width: 350px;
    height: 400px;
    background-color: black;
}
</style>
