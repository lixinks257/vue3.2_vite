// import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'
const storeRouter: RouteRecordRaw = {
	path: '/stores',
	redirect: '/stores/Location',
	name: 'storesLocation',
	component: () => import('@/layout/index.vue'),
	meta: {
		title: 'menus.wStoreManger',
		icon: 'LocationInformation',
		permission: 'system:store',
	},
	children: [
		{
			path: 'Location',
			name: 'storesLocation',
			component: () => import('@/views/storesLocation/StoresLocation.vue'),
			meta: {
				title: 'menus.wStoreManger',
				icon: 'LocationInformation',
				permission: 'system:store',
			},
		},
	],
}

export default storeRouter
