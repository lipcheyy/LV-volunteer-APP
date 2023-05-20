<template>
    <div>
        <div class="filter">
            <select v-model="goal_id">
                <option v-for="goal in goals" :value="goal.id">{{goal.title}}</option>
            </select>
            <input type="submit" value="Сортувати" class="btn btn-outline-success" @click.prevent="getDonationByGoal(goal_id)">
        </div>
        <div class="main-container" >
            <div class="donations-container" v-for="donation in donations"
                 v-if="donations.length!==0">
                <donation-template
                    :id="donation.id"
                    :title="donation.title"
                    :content="donation.content"
                    :user="donation.user"
                    :likesCount="donation.likes_count"
                    :userLiked="userLiked">
                </donation-template>
            </div>
            <div v-if="donations.length===0" class="mt-5">
                <div>По даному запиту нічого не знайдено</div>
                <div><img src="storage/icons/unworked-website-3123512-2619678.webp" alt=""></div>
            </div>
        </div>

    </div>
</template>

<script>
import api from "../../api";
import DonationTemplate from "./DonationTemplate";
export default {
    name: "DonationRequestLinks",
    components: {DonationTemplate},

    data(){
        return{
            donations: {},
            truncatedLength:20,
            truncated:false,
            userLiked:[],
            goals:null,
            goal_id:1
        }
    },
    mounted() {
        this.getDonations()
        this.getUserLiked()
        this.getGoals()
    },
    methods:{
        getDonations(){
            api.get('/api/auth/donations')
                .then(res=>{
                    this.donations=res.data.data
                    console.log(this.donations);
                })
        },getUserLiked(){
            api.get('/api/auth/user/likedPosts')
                .then(res=>{
                    res.data.forEach(e=>{
                        this.userLiked.push(e.id)
                    })
                })
        },
        getGoals(){
            api.get('/api/auth/goals').then(res=>{this.goals=res.data})
        },
        getDonationByGoal(id){
            api.get(`/api/auth/goals/get-related-donations/${id}`).then(res=>{
                this.donations=null
                this.donations=res.data.data
            })
        }
    }
}
</script>

<style scoped>
.main-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    flex-wrap: wrap;

}
.filter{
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 10px;
}
.donations-container{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    background: #494949;
    margin-bottom: 40px ;
    -webkit-box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
    -moz-box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
    box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
}
.donations-container:hover{
    -webkit-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    -moz-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    transition: 0.3s ease-in-out;
}
</style>
