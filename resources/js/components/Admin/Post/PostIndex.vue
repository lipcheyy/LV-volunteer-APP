<template>
    <div>
        posts page
    </div>
</template>

<script>
import Create from "./Create";
export default {
    name: "PostIndex",
    data(){
        return{
            posts:null
        }
    },
    components: {
        Create
    },
    mounted() {
        this.getPosts()
    },
    methods:{
        getPosts(){
            axios.get('/')
                .then(res=>{
                    this.posts=res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
