import { Module } from 'vuex'
import { RootState } from '../index'
import { login, loginByToken } from '@/api/Auth'
import router from '@/router'
import { UserType } from '../type'
import { store } from '@/store'
export interface AuthState {
	token: string
	userInfo: UserType
	roles: string[]
}

export const authStore: Module<AuthState, RootState> = {
	namespaced: true,

	state: (): AuthState => ({
		token: '',
		userInfo: {
			avatar: '',
			username: '',
			roleName: '',
			status: 1,
		},
		roles: [],
	}),

	mutations: {
		addToken(state: AuthState, token: string) {
			state.token = token
		},
		addUserInfo(state: AuthState, userinfo: UserType) {
			state.userInfo = userinfo
		},
	},

	getters: {
		getToken(state: AuthState) {
			return state.token
		},
	},

	actions: {
		// 账号密码登录
		login({ commit, state }, requestUser) {
			login(requestUser).then((result) => {
				state.userInfo = result.data

				commit('addToken', result.data.token)
				localStorage.setItem('token', result.data.token)
				console.log(result)
				store.dispatch('menuStore/generateSystemMenus', result.data.permissions)
				store.dispatch('buttonStore/generateButtons', result.data.permissions)
				if (result.data.status) {
					router.push({ path: '/index' })
				}
			})
		},

		// token登录
		loginByToken({ commit, state }, token) {
			commit('addToken', token)
			loginByToken(token)
				.then((result) => {
					state.userInfo = result.data
					localStorage.setItem('token', result.data.token)
					store.dispatch('menuStore/generateSystemMenus', result.data.permissions)
					store.dispatch('buttonStore/generateButtons', result.data.permissions)
					console.log(result)
					if (result.data.status) {
						router.push({ path: '/index' })
					}
				})
				.catch(() => {
					localStorage.removeItem('token')
				})
		},
	},
}
