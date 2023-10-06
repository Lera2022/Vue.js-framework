import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './store'

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  store, // подключаем хранилище к нашему приложению
  render: h => h(App),
}).$mount('#app')