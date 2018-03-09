<template>
  <div id='meizituinfo'>
    <div class="list-container">
      <mu-grid-list class="girllist">
        <mu-sub-header>{{title}}</mu-sub-header>
        <mu-grid-tile class="girlitem" v-for="tile, index in images" :key="index" :rows="2" :cols="2">
          <img :src="tile"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'meizituinfo',
  data () {
    // const isDesktop = this.GLOBAL.isDesktop
    return {
      isDesktop: this.GLOBAL.getWidth(),
      images: [],
      title: "",
    }
  },

  components: {

  },

  mounted() {
    this.getImagesByPid();

    window.addEventListener('resize', this.handleResize);
  },

  methods: {
    getImagesByPid() {
      console.log(this.$route.query)
      console.log(this.$router)
      let getImagesUrl = 'https://www.aferica.wang/api/meizitu/detail?pid=' + this.$route.query.pid;
      axios.get(getImagesUrl).then(res => {
        console.log(res)
        if(res.data.code == 0) {
          this.images = res.data.data.imgList;
          this.title = res.data.title;
        }
      })
    },

    handleResize() {
      console.log(this.GLOBAL.getWidth());
      this.isDesktop = this.GLOBAL.getWidth();
    },

  }
}
</script>

<style scoped>

  img {
    /* width: 100%; */
    height: 100%;
  }


</style>
