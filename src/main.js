import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Top from './Top.vue'
import Activity from './Activity.vue'

Vue.use(ElementUI)


new Vue({
  el: '#top',
  render: h => h(Top)
})

new Vue({
  el: '#Activity',
  render: h => h(Activity)
})
