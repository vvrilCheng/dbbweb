import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Home from '../views/Home.vue'
import Guide from '../views/Guide.vue'
import Package from '../views/Package.vue'
import Person from '../views/Person.vue'
import Company from '../views/Company.vue'
import PackList from '../views/PackList.vue'
import PackDetail from '../views/PackDetail.vue'
import packDetailParams from '../views/PackDetailParams.vue'
import PackFinish from '../views/PackFinish.vue'
import table from '../views/table.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: {name: "Home"}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/guide',
        name: 'Guide',
        component: Guide
    },
    {
        path: '/table',
        name: 'table',
        component: table
    },
    {
        path: '/package',
        name: 'Package',
        component: Package
    },
    {
        path: '/packList/:listId',
        name: 'PackList',
        component: PackList
    },
    {
        path: '/packDetailParams',
        name: 'packDetailParams',
        component: packDetailParams
    },
    {
        path: '/packDetail',
        name: 'PackDetail',
        component: PackDetail
    },
    {
        path: '/packFinish',
        name: 'PackFinish',
        component: PackFinish
    },
    {
        path: '/person',
        name: 'Person',
        component: Person
    },
    {
        path: '/company',
        name: 'Company',
        component: Company
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/blog/add',
        name: 'BlogAdd',
        component: BlogEdit,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },
    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit,
        meta: {
            requireAuth: true
        }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
