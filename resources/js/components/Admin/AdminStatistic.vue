<template>
    <div>
        <div>adminka</div>
        <router-link :to="{name:'category.index'}">Categories</router-link>
        <router-link :to="{name:'user.index'}">users</router-link>
        <router-link  :to="{name:'post.create'}">post</router-link>
        <router-link  :to="{name:'admin.wanted'}">wanted approve requests</router-link>
        <router-link  :to="{name:'admin.status.request'}">requests</router-link>
    </div>
</template>

<script>
export default {
    name: "AdminStatistic"
}
</script>

<style scoped>

</style>
