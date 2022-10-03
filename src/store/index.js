import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state:{
    memos: [
      {
        id: 1,
        text: 'メモ１'
      },
      {
        id: 2,
        text: 'メモ２'
      },
      {
        id: 3,
        text: 'メモ３'
      },
      {
        id: 4,
        text: `メモ４
          あああ
          いいい`.split('\n').map(str => str.trim()).join('\n')
      }
    ],

    nextId: 5
  },
  getters: {
    getMemoById (state) {
      return id => {
        return state.memos.find(memo => memo.id === Number(id))
      }
    },
    getFirstLineOfMemo (state, getters) {
      return id => {
        return getters.getMemoById(id).text.split('\n')[0]
      }
    }
  },
  mutations: {
    update (state, payload) {
      const idx = state.memos.findIndex( memo => memo.id === payload.memo.id)
      state.memos[idx].text = payload.memo.text
    },
    add (state, payload) {
      state.memos.push(payload)
      state.nextId++
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      key: 'memo-app',
      storage: localStorage
    })
  ]
})
