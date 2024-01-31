import { createFetch } from '@vueuse/core'

const baseUrl = '/api'

const request = createFetch({
  baseUrl,
  combination: 'overwrite',
  options: {
    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    async beforeFetch({ options }) {
      // const myToken = await getMyToken()
      // options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
})

export function getList() {
  return request('getList')
}
