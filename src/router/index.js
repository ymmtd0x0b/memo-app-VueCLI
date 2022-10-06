import { createRouter, createWebHistory } from 'vue-router'
import TheMemoListShowItems from '../views/TheMemoListShowItems.vue'
import TheMemoListModalDetailItem from '../views/TheMemoListModalDetailItem.vue'
import TheMemoListModalNewItem from '../views/TheMemoListModalNewItem.vue'

const routes = [
  {
    path: '/',
    alias: '/memos',
    component: TheMemoListShowItems
  },
  {
    path: '/memos/new',
    component: TheMemoListModalNewItem
  },
  {
    path: '/memos/:id',
    name: 'memos',
    component: TheMemoListModalDetailItem
  },
  {
    path: '/:paths(.*)*',
    name: 'nothing',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
