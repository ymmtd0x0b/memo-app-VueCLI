import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state:{
    memos: [],
    nextId: 1
  },
  getters: {
    getMemoAll (state) {
      return state.memos.map(memo => Object.create(memo))
    },
    getMemoById (state) {
      return id => {
        const memo = state.memos.find(memo => memo.id === Number(id))
        return Object.create(memo)
      }
    },
    getFirstLineOfMemo (state, getters) {
      return id => {
        return getters.getMemoById(id).text.split('\n')[0]
      }
    }
  },
  mutations: {
    add (state, newMemo) {
      newMemo.id = state.nextId
      state.memos.push(newMemo)
      state.nextId++
    },
    update (state, { id, text }) {
      const idx = state.memos.findIndex(memo => memo.id === id)
      state.memos[idx].text = text
    },
    destroy (state, { id }) {
      const idx = state.memos.findIndex(memo => memo.id === id)
      state.memos.splice(idx, 1)
    }
  },
  plugins: [
    createPersistedState({
      key: 'memo-app',
      storage: localStorage
    })
  ]
})
