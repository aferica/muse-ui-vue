<template>
  <div id="booksList">
    <mu-card>
      <mu-list>
        <mu-sub-header>{{title}}</mu-sub-header>
        <hr/>
        <div v-for="item in booksArray" :key="item._id">
          <router-link :to="'/book/info/'+item._id">
          <mu-list-item  class="listTitle"  :title="item.title" :afterText="item.author">
          </mu-list-item>
          </router-link>
        <mu-divider/>
        </div>
      </mu-list>
    </mu-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      books: []
    }
  },
  props: ['booksArray', 'title'],
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
  .listTitle {
    width: 100%;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
</style>


