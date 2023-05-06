<template>
    <div>
        <div v-for="wanted in wanteds" class="w-100">
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
            <div>
                <input type="submit" @click.prevent="approveRequest(wanted.id)"
                       class="btn btn-success" value="approve this request">
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
        }
    }
}
</script>

<style scoped>

</style>
