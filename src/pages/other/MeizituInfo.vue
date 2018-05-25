<template>
  <div id='meizituinfo'>
    <div class="list-container">
      <mu-card class="infoCard">
        <mu-card-header>
          <h3>{{title}}</h3>
        </mu-card-header>
        <div v-for="item in images" :key="item" >
          <mu-list-item>
            <img :src="staticUrl + item" >
          </mu-list-item>
          <mu-divider/>
        </div>
      </mu-card>
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
      staticUrl: this.GLOBAL.ALLAPI.IMGAPI,
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
      // console.log(this.$route.query)
      // console.log(this.$router)
      let getImagesUrl = 'https://www.aferica.wang/api/other/meizitu/detail/' + this.$route.query.pid;
      axios.get(getImagesUrl).then(res => {
        // console.log(res)
        if(res.data.code == 0) {
          this.images = res.data.data.imgList;
          this.title = res.data.title;
        }
      })
    },

    handleResize() {
      // console.log(this.GLOBAL.getWidth());
      this.isDesktop = this.GLOBAL.getWidth();
    },

  }
}
</script>

<style scoped>
  .infoCard {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 100%;
  }

</style>
