<template>
    <div>
        wanted persons

        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "WantedRelativesDashboard",
    data(){
        return{
            wanteds:null
        }
    },
    mounted() {
        this.getWanteds()
    },
    methods:{
        findForm(){
            const access_token=localStorage.getItem('access_token')
            return access_token ? this.$router.push({name:'wanted.request'}):this.$router.push({name:'user.login'})
        },
        getWanteds(){
            axios.get('/api/wanted')
                .then(res=>{
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>

</style>
