<template>
<div>show</div>
</template>

<script>
export default {
    name: "WantedPersonShow",
    data(){
        return{
            wanted:null
        }
    },
    mounted() {
        this.getWanted()
    },
    methods:{
        getWanted(){
            axios.get(`/api/wanted/${this.$route.params.id}`)
                .then(res=>{
                    this.wanted=res.data.data
                    console.log(this.wanted);
                })
        }
    }
}
</script>

<style scoped>

</style>
