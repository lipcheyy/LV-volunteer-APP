<template>
    <div>
        <div class="con">
            <label for="text">Напишіть назву категорії</label>
            <input v-model="title" id="text" type="text" class="form-control">
            <a href="#" @click.prevent="create()" class="btn btn-success">Додати категорію</a>
        </div>
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
            api.post('/api/auth/goals',{title:this.title})
                .then(res=>{
                    this.title=''
                    this.$parent.getCategories();
                })
        },
    }
}
</script>

<style scoped>
.con{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom:30px ;
}

a, input{
    width: 25%;
}
</style>
