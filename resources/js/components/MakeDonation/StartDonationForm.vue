<template>
    <div>
        <select v-model="goalId">
            <template v-for="goal in goals">
                <option :value="goal.id">{{goal.title}}</option>
            </template>
        </select>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "StartDonationForm",
    data(){
        return{
            goals:null,
            goalId:1
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
