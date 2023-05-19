<template>
    <div class="container">
        <div class="form-container">
            Оберіть категорію
            <select v-model="goalId" class="form-control mb-3">
                <template v-for="goal in goals">
                    <option :value="goal.id">{{ goal.title }}</option>
                </template>
            </select>
            Додайте короткий заголовок
            <input type="text" v-model="title" class="form-control">
            <div>
                Опишіть цілі донату
                <vue-editor class="editor" useCustomImageHandler @image-added="imageAdded" v-model="content"></vue-editor>
            </div>
            <input type="submit" value="Почати збір" @click.prevent="store" class="mt-2 btn btn-outline-info">
        </div>
    </div>
</template>

<script>
import api from "../../api";
import {VueEditor} from "vue2-editor";
export default {
    name: "StartDonationForm",
    components:{
        VueEditor
    },
    data(){
        return{
            goals:null,
            goalId:1,
            title:null,
            content:null,

        }
    },
    mounted() {
        this.getGoals()
    },
    methods:{
        getGoals(){
            api.get('/api/auth/goals')
                .then(res=>{
                    this.goals=res.data
                })
        },
        store(){
            api.post('/api/auth/donations',
                {content:this.content,title:this.title,goal_id:this.goalId})
                .then(()=>{
                    this.content=''
                    this.title='' })
        },
        imageAdded(file,Editor,cursorLocation,resetUploader){
            const data=new FormData()
            data.append('image',file)
            api.post('/api/auth/donations/images',data)
                .then(res=>{
                    const url=res.data.url
                    Editor.insertEmbed(cursorLocation,'image',url)
                    resetUploader()
                })
            console.log(file);
        }
    }
}
</script>

<style scoped>
img{
    width: 30px;
    height: 30px;
}
.editor{
   color: white;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;

}

.form-container {
    background-color: #C6D9D95E;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
}

.form-control {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.btn {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #007bff;
}

.btn:hover {
    background-color: #0056b3;
}

.editor {
    margin-top: 20px;
}
</style>








