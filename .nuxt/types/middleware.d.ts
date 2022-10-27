import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/boudewijnbout/Desktop/fdnd/Semester 3/Sprint 15/choices-choices-the-tech-stack/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}