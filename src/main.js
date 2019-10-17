import Vue from 'vue'
import App from './App.vue'
//导入elemnet UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon-font.css'
//样式初始化
import './assets/base.css'
//注册中间件
Vue.use(ElementUI);
 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
