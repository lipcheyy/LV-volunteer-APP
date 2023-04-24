<template>
    <div>
        <input type="text" v-model="title">
        <input type="text" v-model="content">
    </div>
</template>

<script>
export default {
    name: "PostCreate",
    data(){
        return{
            title:'',
            content:null
        }
    }
}
</script>

<style scoped>

</style>
