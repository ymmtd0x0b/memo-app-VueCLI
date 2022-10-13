<template>
  <MemoListModal>
    <form @submit.prevent="update">
      <textarea v-model="memo.text"></textarea>

      <div class="buttons">
        <input
          class="broad-button"
          type="submit"
          value="更新"
        />
        <input
          type="button"
          value="削除"
          @click="destroy"
        />
      </div>
    </form>
  </MemoListModal>
</template>

<script>
import MemoListModal from '../components/MemoListModal.vue'
  
export default {
  components: {
    MemoListModal
  },
  data () {
    return {
      memo: this.$store.getters.getMemoById(this.$route.params.id)
    }
  },
  methods: {
    update () {
      this.$emit('update', this.memo)
    },
    destroy () {
      this.$emit('destroy', this.memo.id)
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
  height: 15em;
  width: 100%;

  box-sizing: border-box;
  font-family: inherit;
  font-size: 1.5em;
}

.buttons {
  display: flex;
}

.broad-button {
  margin-right: 10px;
  width: 100%;
}
</style>
