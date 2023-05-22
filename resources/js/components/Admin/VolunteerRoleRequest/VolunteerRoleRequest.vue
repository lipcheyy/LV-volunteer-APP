<template>
    <div class="container">
        <div v-for="request in requests" class="request-card">
            <h3 class="request-name">{{ `${request.name} ${request.surname} ${request.middlename}`}}</h3>
            <p class="request-about">{{ request.about }}</p>
            <div class="buttons">
                <button class="btn btn-approve" @click.prevent="approveStatus(request.user_id, request.card)">
                    Затвердити
                </button>
                <button class="btn btn-disapprove" @click.prevent="disapprove(request.id)">
                    Відхилити
                </button>
            </div>
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

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.request-card {
    background-color: #f2f2f2;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    width: 400px;
}

.request-name {
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
}

.request-about {
    color: #555;
    font-size: 16px;
    margin-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    gap: 10px;
}

.btn {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-approve {
    background-color: #27ae60;
    color: #fff;
}

.btn-approve:hover {
    background-color: #219653;
}

.btn-disapprove {
    background-color: #c0392b;
    color: #fff;
}

.btn-disapprove:hover {
    background-color: #a82c1a;
}
</style>















