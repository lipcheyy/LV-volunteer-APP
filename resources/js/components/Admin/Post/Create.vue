<template>
    <div class="w-25">
        <div class="mb-2">
            <input type="text" v-model="title" class="form-control">
        </div>
        <div>
            <textarea type="text" v-model="content" class="form-control"> </textarea>
        </div>
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
    },
    methods:{
        store(){

        }
    }
}
</script>

<style scoped>

</style>
