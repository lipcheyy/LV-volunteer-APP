<template>
    <div class="vidget-container">
        <router-link class="vidget" :to="{name:'category.index'}">Категорії</router-link>
        <router-link class="vidget" :to="{name:'user.index'}">Користувачі</router-link>
        <router-link  class="vidget" :to="{name:'post.create'}">Новини</router-link>
        <router-link class="vidget" :to="{name:'admin.wanted'}">Запити на розміщення оголошень про зниклих</router-link>
        <router-link class="vidget" :to="{name:'admin.status.request'}">Запити на отримання статусу волонтера</router-link>
    </div>
</template>

<script>
export default {
    name: "AdminStatistic"
}
</script>

<style scoped>
.vidget{
    padding: 10px;
    background-color: black;
    width: 180px;
    height: 90px;
    text-align: center;
    border-radius: 10px;
}
.vidget-container{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.vidget:hover{
    -webkit-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    -moz-box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);
    transition: 0.3s ease;
}
a{
    color: white;
    text-decoration: none;
}
</style>
