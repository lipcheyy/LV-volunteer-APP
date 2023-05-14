<template>
    <div class="main">
        <div class="co">
            <img :src="url">
            <div class="info">
                <div class="name">
                    <h3>{{name}}</h3>
                </div>
                <div class="about">
                    <p>{{truncatedAbout}} <router-link :to="{name:'wanted.show',params:{id:id}}" v-if="truncated">детальніше </router-link></p>
                </div>
                <router-link :to="{name:'wanted.show',params:{id:id}}" class="btn" v-if="!truncated">детальніше </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "WantedTemplate",
    props:['name','url','about','id'],
    data() {
        return {
            truncatedLength: 25,
            truncated:false
        };
    },
    computed: {
        truncatedAbout() {
            const about = this.about.split(" ");
            if (about.length > this.truncatedLength) {
                this.truncated=true
                return about.slice(0, this.truncatedLength).join(" ");
            } else {
                return this.about;
            }
        }
    }
}
</script>

<style scoped>
/*img{*/
/*    max-width: 347px;*/
/*    max-height: 350px;*/
/*    width: auto;*/
/*    height: auto;*/
/*    border-radius: 10px 10px 0 0;*/
/*    object-fit: cover;*/
/*}*/

img{
    width: 347px;
    max-height: 350px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
}
.about{
    max-width: 350px;
}
.info, .about {
    display: flex;
    flex-direction: column;
}
.main{
    height: auto;
}
.about p{
    word-wrap: break-word;
    padding: 10px;
}
.name{
    text-align: center;
    margin-top: 10px;
}
.btn{
    width: 100px;
    padding: 10px 5px;
    background-color: deepskyblue;
}
</style>
