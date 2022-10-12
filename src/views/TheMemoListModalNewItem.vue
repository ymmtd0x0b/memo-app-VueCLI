<template>
  <MemoListModal>
    <form @submit.prevent="add">
      <textarea v-model="memo.text"></textarea>

      <div class="buttons">
        <input
          class="broad-button"
          type="submit"
          value="追加"
        />
        <input
          type="button"
          value="戻る"
          @click="back"
        />
      </div>
    </form>
  </MemoListModal>
</template>

<script>
import MemoListModal from '../components/MemoListModal'
  
export default {
  components: {
    MemoListModal
  },
  data () {
    return {
      memo: {
        id: null,
        text: ''
      }
    }
  },
  methods: {
    add () {
      this.$emit('add', this.memo)
    },
    back () {
      this.$router.push('/memos')
    }
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

.broad-button {
  margin-right: 10px;
  width: 100%;
}
</style>
