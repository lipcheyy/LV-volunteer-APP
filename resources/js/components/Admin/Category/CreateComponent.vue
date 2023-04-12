<template>
    <div>
        input category title
        <input v-model="title" type="text">
        <a href="#" @click.prevent="create()">create</a>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "CreateComponent",
    data(){
        return{
            title:null
        }
    },
    methods:{
        create(){
            api.post('/api/auth/admin/category',{title:this.title})
                .then(res=>{
                    this.title=''
                    this.$parent.getCategories();
                })
        },
        backcall(){
            console.log('siiiuiii');;
        }
    }
}
</script>

<style scoped>

</style>
