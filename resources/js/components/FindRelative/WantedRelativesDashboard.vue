<template>
    <div>
        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
        <div class="filter">
            <select v-model="region_id">
                <template v-for="region in regions">
                    <option :value="region.id">
                        {{region.title}}
                    </option>
                </template>
            </select>
            <router-link :to="{name:'regions.index',params:{id:this.region_id}}">sort</router-link>
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
            api.get('/api/auth/regions')
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

    margin-bottom: 40px;
    border: 2px solid #b4b4b4;
    border-radius: 10px;
}

</style>
