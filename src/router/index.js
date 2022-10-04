import { createRouter, createWebHistory } from 'vue-router'
import MemoBoardView from '../views/MemoBoardView.vue'
import MemoDetailModal from '../views/MemoDetailModal.vue'
import MemoEditModal from '../views/MemoEditModal.vue'
import MemoNewModal from '../views/MemoNewModal.vue'

const routes = [
  {
    path: '/',
    alias: '/memos',
    name: 'MemoBoardView',
    component: MemoBoardView
  },
  {
    path: '/memos/new',
    name: 'MemoNewModal',
    component: MemoNewModal
  },
  {
    path: '/memos/:id',
    name: 'MemoDetailModal',
    component: MemoDetailModal
  },
  {
    path: '/memos/:id/edit',
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
