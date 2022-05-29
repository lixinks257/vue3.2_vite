import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { tabStore, TabState } from './modules/tabs'
import { authStore, AuthState } from './modules/auth'

export interface RootState {
  tabStore: TabState
  authStore: AuthState
}

//Symbol()函数会返回 symbol类型的值
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store: Store<RootState> = createStore({
  modules: {
    tabStore,
    authStore,
  },
})

// 自定义组合式函数
export function useStore() {
  return baseUseStore(key)
}
