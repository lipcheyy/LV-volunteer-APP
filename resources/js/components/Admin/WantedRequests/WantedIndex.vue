<template>
    <div>
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
                    <div class="approve btn btn-success" @click.prevent="approveRequest(wanted.id)">approve</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../../api";
import WantedTemplate from "../../FindRelative/WantedTemplate";
export default {
    components:{
        WantedTemplate
    },
    name: "WantedIndex",
    data() {
        return {
            wanteds: null,
            approveStatus:null
        }
    },
    mounted() {
        this.getWanteds()
    },
    methods: {
        getWanteds() {
            api.get('/api/auth/admin/wanted')
                .then(res => {
                    this.wanteds = res.data.data
                    console.log(this.wanteds);
                })
        },
        approveRequest(id){
            api.patch(`/api/auth/admin/wanted/${id}`,{
                'approved':true
            })
                .then(()=>{this.getWanteds()})
        }
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
    background-color: black;
    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
    padding-bottom: 20px;
}
.approve{
    margin-left: 20px;
}
</style>
