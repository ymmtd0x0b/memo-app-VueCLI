<template>
  <memo-modal>
    <form @submit.prevent="add">
      <textarea v-model="memo.text"></textarea>

      <div class="buttons">
        <input type="submit" value="追加">
        <input type="button" value="キャンセル" @click="cansel">
      </div>
    </form>
  </memo-modal>
</template>

<script>
import MemoModal from '../components/MemoModal'
  
export default {
  name: 'MemoEditModal',
  data () {
    return {
      memo: {
        id: this.$store.state.nextId,
        text: ''
      }
    }
  },
  methods: {
    cansel () {
      this.$router.push('/memos')
    },
    add () {
      this.$store.commit('add', { id: this.memo.id, text: this.memo.text })
      this.$router.push('/memos')
    }
  },
  components: {
    MemoModal
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
}

textarea {
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5em;
  font-family: inherit;
}

textarea {
  height: 15em;
}

.buttons {
  display: flex;
}

input[type=submit] {
  width: 100%;
  margin-right: 10px;
}
</style>
