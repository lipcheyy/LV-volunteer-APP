<template>
    <div class="d-flex">
        <div class="post_container w-25 " v-for="post in posts">
            <h2>{{post.title}}</h2>
            <div>{{post.content}}</div>
        </div>
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
            axios.get('/api')
                .then(res=>{
                    this.posts=res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
