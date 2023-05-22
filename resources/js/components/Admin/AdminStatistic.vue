<template xmlns="http://www.w3.org/1999/html">
    <div class="vidget-container">
        <div class="vidget"><router-link :to="{name:'category.index'}">Категорії</router-link>
            <div class="count">'Кількість: {{notifications.category_count}}</div>
        </div>
        <div class="vidget"><router-link :to="{name:'user.index'}">Користувачі</router-link>
            <div class="count">Кількість: {{notifications.users_count}}</div>
        </div>
        <div class="vidget"> <router-link   :to="{name:'post.create'}">Новини</router-link>
            <div class="count">Кількість: {{notifications.news}}</div>
        </div>
        <div class="vidget"><router-link  :to="{name:'admin.wanted'}">Запити на розміщення оголошень про зниклих</router-link>
            <div >Кількість:  <span class="notifications"> {{notifications.wanted_request_count}}</span></div>
        </div>
        <div class="vidget"><router-link :to="{name:'admin.status.request'}">Запити на отримання статусу волонтера</router-link>
            <div >Кількість:  <span class="notifications"> {{notifications.volunteer_requests_count}}</span></div>
        </div>

    </div>

</template>

<script>
import api from "../../api";

export default {
    name: "AdminStatistic",
    data(){
        return{
            notifications:{}
        }
    },
    mounted() {
        this.getNotifications()
    },
    methods:{
        getNotifications() {
            api.get('/api/auth/user/notifications')
                .then(res=> this.notifications=res.data)
        }
    }
}
</script>

<style scoped>
.vidget{
    padding: 10px;
    background-color: black;
    width: 180px;
    height: auto;
    text-align: center;
    border-radius: 10px;
}
.count{
    color: #bfc0bf;
}
.notifications{
    padding: 5px;
    background-color: red;
    border-radius: 100px;
}
.vidget-container{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: white;
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
