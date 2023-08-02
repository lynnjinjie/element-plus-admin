/**
 * 1.维护一个缓存路由的列表
 * 2.获取当前点击的路由名
 */
import type { RouteRecordRaw } from 'vue-router'
// import type { IMenu } from '~/types/menu'
import router from '~/router'

export function useTab() {
  const history = useStorage<any[]>('menu', [])
  const getHistory = () => {
    const routes = [] as RouteRecordRaw[]
    router.getRoutes().map(r => routes.push(...r.children))
    return routes
    // return history.value.filter((m) => {
    //   return routes.some(r => r.name === m.route)
    // })
  }
  history.value = getHistory()
  return {
    history,
  }
}
