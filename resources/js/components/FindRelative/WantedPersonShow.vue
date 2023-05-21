<template>
    <div>
        <div class="main">
            <div class="wanted" v-if="wanted">
                <div class="sub-container">
                    <div class="image">
                        <template v-for="image in wanted.images">
                            <img :src="image.url" alt="">
                        </template>
                    </div>
                    <div class="info" v-if="wanted.user">
                        <div class="name"><i class="fa-regular fa-user"></i> {{ wanted.user.name }}</div>
                        <div class="name">
                            <h2><strong>{{ wanted.name }}</strong></h2>
                        </div>
                        <div class="about">
                            <p>{{ wanted.about }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="!access_token" class="non-auth">Допоможіть знайти!Додайте відгук якщо вам відома інформація про людину
                    <a href="#" class="btn btn-primary">Відгук</a></div>

                <div class="comment-section" v-if="access_token">
                    <div class="mb-2">Відгуки:</div>
                    <div class="comments-container ">
                        <template v-for="comment in wanted.comment">
                            <div class="comment mb-2">
                                <div class="comment-data">
                                    <p class="commentator"><i>{{ comment.commentator.name }}</i></p>
                                    <span :class="commentToEdit(comment.id)?'d-none':''">
                                         <span class="">{{ comment.content }}</span>
                                    </span>
                                    <span :class="commentToEdit(comment.id)?'':'d-none'">
                                        <input v-model="contentToEdit">
                                        <a href="" @click.prevent="update(comment.id)" class="btn btn-outline-success">Оновити</a>
                                    </span>
                                </div>
                                <div class="comment-interactions">
                                    <template v-if="comment.commentator.id===userId ">
                                        <div @click.prevent="destroy(comment.id)">
                                            <i class="fas fa-trash"></i>
                                        </div>
                                        <div @click.prevent="getCommentDataToEdit(comment.id,comment.content)">
                                            <i class="fas fa-pencil"></i>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="actions">
                        <input type="text" v-model="commentContent" class="form-control ipt">
                        <input type="submit" value="Залишити відгук" @click.prevent="storeComment" class="tn btn btn-success">
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "WantedPersonShow",
    data() {
        return {
            wanted: {},
            wantedId: parseInt(this.$route.params.id),
            commentContent: null,
            access_token: localStorage.getItem('access_token'),
            userId: parseInt(localStorage.getItem('id')),
            contentToEdit:null,
            toEdit: null,
        }
    },
    mounted() {
        this.getWanted()
    },
    methods: {
        getWanted() {
            axios.get(`/api/wanteds/${this.wantedId}`)
                .then(res => {
                    this.wanted = res.data.data
                    console.log(this.wanted);
                })
        },
        storeComment() {
            if (this.access_token) {
                api.post(`/api/auth/wanted/${this.wantedId}/comments`, {
                    wanted_id: this.wantedId,
                    content: this.commentContent

                })
                    .then(() => {
                        this.getWanted()
                        this.commentContent = ''
                    })
            } else {
                this.$router.push({name: 'user.login'})
            }
        },
        commentToEdit(id) {
            return this.toEdit === id
        },
        getCommentDataToEdit(id, content) {
            this.toEdit = id
            this.contentToEdit = content
        },
        update(id) {
            this.toEdit = null
            console.log(id);
            api.patch(`/api/auth/wanted/${this.wantedId}/comments/${id}`,
                {
                    content: this.contentToEdit
                })
                .then(() => {
                    this.getWanted()
                })
        },
        destroy(id){
            api.delete(`/api/auth/wanted/${this.wantedId}/comments/${id}`) .then(()=>{
                this.getWanted()
            })
        }
    }
}
</script>

<style scoped>
p {
    margin: 0;
}

img {
    width: 400px;
    height: 500px;
    border-radius: 10px;
}

.main {
    display: flex;
    justify-content: center;

}

.commentator {
    font-weight: bold;
}

.ipt {
    width: 73%;
    margin-right: 3px;
}

.info {
    min-height: 100px;
    width: 100%;
}
.non-auth{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 4px solid black;
    border-radius: 5px;
    height: 15%;
    margin-left:10px ;
}
.about {
    max-width: 400px;
}

.comment {
    border-radius: 10px;
    border: 1px solid grey;
    word-wrap: break-word;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}

.wanted {
    display: flex;
    padding: 10px;
    background-color: #dcdcdc;
    border-radius: 10px;

}

.comment-interactions {
    display: flex;
    gap: 10px;
}

.comment-section {
    position: relative;
    height: 100%;
    width: 500px;
    padding: 0 15px 0 15px;
    overflow-y: auto;
}


.actions {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
}

.about p {
    word-wrap: break-word;
    padding: 10px;
}

.name {
    text-align: center;
    margin-top: 10px;
}

.sub-container {
    display: flex;

    flex-direction: column;
}

</style>
