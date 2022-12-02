import Vue from 'vue'
import App from './App.vue'
import message from './components/common/message/message'

Vue.config.productionTip = false
Vue.use(message);
new Vue({
  render: h => h(App),
}).$mount('#app')
