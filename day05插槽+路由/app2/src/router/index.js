import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入组件
// import About from '../views/About.vue' // 引入组件

Vue.use(VueRouter)


// routes就是路由的配置 也就是规则  数组里边的一个个的对象就是一个一个的规则
const routes = [
    {
        path: '/',
        redirect: '/home' // 重定向
    },
    {
        path: '/home',  // URL的路径
        name: 'Home', // 当前规则的一个名字 可以没有
        component: Home // 组件 当前URL要展示的组件（页面内容）
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')  // 路由懒加载 提高首页加载的性能
        // component: About 
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
