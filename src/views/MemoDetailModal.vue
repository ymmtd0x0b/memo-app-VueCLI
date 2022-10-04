<template>
  <memo-modal>
    <textarea :value="memo.text" disabled></textarea>
    
    <div class="buttons">
      <input class="left-button" type="button" value="戻る" @click="back">
      <input class="right-button" type="button" value="編集" @click="edit">
    </div>
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
      this.$router.push('/memos')
    },
    edit () {
      this.$router.push(`/memos/${this.memo.id}/edit`)
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

.right-button {
  margin-left: auto;
}
</style>
