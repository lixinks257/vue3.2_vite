import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { tabStore, TabState } from './modules/tabs'
import { authStore, AuthState } from './modules/auth'
import { menuStore, MenuState } from './modules/menu'
import { buttonStore, ButtonState } from './modules/button'
export interface RootState {
	tabStore: TabState
	authStore: AuthState
	menuStore: MenuState
	buttonStore: ButtonState
}

//Symbol()函数会返回 symbol类型的值
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store: Store<RootState> = createStore({
	modules: {
		tabStore,
		authStore,
		menuStore,
		buttonStore,
	},
})

// 自定义组合式函数
export function useStore() {
	return baseUseStore(key)
}
