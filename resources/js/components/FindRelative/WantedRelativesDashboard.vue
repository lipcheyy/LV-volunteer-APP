<template>
    <div>

        <div class="filter">
            <a href="" class="btn btn-outline-primary" @click.prevent="findForm">find your relative</a>
            <div class="filter-items">
                <select v-model="region_id">
                    <template v-for="region in regions">
                        <option :value="region.id">
                            {{region.title}}
                        </option>
                    </template>
                </select>
                <a class="btn btn-outline-success" @click.prevent="getWantedsByRegion(region_id)">sort</a>
            </div>
        </div>
        <div class="main">
            <div class="content">
                <div class="containers" v-for="wanted in wanteds">
                    <template v-for="image in wanted.images">
                        <router-link :to="{name:'wanted.show',params:{id:wanted.id}}" class="btn">
                            <wanted-template ref="wanted"
                                             :name="wanted.name"
                                             :about="wanted.about"
                                             :url="image.url"
                                             :id="wanted.id"
                            >
                            </wanted-template>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import api from "../../api";
import WantedTemplate from "./WantedTemplate";
import {getWanteds} from '../../Scripts/Wanteds/getWanteds'

export default {
    name: "WantedRelativesDashboard",
    components: {
        WantedTemplate
    },

    data() {
        return {
            wanteds: {},
            regions:null,
            region_id:1
        }
    },
    mounted() {
        getWanteds().then(res => {
            this.wanteds = res;
        });
        this.getRegions()
    },
    methods: {
        findForm() {
            const access_token = localStorage.getItem('access_token')
            return access_token ? this.$router.push({name: 'wanted.request'}) : this.$router.push({name: 'user.login'})
        },
        getRegions(){
            this.$Progress.start()
            axios.get('/api/regions')
                .then(res=>{ this.regions=res.data
                    this.$Progress.finish()
                })
        },
        getWantedsByRegion(id){
            axios.get(`/api/regions/${id}`)
                .then(res=>{
                    this.wanteds=null
                    this.wanteds=res.data.data
                })
        },

    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
.filter-items{
    display: flex;
    gap: 5px;
}
.filter{
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 10px;
}
.containers {
    background-color: #494949;
    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
    -webkit-box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
    -moz-box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
    box-shadow: 4px 24px 103px -19px rgba(117,117,117,1);
}
.containers:hover{
    webkit-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    -moz-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    transition: 0.3s ease-in-out;
}

</style>
