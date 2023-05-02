<template>
    <div>
        name of wanted person
        <input v-model="name" type="text">
        write about person
        <textarea v-model="about"></textarea>

    </div>
</template>

<script>
export default {
    name: "FindPersonRequestForm",
    data(){
        return{
            name:'',
            about:'',

        }
    }
}
</script>

<style scoped>

</style>
