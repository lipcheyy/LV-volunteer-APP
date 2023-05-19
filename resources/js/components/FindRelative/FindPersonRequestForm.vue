<template>
    <div class="container">
        <div class="form-container">
            <div class="d-flex flex-column gap-4">
                <label for="name">ПІБ</label>
                <div>
                    <input v-model="name" type="text" id="name" class="form-control">
                </div>

                <label for="about">Додайте опис про людину(характерні риси і тому подібне):</label>
                <div>
                    <textarea v-model="about" id="about" class="form-control"></textarea>
                </div>

                <label for="region">Виберіть регіон:</label>
                <div>
                    <select v-model="region_id" class="form-control">
                        <template v-for="region in regions">
                            <option :value="region.id">{{ region.title }}</option>
                        </template>
                    </select>
                </div>

                <div ref="dropzone" class="dropzoone">
                    Перетягніть сюди фото, або виберіть
                </div>

                <div>
                    <input type="submit" class="btn btn-success" @click.prevent="store" value="Зробити запит">
                </div>
            </div>
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
            api.get('/api/regions')
                .then(res=>{ this.regions=res.data
                })
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;

}
div{
    color: white;
}
.form-container {
    width: 400px;
    padding: 20px;
    background-color: #494949;
    border-radius: 10px;
}

.form-control {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.dz-details,.dz-success-mark,.dz-error-mark{
    display: none;
}

.dropzoone {
    border: 2px dashed #ccc;
    background-color: #f8f8f8;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    color: #888;
}

.dropzoone:hover {
    border-color: #666;
}



.btn {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    color: #fff;
    cursor: pointer;
}

.btn-success {
    background-color: #28a745;
}

.btn:hover {
    opacity: 0.8;
}

</style>
