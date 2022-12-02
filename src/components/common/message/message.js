import Message from './message.vue'
export default {
  install(Vue) {
    // 创建组件构造器
    const messageContrustor = Vue.extend(Message);
    // 创建组件对象
    const message = new messageContrustor();
    // 将组件对象挂载在某一个元素上
    message.$mount(document.createElement('div'));
    // 将组件对象元素添加至全局body
    document.body.appendChild(message.$el)
    // 将组件的调用方法添加至Vue原型上
    Vue.prototype.$meassage = message
  }
}