// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import App from './App'
import Routers from './router/routes'
import 'iview/dist/styles/iview.css'
// import locale  from 'iview/dist/locale/zh-CN'

Vue.config.productionTip = true

Vue.use(VueRouter)
Vue.use(iView)

// The routing configuration
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
