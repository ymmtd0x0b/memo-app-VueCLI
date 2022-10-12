<template>
    <h2>一覧</h2>
    <div class="container">
      <ul>
        <li
          v-for="memo of memos"
          :key="memo.id"
        >
          <router-link :to="{ name: 'memos', params: { id: memo.id } }">
            {{ getFirstLine(memo.text) }}
          </router-link>
        </li>
      </ul>
      <router-link
        class="newIcon"
        to="/memos/new"
      >
      +
      </router-link>
    </div>

    <router-view />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
    memos: 'getMemoAll'
    })
  },
  methods: {
    getFirstLine(text) {
      return text.split('\n')[0]
    }
  }
}
</script>

<style>
h2 {
  margin: 0 0 10px 0;

  color: #444;
  font-size: .8em;
  line-height: 1em;
}

.container {
  padding: 5px 10px;

  background-color: #fff;
  box-shadow: 0 0 2px 0;
}

ul {
  padding: 0px;
}

ul li {
  height: 2em;
  list-style: none;
}

.newIcon {
  font-size: 1.3em;
  text-decoration: none;
}
</style>
