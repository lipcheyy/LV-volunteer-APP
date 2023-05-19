<template>
    <div class="main-container">
        <div class="donations-container" v-for="donation in donations">
            <donation-template
                :id="donation.id"
                :title="donation.title"
                :content="donation.content"
                :user="donation.user"
                :likesCount="donation.likes_count"
                :userLiked="userLiked">
            </donation-template>
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
            donations:null,
            truncatedLength:20,
            truncated:false,
            userLiked:[]
        }
    },
    mounted() {
        this.getDonations()
        this.getUserLiked()
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
.donations-container{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    background: black;
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
