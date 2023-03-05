import Vue from "vue";
import Index from "./components/Index";
import router from "./router";
require('./bootstrap');

console.log(103);
const app = new Vue({
    el: '#app',
    components:{
        Index
    },
    router
});
