<template>
    <div>
        <p>category main page</p>

        <create-component></create-component>


    </div>
</template>

<script>
import api from "../../../api";
import CreateComponent from "./CreateComponent";

export default {
    name: "CategoryIndex",
    components: {CreateComponent},

    mounted() {
        this.test()
    },
    methods:{
        test() {
            api.get('/api/auth/admin/category')
                .then(res=>{
                    console.log(res.data);
                })
                .catch(error=>{
                    console.log(error);
                })
        },
    }
}
</script>

<style scoped>

</style>
