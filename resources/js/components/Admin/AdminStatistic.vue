<template>
    <div>
        <div>adminka</div>
        <router-link :to="{name:'category.index'}">Categories</router-link>
        <router-link  :to="{name:'post.create'}">post</router-link>
    </div>
</template>

<script>
export default {
    name: "AdminStatistic"
}
</script>

<style scoped>

</style>
