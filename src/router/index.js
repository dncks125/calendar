import Vue from 'vue'
import Router from 'vue-router'
import RangedatePicker from '@/components/RangedatePicker'




Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: RangedatePicker
    }
  ]
})
