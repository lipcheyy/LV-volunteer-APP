<template>
    <div>
        <create-component ref="test"></create-component>
        <div class="row justify-content-center">
            <div class="col-auto table-con">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th colspan="2">actions</th>
                </tr>
            </thead>
            <tbody>
            <template v-for="category in data">
                <tr :class="categoryToEdit(category.id)?'d-none':''">
                    <td>{{category.id}}</td>
                    <td>{{category.title}}</td>
                    <td>
                        <div class="logoTable">
                            <a class="tableLogo" href="#" @click.prevent="getCategoryDataToEdit(category.id,category.title)"><i class="fas fa-pencil"></i></a>
                            <a class="tableLogo" @click.prevent="destroy(category.id)"  href="#"><i class="fas fa-trash"></i></a>
                        </div>
                    </td>
                <tr :class="categoryToEdit(category.id)?'':'d-none'">
                    <td>{{category.id}}</td>
                    <td><input v-model="title" type="text" class="form-control" ></td>
                    <td><a href="#" @click.prevent="update(category.id)"><i class="fa-solid fa-pen-to-square"></i></a></td>
                </tr>
            </template>
            </tbody>
        </table>
            </div>
            </div>
    </div>
</template>

<script>
import api from "../../../api";
import CreateComponent from "./CreateComponent";

export default {
    name: "CategoryIndex",
    components: {CreateComponent},
    data() {
        return {
            data: null,
            title:''
        }
    },
    mounted() {
        //console.log(this.$refs.test.backcall());
        this.getCategories()
    },
    methods: {
        getCategories() {
            api.get('/api/auth/goals')
                .then(res => {
                    this.data=res.data
                    console.log(res);
                })
        },
        getCategoryDataToEdit(id,title){
            this.toEdit=id
            this.title=title
        },
        categoryToEdit(id){
            return this.toEdit===id
        },
        update(id){
            this.toEdit=null
            api.patch(`/api/auth/goals/${id}`,{title:this.title})
                .then(res=>{
                    this.getCategories()
                })
        },
        destroy(id){
            api.delete(`/api/auth/goals/${id}`)
                .then(res=>{
                    this.getCategories()
                })
        },
    }
}
</script>

<style scoped>
.table-con{
    width: 40%;
}
.fa-pencil, .fa-pen-to-square{
    color: green;
}
.fa-trash{
    color: red;
}
</style>
