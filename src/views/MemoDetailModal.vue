<template>
  <memo-modal>
    <form @submit.prevent="update">
      <textarea v-model="memo.text"></textarea>

      <div class="buttons">
        <input type="submit" value="更新">
        <input type="button" value="削除" @click="deleteMemo">
      </div>
    </form>
  </memo-modal>
</template>

<script>
import MemoModal from '../components/MemoModal'
  
export default {
  name: 'MemoDetailModal',
  data () {
    return {
      memo: this.$store.getters.getMemoById(this.$route.params.id)
    }
  },
  methods: {
    back () {
      this.$router.push(`/memos`)
    },
    update () {
      this.$store.commit('update', { 
        memo: {
          id: this.memo.id,
          text: this.memo.text
        }
      })
      this.$router.push('/memos')
    },
    deleteMemo () {
      this.$store.commit('delete', { id: this.memo.id })
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
