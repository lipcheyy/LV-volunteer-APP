<template>
    <div>
        <p>category main page</p>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "CategoryIndex",
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
