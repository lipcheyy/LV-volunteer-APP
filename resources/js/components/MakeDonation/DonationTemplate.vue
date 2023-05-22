<template>
<div>

    <div class="post-container">
        <router-link :to="{name:'user.donate',params:{id:id}}">
        <div class="creator"><i class="fas fa-user"></i> {{user.name}}</div>
        <div><h1>{{title}}</h1></div>
        <div class="content-container">
            <span v-html="resizeImage(truncatedContent)"></span>
            <span v-if="truncated"><a href="#" @click.prevent="contentToggler">детальніше</a></span>
        </div>
        </router-link>
        <div class="footer">
            <div class="heart-container">
                <span :class="`likesCount-${id}`">{{likesCount}}</span>
                <i class="far fa-heart likeBtn"
                   @click.prevent="toggleLike(id)"
                   :class="{'fas fa-heart active': userLiked.includes(id)}"></i>
            </div>
            <div v-if="user.id===user_id" @click.prevent="update(id)"><i class="fas fa-trash"></i></div>
        </div>
    </div>


</div>
</template>

<script>
import api from '../../api'
export default {
    name: "DonationTemplate",
    props:['title','content','user','id','userLiked','likesCount'],
    data(){
        return{
            truncatedLength:33,
            truncated:false,
            fullContent:false,
            user_id:parseInt(localStorage.getItem('id'))
        }
    },

    computed: {
        truncatedContent() {
            const content = this.content.split(" ");
            if (this.fullContent) {
                return this.content;
            } else if (content.length > this.truncatedLength) {
                this.truncated = true;
                return content.slice(0, this.truncatedLength).join(" ");
            }
            return this.content;
        }
    },
    methods:{
        resizeImage(content) {
            const div = document.createElement('div');
            div.innerHTML = content;
            const images = div.querySelectorAll('img');

            images.forEach(image => {
                image.width = 300;
                image.height = 200;
            });

            return div.innerHTML;
        },
        like(){
            api.post(`/api/auth/donations/${this.id}/like`)
        },
        toggleLike(id){
            let content = parseInt(document.querySelector(`.likesCount-${id}`).textContent)
            if (this.userLiked.includes(id)) {
                const index = this.userLiked.indexOf(id)
                this.userLiked.splice(index, 1)
                content -= 1
                document.querySelector(`.likesCount-${id}`).textContent = content
            } else {
                this.userLiked.push(id)
                content += 1
                document.querySelector(`.likesCount-${id}`).textContent = content
            }
            this.like()
        },
        update(id){
            if (confirm('Ви впевнені що хочете завершити збір?')) {
                api.patch(`/api/auth/donations/${id}`, {is_active: 0})
            }
        },
        contentToggler(){
            this.fullContent = !this.fullContent;
        }
    }

}
</script>

<style scoped>
a{
    color: white;
    text-decoration: none;
}
div{
    color: white;
}
.content-container{
    max-height: 200px;
    overflow-y: auto;
}
.creator{
    padding: 10px;
    background-color: red;
    width: 40%;
}
.post-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.fa-trash{color: red}
.footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.heart-container{
    display: flex;
    align-items: center;
    gap: 10px;
}
.fas-trash{
    color: red;
}
p{
    margin: 0;
    color: white;
}

.far{
    font-size: 26px;
    color: white;
}
.active{
    font-size: 26px;
    color: red;
}
img{
    width: 100px;
    height: 170px;
}



</style>
