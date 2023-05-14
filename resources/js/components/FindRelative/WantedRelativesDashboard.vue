<template>
    <div>
        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
        <div class="main">
            <div class="containers" v-for="wanted in wanteds">
                <template v-for="image in wanted.images">
                    <wanted-template
                       :name="wanted.name"
                       :about="wanted.about"
                       :url="image.url"
                       :id="wanted.id"
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
        getWanteds().then(res => {
            this.wanteds = res;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.containers{

    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
}

</style>
