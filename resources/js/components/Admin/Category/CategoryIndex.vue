<template>
    <div>
        <p>category main page</p>

        <create-component ref="test"></create-component>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in data">
                    <td>{{category.id}}</td>
                    <td>{{category.title}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "../../../api";
import CreateComponent from "./CreateComponent";

export default {
    name: "CategoryIndex",
    components: {CreateComponent},
    data() {
        return {
            data: null
        }
    },
    mounted() {
        //console.log(this.$refs.test.backcall());
        this.getCategories()
    },
    methods: {
        getCategories() {
            api.get('/api/auth/admin/category')
                .then(res => {
                    this.data=res.data.data
                })
        },
    }
}
</script>

<style scoped>

</style>
