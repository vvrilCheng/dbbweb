import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.prototype.$axios = axios;

import mavonEditor from 'mavon-editor'

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

import "./permission"

Vue.use(Element)
Vue.use(mavonEditor)

Vue.config.productionTip = false

Vue.prototype.uniurl='http://192.168.20.236:8081'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
