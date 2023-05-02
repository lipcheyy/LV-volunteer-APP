<template>
    <div>
        name of wanted person
        <input v-model="name" type="text">
        write about person
        <textarea v-model="about"></textarea>
        <div ref="dropzone"></div>
    </div>
</template>

<script>
import Dropzone from 'dropzone'
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
                url:'/sdf'
            }
        )
    }
}
</script>

<style scoped>

</style>
