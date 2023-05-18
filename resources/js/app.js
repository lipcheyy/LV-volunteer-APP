import Vue from "vue";
import Index from "./components";
import router from "./router";
require('./bootstrap');
import VueProgrssBar from 'vue-progressbar'
Vue.use(VueProgrssBar,{
    color:'rgb(212,97,243)',
    failedColor:'red',
    thickness:'4px'
})
const app = new Vue({
    el: '#app',
    components:{
        Index
    },
    router
});
