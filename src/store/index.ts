import { createStore } from 'vuex'
// 接口限制类型
interface State {
  count: number
}
export const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
