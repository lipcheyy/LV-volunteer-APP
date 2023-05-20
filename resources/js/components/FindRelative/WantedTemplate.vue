<template>
    <div class="main">
        <div class="co">
            <router-link :to="{name:'wanted.show',params:{id:id}}" class="btn">
                <img :src="url">
                <div class="info">
                    <div class="name">
                        <h3>{{ name }}</h3>
                    </div>
                    <div class="about">
                        <p>{{ truncatedAbout }}
                            <router-link :to="{name:'wanted.show',params:{id:id}}" v-if="truncated">детальніше
                            </router-link>
                        </p>
                    </div>
                    <div v-for="(count,value) in comment_count">{{ value + ': ' + count }}</div>

                </div>
            </router-link>

        </div>
        <div class="button btn btn-outline-danger" v-if=" user && user.id===user_id" @click.prevent="destroy(id)">
            завершити пошук
        </div>

    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "WantedTemplate",
    props: ['name', 'url', 'about', 'id', 'comment_count','user'],
    data() {
        return {
            truncatedLength: 25,
            truncated: false,
            user_id:parseInt(localStorage.getItem('id'))
        };
    },
    methods:{
        destroy(id){
            if (confirm('Завершити пошук?')){
                api.delete(`/api/auth/wanted/${id}`)
                    .then(()=>this.$parent.getWanteds())
            }
        }
    },
    computed: {
        truncatedAbout() {
            const about = this.about.split(" ");
            if (about.length > this.truncatedLength) {
                this.truncated = true
                return about.slice(0, this.truncatedLength).join(" ");
            } else {
                return this.about;
            }
        }
    }
}
</script>

<style scoped>
div {
    color: white;
    text-align: center;
}

img {
    width: 500px;
    max-height: 350px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
}

.about {
    max-width: 500px;
}

.info, .about {
    display: flex;
    flex-direction: column;
}

.main {
    height: auto;
    flex-direction: column;
    padding-bottom: 20px;
}

.about p {
    word-wrap: break-word;
    padding: 10px;
}

.name {
    text-align: center;
    margin-top: 10px;
}
.button{
    width: 150px;
    margin: 0 auto;
}

</style>
