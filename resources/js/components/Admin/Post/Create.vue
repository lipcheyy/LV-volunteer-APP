<template>
    <div class="w-25">
        <div class="mb-2">
            <input type="text" v-model="title" class="form-control">
        </div>
        <div>
            <textarea type="text" v-model="content" class="form-control"> </textarea>
        </div>
        <input type="submit" @click.prevent="store" value="add">
    </div>
</template>

<script>
import api from "../../../api";

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
            api.post('/api/auth/admin/posts',
                {
                    title:this.title,
                    content:this.content
                })
                .then(res=>{
                    console.log(res);
                })

        }
    }
}
</script>

<style scoped>

</style>
