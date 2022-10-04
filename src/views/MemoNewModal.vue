<template>
  <div class="overlay">
    <form @submit.prevent="add">
      <textarea v-model="memo.text"></textarea>

      <div class="buttons">
        <input type="button" value="キャンセル" @click="cansel">
        <input type="submit" value="追加">
      </div>
    </form>
  </div>
</template>

<script>
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

  }
}
</script>

<style scoped>
.overlay {
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);

  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  z-index: 2;
  background-color: #fff;
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
  border: solid 1px #000;
  border-radius: 15px;
}

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
  margin-left: auto;
}
</style>
