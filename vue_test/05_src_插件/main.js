//  引入Vue
import Vue from "vue"
//  引入App
import App from "./App.vue"
// 引入插件
import plugins from "./js/plugins"
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用（使用）插件
Vue.use(plugins)

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})