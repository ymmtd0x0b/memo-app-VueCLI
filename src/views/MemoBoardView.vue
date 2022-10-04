<template>
    <h2>一覧</h2>
    <div class="board">
      <ul>
        <li v-for="memo of memos" :key="memo.id">
          <router-link :to="`/memos/${memo.id}`">{{ getFirstLineOfMemo(memo.id) }}</router-link>
        </li>
      </ul>
      <router-link class="newIcon" to="/memos/new">+</router-link>
    </div>

    <router-view />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemoBoardView',
  data () {
    return {
      memos: this.$store.state.memos
    }
  },
  computed: mapGetters(['getFirstLineOfMemo'])
}
</script>

<style>
h2 {
  font-size: .8em;
  color: #444;
  line-height: 1em;
  margin: 0px 0px 10px 0px;
}

.board {
  background-color: #fff;
  padding: 5px 10px;
  box-shadow: 0px 0px 2px 0px;
}

ul {
  padding: 0px;
}

ul li {
  list-style: none;
  height: 2em;
}

.newIcon {
  text-decoration: none;
  font-size: 1.3em;
}
</style>
