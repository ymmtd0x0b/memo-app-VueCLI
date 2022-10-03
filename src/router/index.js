import { createRouter, createWebHistory } from 'vue-router'
import MemoBoardView from '../views/MemoBoardView.vue'
import MemoDetailModal from '../views/MemoDetailModal.vue'
import MemoEditModal from '../views/MemoEditModal.vue'
import MemoNewModal from '../views/MemoNewModal.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'MemoBoardView',
    component: MemoBoardView
  },
  {
    path: '/new',
    name: 'MemoNewModal',
    component: MemoNewModal
  },
  {
    path: '/memos/:id',
    name: 'MemoDetailModal',
    component: MemoDetailModal
  },
  {
    path: '/edit/:id',
    name: 'MemoEditModal',
    component: MemoEditModal
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
