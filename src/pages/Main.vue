<template>
  <div id='mymain'>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="book" title="小说"/>
      <mu-tab value="image" title="美图"/>
    </mu-tabs>
    <div v-if="activeTab === 'book'">
      <div class="content">
        <!-- <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide  v-for="item in firstFiveBooks" :key="item._id">
              <div class="leftSwiper" data-swiper-parallax="-100">
                <img :src="staticUrl + item.cover">
              </div>
              <div class="rightSwiper" data-swiper-parallax="-200">
                <a>{{item.title}}</a>
                <a>{{item.author}}   著</a>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div> -->
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="33">
            <BooksList :booksArray="hotRank" title="追书最热榜"/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="33">
            <BooksList :booksArray="overRank" title="追书完结榜"/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="33">
            <BooksList :booksArray="popRank" title="读者留存率"/>
          </mu-col>
        </mu-row>
      </div>
    </div>
    <div v-if="activeTab === 'image'">
      <div class="content">
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="33">
            <ImagesList :imagesArray="xingganImages" title="性感诱人"/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="33">
            <ImagesList :imagesArray="qingchunImages" title="清纯可爱"/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="33">
            <ImagesList :imagesArray="xiaohuaImages" title="美女校花"/>
          </mu-col>
        </mu-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BooksList from '../components/view/bookComponent/BooksList.vue'
import ImagesList from '../components/view/imageComponent/ImagesList.vue'

export default {
  name: 'mymain',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      activeTab: 'book',
      hotRank: [],
      overRank: [],
      popRank: [],
      firstFiveBooks: [],
      staticUrl: this.GLOBAL.ALLAPI.static,
      xingganImages: [],
      qingchunImages: [],
      xiaohuaImages: [],
    }
  },
  components: {swiper, swiperSlide, BooksList, ImagesList},
  computed: {},
  mounted() {
    this.getBooksInfo()
    this.getImagesInfo()
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    getBooksInfo() {
      let url = this.GLOBAL.ALLAPI.API + this.GLOBAL.ALLAPI.rank.rankInfo + '/'
      axios.get(url + '564d8494fe996c25652644d2').then(res => {
        // console.log(res.data)
        if(res.data.ok) {
          this.firstFiveBooks = res.data.ranking.books.slice(0, 5)
          this.hotRank = res.data.ranking.books.slice(0, 50)
        }
      })
      axios.get(url + '564d8a004a15bb8369d9e28d').then(res => {
        // console.log(res.data)
        if(res.data.ok) {
          this.overRank = res.data.ranking.books.slice(0, 50)
        }
      })
      axios.get(url + '564eea0b731ade4d6c509493').then(res => {
        // console.log(res.data)
        if(res.data.ok) {
          this.popRank = res.data.ranking.books.slice(0, 50)
        }
      })
    },
    getImagesInfo() {
      let url = this.GLOBAL.ALLAPI.photo.getPictureByTagsAnd
      axios.get(url + '?tags=性感,美臀').then(res => {
        console.log(res.data)
        if(!res.data.code) {
          // this.firstFiveBooks = res.data.ranking.books.slice(0, 5)
          this.xingganImages = res.data.data
        console.log(res.data.data)
        }
      })
      axios.get(url + '?tags=清纯').then(res => {
        // console.log(res.data)
        if(!res.data.code) {
          this.qingchunImages = res.data.data
        }
      })
      axios.get(url + '?tags=校花').then(res => {
        // console.log(res.data)
        if(!res.data.code) {
          this.xiaohuaImages = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

  /* #mymain {
    height: 100vh;
    width: 100vh;
  } */
  .content {
    padding: 0 2%;
  }

  .cover {
    width: 100%;
    height: 100%;
  }

  .swiper {
    width: 100%;
    /* max-width: 520px; */
    text-align: center;
    margin:0 auto;
  }

  /* .leftSwiper {
    width: 40%
  }

  .rightSwiper {
    width: 40%
  } */
</style>
