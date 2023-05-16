<template>
    <div>

    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "StartDonationForm",
    data(){
        return{
            goals:1,
        }
    },
    mounted() {
        this.getGoals()
    },
    methods:{
        getGoals(){
            api.get('/api/auth/goals')
                .then(res=>{
                    this.goals=res.data
                    console.log(this.goals);
                })
        }
    }
}
</script>

<style scoped>

</style>
