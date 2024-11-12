import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// 2. 引入组件样式
import 'vant/lib/index.css';
import { Button } from 'vant';

const app = createApp(App);
// createApp(App).mount('#app')
// 3. 注册你需要的组件
app.use(Button);
app.mount('#app');
