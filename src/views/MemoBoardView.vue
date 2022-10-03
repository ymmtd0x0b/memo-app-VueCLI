<template>
    <h2>一覧</h2>
    <div class="container">
      <ul>
        <li
          v-for="memo of memos"
          :key="memo.id"
          @click="onClick(memo)">
          {{ getFirstLineOfMemo(memo.id) }}
        </li>
      </ul>
      <div @click="goNewMemoForm">+</div>
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
      this.$router.push(`/new`)
    }
  }
}
</script>

<style>
</style>
