<template>
  <div id="imagesList">
    <mu-card>
      <mu-list >
        <mu-sub-header>{{title}}</mu-sub-header>
        <hr/>
        <div v-for="item in imagesArray" :key="item._id" >
          <router-link :to="'/image/info/'+item._id">
            <mu-list-item  class="listTitle" :title="item.title">
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
    }
  },
  props: ['imagesArray', 'title'],
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
  .listTitle {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
</style>


