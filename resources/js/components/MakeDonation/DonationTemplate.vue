<template>
<div>
    <div>add by {{user.name}}</div>
    <div>title{{title}}</div>
    <div>
        <span v-html="resizeImage(truncatedContent)"></span>
        <span v-if="truncated"><a href="#" @click.prevent="contentToggler">детальніше</a></span>
    </div>
    <i class="far fa-heart"></i>
</div>
</template>

<script>
export default {
    name: "DonationTemplate",
    props:['title','content','user'],
    data(){
        return{
            truncatedLength:20,
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
        contentToggler(){
            this.fullContent = !this.fullContent;
        }
    }

}
</script>

<style scoped>
p{
    margin: 0;
}
.far{
    width: 10px;
    height: 15px;
}
img{
    width: 100px;
    height: 170px;
}
</style>
