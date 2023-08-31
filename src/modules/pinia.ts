import { createPinia } from 'pinia'
import { type Install } from '../types/install'

export const install: Install = (app) => {
  const pinia = createPinia()
  app.use(pinia)
}
