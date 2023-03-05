<template>
    <div>
        <router-view></router-view>
        <router-link :to="{name:'user.login'}">logn</router-link>
        <router-link :to="{name:'user.registration'}">registration</router-link>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
