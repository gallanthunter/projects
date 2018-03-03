// 引用模板
import index from '../views/index.vue'
import content from '../views/content.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  }
]
