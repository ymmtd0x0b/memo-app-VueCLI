<template>
  <h1>メモアプリ</h1>
  <router-view
    :memos="memos"
    @add="add"
    @update="update"
    @destroy="destroy"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default  {
  computed: mapGetters({ memos: 'getMemoAll' }),
  methods: {
    add (memo) {
      this.$store.commit('add', memo)
      this.$router.push('/memos')
    },
    update (memo) {
      this.$store.commit('update', {
        id: memo.id,
        text: memo.text
      })
      this.$router.push('/memos')
    },
    destroy (memoId) {
      this.$store.commit('destroy', {
        id: memoId
      })
      this.$router.push('/memos')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  margin: 0;
  padding: 20px;
  height: 100vh;

  background-color: #ddd;
}

h1 {
  margin-top: 0px;
  font-size: 1.5em;
}
</style>
