<template>
    <div>
        <div v-for="request in requests">
            <h3>{{ `${request.name}  ${request.surname} ${request.middlename}`}}</h3>
            <p>{{request.about}}</p>
            <input value="approve" class="btn btn-success" @click.prevent="approveStatus(request.id)">
        </div>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "VolunteerRoleRequest",
    data(){
        return{
            requests:null
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
                })
        },
        approveStatus(id){
            api.patch(`/api/auth/admin/volunteer/${id}`,{role:2})
        }
    }
}
</script>

<style scoped>

</style>
