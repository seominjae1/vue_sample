import { createApp } from "vue";
import App from "./App.vue";

// router/index.js 파일 추가
import router from "./router"; 
const app = createApp(App);
app.use(router); // router/index.js 파일 사용 

app.mount("#app");

// import Vue from 'vue'
// import VCalendar from 'v-calendar'
// //import 'v-calendar/lib/v-calendar.min.css'

// Vue.use(VCalendar)