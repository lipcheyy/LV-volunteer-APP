<template>
    <div class="container">
        <div class="w-75 mx-auto">
            <div class="mb-2">
                <label for="title">Титульний напис</label>
                <input type="text" id="title" v-model="title" class="form-control">
            </div>
            <div class="content">
                <vue-editor v-model="content" class="editor"></vue-editor>
            </div>
            <div class="submit">
                <select v-model="category_id">
                    <template v-for="category in categories">
                        <option :value="category.id">{{ category.title }}</option>
                    </template>
                </select>
                <input type="submit" @click.prevent="store" value="Додати" class="btn btn-success w-25">
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../../api";
import { VueEditor } from 'vue2-editor'

export default {
    name: "PostCreate",
    components: {
        VueEditor
    },
    data() {
        return {
            title: '',
            content: null,
            categories: null,
            category_id: 1
        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {
        store() {
            api.post('/api/auth/admin/posts', {
                title: this.title,
                content: this.content,
                category_id: this.category_id
            })
                .then(res => {
                    console.log(res);
                })
        },
        getCategories() {
            api.get('/api/auth/admin/category')
                .then(res => {
                    this.categories = res.data.data
                })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(255, 255, 255);
}
.content{
    height: 500px;
    margin-bottom: 10px;
}
.submit{
    display: flex;
    justify-content: space-between;
}
.editor{
    height: 400px;
}
input[type="text"],
select,
input[type="submit"] {
    padding: 10px;
    margin-bottom: 10px;
}

textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    resize: vertical;
}


</style>
