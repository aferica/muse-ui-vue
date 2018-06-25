<template>
  <div id='meizitu'>
    <mu-back-top/>
    <div class="tag-container">
      <mu-chip class="demo-chip" v-for="item in tags" :key="item.title" v-on:click="changeTag(item)">
        {{item.title}}
      </mu-chip>
    </div>
    <div class="list-container">
      <mu-grid-list class="girllist">
        <mu-sub-header>{{selectTagTitle}}</mu-sub-header>
        <mu-grid-tile class="girlitem" v-for="tile in images" :key="tile.pid" titlePosition="top" :rows="isDesktop" :cols="isDesktop">
          <router-link :to="{path: '/other/meizituinfo', query: { pid: tile.pid }}">
            <img :src="tile.smallSrc"/>
          </router-link>
            <span slot="title">{{tile.title}}</span>

        </mu-grid-tile>
      </mu-grid-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'meizitu',
  data () {
    // const isDesktop = this.GLOBAL.isDesktop
    return {
      isDesktop: this.GLOBAL.getWidth(),
      tags: [],
      images: [],
      selectTag: 'a/pure',
      bottomNav: 'a/pure',
      selectTagTitle: "颜值控",
    }
  },

  components: {

  },

  mounted() {
    this.getMeizituTags();
    this.getImagesByTag();

    window.addEventListener('resize', this.handleResize);
  },

  methods: {
    getMeizituTags() {
      let getTagUrl = 'https://www.aferica.wang/api/other/meizitu/tags';
      axios.get(getTagUrl).then(res => {
        if(res.data.code == 0) {
          // console.log(res.data.data)
          this.tags = res.data.data;
        }
      })
    },
    getImagesByTag() {
      let getImagesUrl = 'https://www.aferica.wang/api/other/meizitu/meinv/' +  encodeURIComponent(encodeURIComponent(this.selectTag)) + '/1';
      console.log(getImagesUrl)
      axios.get(getImagesUrl).then(res => {
        // console.log(res)
        if(res.data.code == 0) {
          this.images = res.data.data;
          // console.log(this.images)
        }
      })
    },
    handleChange() {
      // console.log(111111)
    },
    changeTag(tag) {
      this.selectTagTitle = tag.title;
      this.selectTag = tag.tags;
      this.getImagesByTag();
    },

    handleResize() {
      this.isDesktop = this.GLOBAL.getWidth();
    },

  }
}
</script>

<style scoped>

  .tag-container {
    text-align: center;
  }



  .girlitem {
    height: 100% !important;
  }

  img {
    width: 100%;
    height: 100%;
  }

</style>
