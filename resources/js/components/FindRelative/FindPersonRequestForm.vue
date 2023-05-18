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
        <div>
            <select v-model="region_id" >
                <template v-for="region in regions">
                <option :value="region.id">{{region.title}}</option></template>
            </select>
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
            dropzone:null,
            region_id:1,
            regions:null
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
        this.getRegions()
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
            data.append('region_id',this.region_id)
            api.post('/api/auth/wanted',data)
                .then(res=>{
                    this.dropzone.removeAllFiles()
                    this.about=''
                    this.name=''
                })
        },
        getRegions(){
            api.get('/api/auth/regions')
                .then(res=>{ this.regions=res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
