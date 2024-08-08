//基本開始
//載入CreateApp函式
import { createApp } from "vue";
//載入根組件
import App from "./App.vue";
// 引入 Vuex Store
import store from './store';
//建立 Vue App 物件
createApp(App).use(store).mount('#app');