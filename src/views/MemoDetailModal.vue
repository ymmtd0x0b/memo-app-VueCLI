<template>
  <div class="overlay">
    <div class="container">
      <textarea :value="memo.text" disabled></textarea>
  
      <div class="buttons">
        <input class="left-button" type="button" value="戻る" @click="cansel">
        <input class="right-button" type="button" value="編集" @click="edit">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoDetailModal',
  data () {
    return {
      memo: this.$store.getters.getMemoById(this.$route.params.id)
    }
  },
  methods: {
    cansel () {
      this.$router.push('/index')
    },
    edit () {
      this.$router.push(`/edit/${this.memo.id}`)
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

.container {
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

.right-button {
  margin-left: auto;
}
</style>
