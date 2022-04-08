/*
 * @Author: your name
 * @Date: 2021-01-26 10:03:19
 * @LastEditTime: 2021-03-01 08:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coordination\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
  path: '/',
  name: 'list',
  component: () =>
    import( /* webpackChunkName: "about" */ '../components/list.vue'),
  redirect: '/first',
  children: [{
    path: '/first',
    name: 'first',
    component: () =>
      import( /* webpackChunkName: "about" */ '../components/first.vue'),
  },
  {
    path: '/secound',
    name: 'secound',
    component: () =>
      import( /* webpackChunkName: "about" */ '../components/secound.vue'),
  },
  {
    path: '/three',
    name: 'three',
    component: () =>
      import( /* webpackChunkName: "about" */ '../components/three.vue'),
  },
  {
    path: '/jcwh',
    name: 'jcwh',
    component: () =>
      import( /* webpackChunkName: "about" */ '../components/jcwh.vue'),
  },
  ]
},
]
const router = new VueRouter({
  routes
})
export default router