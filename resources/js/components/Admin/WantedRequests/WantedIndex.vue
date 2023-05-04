<template>
    <div>
        <div>
            <div>
                <img src="" alt="">
            </div>
            <div>
                name
            </div>
            <div>
                info
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "WantedIndex",
    data(){
        return{
            wanteds:null
        }
    },
    mounted() {
        this.getWanteds()
    },
    methods:{
        getWanteds(){
            api.get('/api/auth/admin/wanted')
                .then(res=>{
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>

</style>
