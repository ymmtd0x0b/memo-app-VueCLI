<template>
  <h1>メモアプリ</h1>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  background-color: #ddd;
  padding: 20px;
  margin: 0;
  height: 100vh;
}

h1 {
  margin-top: 0px;
  font-size: 1.5em;
}
</style>
