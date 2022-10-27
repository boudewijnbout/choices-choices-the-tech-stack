import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/boudewijnbout/Desktop/fdnd/Semester 3/Sprint 15/choices-choices-the-tech-stack/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}