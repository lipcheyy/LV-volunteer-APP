<template>
    <div>
        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
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
            api.get(`/api/auth/regions/${this.region_id}`)
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
    justify-content: space-around;
}

.containers {

    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
}
</style>
