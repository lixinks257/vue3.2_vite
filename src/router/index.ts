import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/index.vue'
import { store } from '@/store'
import { loginByToken } from '@/api/Auth'
/* 进度条 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
	// 动画方式
	easing: 'ease',
	// 递增进度条的速度
	speed: 500,
	// 是否显示加载ico
	showSpinner: false,
	// 自动递增间隔
	trickleSpeed: 200,
	// 初始化时的最小百分比
	minimum: 0.3,
}) //progress配置

// 声明meta类型
declare module 'vue-router' {
	interface RouteMeta {
		title: string
		icon?: string
		permission: string
	}
}

// RouteRecordRaw:泛型的写法,约束类型
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		component: () => import('@/views/login/Login.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
})

// 前置守卫
router.beforeEach((to, from, next) => {
	NProgress.start()
	const token = localStorage.getItem('token')
	console.log('获取动态路由---', router.getRoutes())
	/*  router.hasRoute('User'): 判断路由是否存在 */
	console.log('获取动态路由---', router.hasRoute('User'))
	/* removeRoute移除当前配置的单个路由 */
	// router.removeRoute('User')
	/* router.addRoute是vue-router4的改变之前添加的是数组,现在变成只能添加单条路由了 */
	// router.addRoute({
	//   path: '/wong',
	//   name: 'wong',
	//   component: () => import('@/views/index/Index.vue'),
	// })
	if (!store.state.authStore.token && !token) {
		if (to.path.startsWith('/login')) next()
		else {
			next('/login')
		}
	} else if (!store.state.authStore.token && token) {
		loginByToken(token).then((res) => {
			if (res?.data?.status) {
				store.commit('authStore/addUserInfo', res.data)
				store.dispatch('menuStore/generateSystemMenus', res.data.permissions)
				store.dispatch('buttonStore/generateButtons', res.data.permissions)
				if (to.matched.length == 0) {
					router.push(to.path)
				}
				next()
			} else {
				next('/login')
			}
		})
	} else {
		next()
	}
})

router.afterEach(() => {
	NProgress.done()
})

export default router
