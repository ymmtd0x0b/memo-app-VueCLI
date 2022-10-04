<template>
  <div class="overlay">
    <div class="modal">
      <div class="header">
        <input
          class="close"
          type="button"
          value="☓"
          @click="close" />
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoModal',
  methods: {
    close () {
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

.modal {
  z-index: 2;
  background-color: #fff;
  width: 400px;
  margin: 0 auto;
  padding: 5px 20px 20px 20px;
  border: solid 1px #000;
  border-radius: 15px;
}

.header {
  position: relative;
  height: 25px;
}

.header input.close {
  position: absolute;
  top: 0px;
  right: -10px;
  padding: 0px;
  border: none;
  line-height: 1.5em;
  font-size: 1em;
  background-color: #fff;
  cursor: pointer;
}
</style>
