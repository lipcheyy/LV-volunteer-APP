<template>
    <div class="main">
        <div class="posts_container " >
            <div v-for="post in posts" class="post_container">
                <div class="title"><h2>{{post.title}}</h2></div>
                <div class="content"><div v-html="post.content"></div></div>
                <hr>
            </div>
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
                    console.log(this.posts);

                })
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    justify-content: center;
}
.posts_container{
    width: 70%;
}
.post_container{
    margin-bottom: 10px;
    background-color: rgba(222, 221, 221, 0.97);
    padding: 20px;
}
.title{
    text-align: center;
}
.content{
    text-align: justify;
}
</style>
