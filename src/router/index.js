import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/Cart'
import Wode from '../views/wode/Wode'

// 1.安装路由插件
Vue.use(VueRouter)

// 源改变路由方法(push重复点击不报错)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 2.创建路由对象
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/wode',
    name: 'Wode',
    component: Wode
  }
]

const router = new VueRouter({
  routes
})

// 3.导出路由对象
export default router
