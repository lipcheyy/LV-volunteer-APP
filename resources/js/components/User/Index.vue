<template>
    <div>
        <router-link :to="{name:'user.login'}">logn</router-link>
        <router-link :to="{name:'user.registration'}">registration</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
