<template>
<div>
    <div class="post-container">
        <div>add by {{user.name}}</div>
        <div>title{{title}}</div>
        <div class="content-container">
            <span v-html="resizeImage(truncatedContent)"></span>
            <span v-if="truncated"><a href="#" @click.prevent="contentToggler">детальніше</a></span>
        </div>
        <div class="footer">
            <div class="heart-container">
                <i class="heart far fa-heart" @click.prevent="like"></i>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import api from '../../api'
export default {
    name: "DonationTemplate",
    props:['title','content','user','id'],
    data(){
        return{
            truncatedLength:33,
            truncated:false,
            fullContent:false
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
        contentToggler(){
            this.fullContent = !this.fullContent;
        }
    }

}
</script>

<style scoped>
.content-container{
    max-height: 200px;
    overflow-y: auto;
}
.post-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.footer {
    margin-top: auto;
}
.heart-container{
    margin-top: auto;
}
p{
    margin: 0;
}
.far{
    font-size: 26px;
}
img{
    width: 100px;
    height: 170px;
}



</style>
