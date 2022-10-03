<template>
  <div id="app">
    <h1>メモアプリ</h1>
    <router-view />
  </div>
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
  background-color: #eee;
  padding: 20px;
  margin: 0;
  height: 100vh;
}

h1 {
  margin-top: 0px;
}
</style>
