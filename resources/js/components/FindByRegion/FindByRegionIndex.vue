<template>
    <div>
        <div class="main">
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
</template>

<script>
import api from "../../api";
import WantedTemplate from "../FindRelative/WantedTemplate";
export default {
    name: "FindByRegionIndex",
    components:{
        WantedTemplate
    },
    data(){
        return{
            region_id:parseInt(this.$route.params.id),
            wanteds:null,
            regions:null
        }
    },
    mounted() {
        this.getWanteds()
    },
    methods:{
        getWanteds(){
            axios.get(`/api/regions/${this.region_id}`)
                .then(res=>{
                    console.log(res.data);
                    this.wanteds=res.data.data
                })
        },
        getRegions(){
            api.get('/api/auth/regions')
                .then(res=>{ this.regions=res.data
                })
        }
    }

}
</script>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
   flex-direction: column;
    align-items: center;
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
.containers:hover {
    webkit-box-shadow: 0px 4px 120px 12px rgba(66, 0, 66, 1);
    -moz-box-shadow: 0px 4px 120px 12px rgba(66, 0, 66, 1);
    box-shadow: 0px 4px 120px 12px rgba(66, 0, 66, 1);
    transition: 0.3s ease-in-out;
}
</style>
