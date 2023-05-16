<template>
    <div>
        <select v-model="goalId">
            <template v-for="goal in goals">
                <option :value="goal.id">{{goal.title}}</option>
            </template>
        </select>
        <input type="text" v-model="title">
        <vue-editor v-model="content"></vue-editor>
        <input type="submit" value="add" @click.prevent="store">
    </div>
</template>

<script>
import api from "../../api";
import {VueEditor} from "vue2-editor";
export default {
    name: "StartDonationForm",
    components:{
        VueEditor
    },
    data(){
        return{
            goals:null,
            goalId:1,
            title:null,
            content:null,

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
        },
        store(){
            console.log(this.goalId);
            console.log(this.title);
            console.log(this.content);
        }
    }
}
</script>

<style scoped>

</style>
