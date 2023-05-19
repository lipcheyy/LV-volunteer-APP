<template>
    <div>
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
                                             :comment_count="{ 'Кількість відгуків': wanted.comments_count }"
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
import WantedTemplate from "../FindRelative/WantedTemplate";
import {getWanteds} from "../../Scripts/Wanteds/getWanteds";
import api from "../../api";

export default {
    name: "MyRequests",
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
        this.getRequests()
        this.getRegions()
    },
    methods: {
        getRequests(){
            api.get('/api/auth/wanted/user').then(res=>{
                this.wanteds=res.data.data
            })
        },
        getRegions(){
            this.$Progress.start()
            axios.get('/api/regions')
                .then(res=>{ this.regions=res.data
                    this.$Progress.finish()
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
    background-color: #494949;
    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
}
</style>
