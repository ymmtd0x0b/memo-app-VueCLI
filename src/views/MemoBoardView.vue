<template>
    <h2>一覧</h2>
    <div class="container">
      <ul>
        <li v-for="memo of memos" :key="memo.id">
          <p @click="onClick(memo)">{{ getFirstLineOfMemo(memo.id) }}</p>
          <button @click="deleteMemo(memo.id)">削除</button>
        </li>
      </ul>
      <div class="new-item" @click="goNewMemoForm">+</div>
    </div>

    <router-view />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemoBoardView',
  data () {
    return {
      memos: this.$store.state.memos
    }
  },
  computed: mapGetters(['getFirstLineOfMemo']),
  methods: {
    onClick (memo) {
      this.$router.push(`/memos/${memo.id}`)
    },
    goNewMemoForm () {
      this.$router.push(`/memos/new`)
    },
    deleteMemo (id) {
      this.$store.commit('delete', { id: id })
    }
  }
}
</script>

<style>
h2 {
  font-size: 1em;
}

ul {
  padding-left: 1em;
}

ul li {
  display: flex;
  height: 2em;
}

button,
p {
  display: block;
  margin: 0;
}

p {
  height: 2em;
  line-height: 2em;
  width: 10.1em;
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
}

.new-item {
  height: 1.5em;
  width: 1.5em;
  text-align: center;
  cursor: pointer;
}
</style>
