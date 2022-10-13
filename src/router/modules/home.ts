import Layout from '@/layout/index.vue'
import i18n from '@/i18n'
import { RouteRecordRaw } from 'vue-router'
const homeRouter: RouteRecordRaw = {
	path: '/',
	redirect: '/index',
	name: 'Index',
	// component: Layout,
	component: () => import('@/layout/index.vue'),
	meta: {
		title: 'menus.wIndex',
		icon: 'house',
		permission: 'system:index',
	},
	children: [
		{
			path: 'index',
			name: 'Index',
			component: () => import('@/views/index/Index.vue'),
			meta: {
				title: 'menus.wIndex',
				icon: 'house',
				permission: 'system:index',
			},
		},
	],
}

export default homeRouter
