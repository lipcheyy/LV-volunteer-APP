<template>
    <div>
        <div v-for="request in requests">
            <h3>{{ `${request.name}  ${request.surname} ${request.middlename}`}}</h3>
            <p>{{request.about}}</p>
            <input type="submit" value="approve" class="btn btn-success" @click.prevent="approveStatus(request.user_id,request.card)">
            <input type="submit" value="disapprove" class="btn btn-danger" @click.prevent="disapprove(request.id)">
        </div>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "VolunteerRoleRequest",
    data(){
        return{
            requests:null,
            card:null
        }
    },
    mounted() {
        this.getRequests()
    },
    methods:{
        getRequests(){
            api.get('/api/auth/admin/volunteer')
                .then(res=>{
                    this.requests=res.data
                    this.card=res.data.card
                    console.log(res.data);
                })
        },
        disapprove(id){
            api.delete(`/api/auth/admin/volunteer/volunteer-statuses/${id}`)
                .then(()=>{this.getRequests()})
        },
        approveStatus(id,card){
            api.patch(`/api/auth/admin/volunteer/${id}`,{role:2,card:card})
                .then(()=>{this.getRequests()})
        }
    }
}
</script>

<style scoped>

</style>
