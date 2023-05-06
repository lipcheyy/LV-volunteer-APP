<template>
    <div>
        <div v-for="wanted in wanteds">
            <template v-for="image in wanted.images">
                <div>
                    <img :src="image.url" alt="">
                </div>
            </template>
            <div>
                {{ wanted.name }}
            </div>
            <div>
                {{ wanted.about }}
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "WantedIndex",
    data() {
        return {
            wanteds: null
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

                    this.wanteds.forEach(e=>{
                        console.log(e);
                    })
                })
        }
    }
}
</script>

<style scoped>

</style>
