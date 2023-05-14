<template>
    <div class="w-25 d-flex gap-4 flex-column">
        name of wanted person
        <div>
            <input v-model="name" type="text" class="form-control">
        </div>
        write about person
        <div>
            <textarea v-model="about" class="form-control"></textarea>
        </div>
        <div ref="dropzone" class="p-4 bg-info"></div>
        <div>
            <input type="submit" class="btn btn-success" @click.prevent="store" value="add request">
        </div>
    </div>
</template>

<script>
import Dropzone from 'dropzone'
import api from "../../api";
export default {
    name: "FindPersonRequestForm",
    data(){
        return{
            name:'',
            about:'',
            dropzone:null
        }
    },
    mounted() {
        this.dropzone=new Dropzone(
            this.$refs.dropzone,
            {
                url:'/sdf',
                maxFiles:1,
                autoProcessQueue:false
            }
        )
    },
    methods:{
        store(){
            const images=this.dropzone.getAcceptedFiles();
            const data=new FormData()
            images.forEach(image=>{
                data.append('images[]',image)
            })
            data.append('name',this.name)
            data.append('about',this.about)
            api.post('/api/auth/wanted',data)
                .then(res=>{
                    this.dropzone.removeAllFiles()
                    this.about=''
                    this.name=''
                })
        }
    }
}
</script>

<style scoped>

</style>
