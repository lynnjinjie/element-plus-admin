import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number
}

interface State {
  count: number
  userInfo: UserInfo[]
}

export const useCounterStore = defineStore('counter', {
  state: (): State => {
    return {
      count: 0,
      userInfo: [
        { name: '张三', age: 14 },
      ] as UserInfo[],
    }
  },
  getters: {
    getUserName: (state) => {
      return name => state.userInfo.filter(item => item.name === name)
    },
    doubleCount() {
      return this.count * 2
    },
    /**
     * 返回一个 count * 2 + 1
     * @returns { number }
     */
    doublePlusOne() {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref<number>(0)
//   const userInfo = ref<UserInfo[]>([
//     { name: '张三', age: 19 },
//   ])
//   function increment() {
//     count.value++
//   }
//   const debounce = computed(() => (count.value * 2))
//   return { count, increment, debounce, userInfo }
// })
