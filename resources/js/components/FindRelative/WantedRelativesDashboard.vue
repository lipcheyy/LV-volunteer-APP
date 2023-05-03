<template>
    <div>
        wanted persons

        <a href="" class="btn btn-primary" @click.prevent="findForm">find yout relative</a>
    </div>
</template>

<script>
export default {
    name: "WantedRelativesDashboard",
    methods:{
        findForm(){
            const access_token=localStorage.getItem('access_token')
            if (access_token){
                this.$router.push({name:'wanted.request'})
            }
            else {
                this.$router.push({name:'user.login'})
            }
        }
    }
}
</script>

<style scoped>

</style>
