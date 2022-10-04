<template>
  <div class="overlay">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoModal'
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
</style>
