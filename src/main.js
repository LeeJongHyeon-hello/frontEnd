import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router from './router/index.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


let app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');