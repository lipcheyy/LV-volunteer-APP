<template>
    <div>
        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
        <div class="main">
            <div class="containers" v-for="wanted in wanteds">
                <template v-for="image in wanted.images">
                    <wanted-template
                       :name="wanted.name"
                    >
                    </wanted-template>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../api";
import WantedTemplate from "./WantedTemplate";
import {getWanteds} from '../../Scripts/Wanteds/getWanteds'
export default {
    name: "WantedRelativesDashboard",
    components: {
        WantedTemplate
    },

    data(){
        return{
            wanteds:null
        }
    },
    mounted() {
        getWanteds().then((wanteds) => {
            this.wanteds = wanteds;
            console.log(this.wanteds);
        });
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
    flex-wrap: wrap;
    justify-content: space-around;
}
.containers{
    width: 350px;
    height: 400px;
    background-color: black;
    margin-bottom: 40px;
}
</style>
