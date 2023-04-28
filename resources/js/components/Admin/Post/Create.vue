<template>
    <div class="w-25">
        <div class="mb-2">
            <input type="text" v-model="title" class="form-control">
        </div>
        <div>
<!--            <textarea type="text" v-model="content" class="form-control"> </textarea>-->
            <vue-editor v-model="content"></vue-editor>
        </div>
        <select v-model="category_id">
            <template v-for="category in categories">
                <option :value="category.id">{{category.title}}</option>
            </template>
        </select>
        <input type="submit" @click.prevent="store" value="add">
    </div>
</template>

<script>
import api from "../../../api";
import {VueEditor} from 'vue2-editor'
export default {
    name: "PostCreate",
    components:{
        VueEditor
    },
    data(){
        return{
            title:'',
            content:null,
            categories:null,
            category_id:1
        }
    },
    mounted() {
        this.getCategories()
    },
    methods:{
        store(){
            api.post('/api/auth/admin/posts',
                {
                    title:this.title,
                    content:this.content,
                    category_id:this.category_id
                })
                .then(res=>{
                    console.log(res);
                })

        },
        getCategories(){
            api.get('/api/auth/admin/category')
                .then(res=>{
                    this.categories=res.data.data

                })
        }
    }
}
</script>

<style scoped>

</style>
