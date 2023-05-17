<template>
<div>
    <div>add by {{user.name}}</div>
    <div>title{{title}}</div>
    <div>
        <span v-html="resizeImage(truncatedContent)"></span>
        <span v-if="truncated"><a href="#">деталssьніше</a></span>
    </div>
</div>
</template>

<script>
export default {
    name: "DonationTemplate",
    props:['title','content','user'],
    data(){
        return{
            truncatedLength:20,
            truncated:false
        }
    },
    computed:{
        truncatedContent() {
            const content = this.content.split(" ");
            if (content.length > this.truncatedLength) {
                this.truncated=true
                return content.slice(0, this.truncatedLength).join(" ");
            } else {
                return this.content;
            }
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
        }
    }

}
</script>

<style scoped>
p{
    margin: 0;
}
img{
    width: 100px;
    height: 170px;
}
</style>
