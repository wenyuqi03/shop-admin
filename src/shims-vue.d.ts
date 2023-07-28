// 解决引入vue组件时ts报找不到模块的错误
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const vueComponent: DefineComponent<{ }, { }, any>
  export default vueComponent
}
