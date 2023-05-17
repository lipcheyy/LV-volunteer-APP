<template>
<div>
    <div>add by {{user.name}}</div>
    <div>title{{title}}</div>
    <div>
        <span v-html="truncatedContent"></span>
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
    }
}
</script>

<style scoped>
p{
    margin: 0;
}
</style>
