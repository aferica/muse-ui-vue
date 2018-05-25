<template>
  <div id="imageInfo">
    <mu-card class="infoCard">
      <mu-card-header>
        <h3>{{imageInfo.title}}</h3>
      </mu-card-header>
      <div class="tag-container">
        <mu-chip class="demo-chip" v-for="item in imageInfo.tags" :key="item" backgroundColor="#F5FFFA" color="#67c23a">
          {{item}}
        </mu-chip>
      </div>
      <div v-for="item in imageInfo.image_url" :key="item" >
        <img v-lazy="staticUrl + item" >
      </div>
    </mu-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      imageInfo: [],
      staticUrl: this.GLOBAL.ALLAPI.IMGAPI,
    }
  },
  mounted() {
    this.getImageDetail()
  },
  methods: {
    getImageDetail() {
      let url = this.GLOBAL.ALLAPI.photo.getPictureById
      axios.get(url + '?_id=' + this.$route.params._id).then(res => {
        if(!res.data.code) {
          // this.firstFiveBooks = res.data.ranking.books.slice(0, 5)
          this.imageInfo = res.data.data[0]
        }
      })
    }
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
