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

    <router-view
      @add="add"
      @update="update"
      @destroy="destroy"
    />
</template>

<script>
export default {
  props: ['memos'],
  emits: ['add', 'update', 'destroy'],
  methods: {
    getFirstLine(text) {
      return text.split('\n')[0]
    },
    add (memo) {
      this.$emit('add', memo)
    },
    update (memo) {
      this.$emit('update', memo)
    },
    destroy (memoId) {
      this.$emit('destroy', memoId)
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
