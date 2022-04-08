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
  redirect: '/jtfirst',
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
    {
      path: '/jtfirst',
      name: 'jtfirst',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/jtfirst.vue'),
    },
    {
      path: '/jtwhym',
      name: 'jtwhym',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/jtwhym.vue'),
    },
    {
      path: '/jtjcwh',
      name: 'jtjcwh',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/jtjcwh.vue'),
    },
    {
      path: '/jtdcwhxxy',
      name: 'jtdcwhxxy',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/jtdcwhxxy.vue'),
    },
    {
      path: '/mfcs',
      name: 'mfcs',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/mfcs.vue'),
    },
    {
      path: '/wymdcwh',
      name: 'wymdcwh',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/wymdcwh.vue'),
    },
    {
      path: '/ymdcwh',
      name: 'ymdcwh',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/ymdcwh.vue'),
    },
    {
      path: '/jfdcwh',
      name: 'jfdcwh',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/jfdcwh.vue'),
    },
    {
      path: '/wymjc',
      name: 'wymjc',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/wymjc.vue'),
    },
    {
      path: '/wymfw',
      name: 'wymfw',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/wymfw.vue'),
    },
    {
      path: '/ymjc',
      name: 'ymjc',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/ymjc.vue'),
    },
    {
      path: '/ymfw',
      name: 'ymfw',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/ymfw.vue'),
    },
    {
      path: '/ymdc',
      name: 'ymdc',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/ymdc.vue'),
    },
    {
      path: '/cgjcdccs',
      name: 'cgjcdccs',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/cgjcdccs.vue'),
    },
    {
      path: '/dbcs',
      name: 'dbcs',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/dbcs.vue'),
    },
    {
      path: '/lhxnwym',
      name: 'lhxnwym',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/lhxnwym.vue'),
    },
    {
      path: '/lhxnym',
      name: 'lhxnym',
      component: () =>
        import( /* webpackChunkName: "about" */ '../components/lhxnym.vue'),
    },
  ]
},
]
const router = new VueRouter({
  routes
})
export default router
