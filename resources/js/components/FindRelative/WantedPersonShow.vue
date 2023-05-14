<template>
    <div>
        <div class="main">
            <div class="wanted">
                <div class="sub-container">
                    <div class="image">
                        <template v-for="image in wanted.images">
                            <img :src="image.url" alt="">
                        </template>
                    </div>
                    <div class="info" v-if="wanted.user">
                        <div class="name"><i class="fa-regular fa-user"></i> {{wanted.user.name}}</div>
                        <div class="name">
                            <h2>{{wanted.name}}</h2>
                        </div>
                        <div class="about">
                            <p>{{wanted.about}}</p>
                        </div>
                    </div>
                </div>
                <div class="comment-section">
                    <div>Відгуки:</div>
                    <div class="comments-container">
                        <div class="comment">
                            sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
                        </div>

                    </div>
                    <div class="actions">
                        <input type="text" class="form-control ipt">
                        <input type="submit" value="add" class="tn btn btn-success">
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WantedPersonShow",
    data() {
        return {
            wanted: {}
        }
    },
    mounted() {
        this.getWanted()
    },
    methods: {
        getWanted() {
            axios.get(`/api/wanted/${this.$route.params.id}`)
                .then(res => {
                    this.wanted = res.data.data
                    console.log(this.wanted);
                })
        }
    }
}
</script>

<style scoped>
img{
    width: 400px;
    height: 500px;
    border-radius: 10px;
}
.main{
    display: flex;
    justify-content: center;

}
.ipt{
    width: 80%;
    margin-right: 3px;
}
.info{
    min-height: 100px;
    width: 100%;
}
.about{
    max-width: 400px;
}
.comment{
    border-radius: 10px;
    border: 1px solid grey;
    word-wrap: break-word;
    padding: 5px;
}
.wanted{
    display: flex;
    padding: 10px;
    background-color: #dcdcdc;
    border-radius: 10px;

}
.comment-section {
    position: relative;
    height: 100%;
    width: 420px;
    padding: 0 15px 0 15px;
    overflow-y: auto;
}


.actions{
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
}
.about p{
    word-wrap: break-word;
    padding: 10px;
}
.name{
    text-align: center;
    margin-top: 10px;
}

.sub-container{
    display: flex;

    flex-direction: column;
}

</style>
