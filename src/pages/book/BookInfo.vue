<template>
  <div id="bookInfo">
    <mu-card class="infoCard">
      <mu-card-media>
        <mu-row gutter class="mainInfo">
          <mu-col width="40" desktop="20">
            <img class="cover" :src="staticCover + bookInfo.cover" />
          </mu-col>
          <mu-col width="5" desktop="0"></mu-col>
          <mu-col width="55" desktop="80" style="position:relative;height:174px">
            <b class="title">{{bookInfo.title}}</b>&nbsp;&nbsp;&nbsp;
            <span class="author">{{bookInfo.author}}&nbsp;著</span>
            <mu-row gutter class="hotInfo">
              <mu-col width="100" desktop="20">
                <span>字数：{{bookInfo.wordCount}}</span>
              </mu-col>
              <mu-col width="100" desktop="20">
                <span>追书：{{bookInfo.latelyFollower}}</span>
              </mu-col>
              <mu-col width="100" desktop="20">
                <span>留存率：{{bookInfo.retentionRatio}}%</span>
              </mu-col>
              <mu-col width="0" desktop="40"></mu-col>
            </mu-row>
            <span class="rate">评分：{{score}}</span><br/>
            <mu-raised-button class="demo-raised-button" label="开始阅读" secondary/>
          </mu-col>
          <mu-divider/><br/>
          <pre>{{longIntro}}</pre>
        </mu-row>
      </mu-card-media>
    </mu-card>
    <mu-card class="allInfoCard">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="目录"/>
        <mu-tab value="tab2" title="书友评论"/>
      </mu-tabs>
      <div v-if="activeTab === 'tab1'">
        <mu-row gutter class="allChapters">
          <mu-col width="100" desktop="50" v-for="item in allChapters" :key="item.title">
            <span class="chapter">{{item.title}}</span>
            <mu-divider/>
          </mu-col>
        </mu-row>
      </div>
      <div v-if="activeTab === 'tab2'">
        <p>
          这是第二个 tab
        </p>
      </div>
    </mu-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      activeTab: 'tab1',
      bookInfo: [],
      allChapters: [],
      staticUrl: this.GLOBAL.ALLAPI.IMGAPI,
      staticCover: this.GLOBAL.ALLAPI.static,
      score: '--',
      longIntro: ''
    }
  },
  mounted() {
    this.getBookInfo()
    this.getBookAllChapters()
  },
  methods: {
    getBookInfo() {
      let url = this.GLOBAL.ALLAPI.API + this.GLOBAL.ALLAPI.book.bookInfo
      axios.get(url + '/' + this.$route.params._id).then(res => {
        console.log(res.data)
        if(res.data != null) {
          this.bookInfo = res.data
          this.score = res.data.rating.score
          this.longIntro = '\u3000\u3000' + res.data.longIntro.replace(/\n/g, '\n\u3000\u3000')
          console.log(this.longIntro)
        }
      })
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    getBookAllChapters() {
      let url = this.GLOBAL.ALLAPI.API + this.GLOBAL.ALLAPI.book.bookChapters
      axios.get(url + '/' + this.$route.params._id).then(res => {
        console.log(res.data)
        if(res.data.ok) {
          this.allChapters = res.data.mixToc.chapters
        }
      })
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 2em;
  }

  .infoCard {
    width: 100%;
    color: #000;
    max-width: 820px;
    margin: 1em auto;
    padding: 1em;
  }

  .hotInfo {
    color: #999;
  }
  /* img {
    width: 100%;
  } */

  .cover {
    max-width: 134px;
    margin: 0 auto;
    text-align: center;
  }

  .author {
    font-size: 1em;
  }

  .mainInfo {
    margin: 0 1em;
  }

  .demo-raised-button {
    position:absolute;
    bottom:0;
  }

  @media screen and (max-width: 900px) {
    .rate {
      visibility: hidden;
    }
  }

  @media screen and (min-width: 901px) {
    .rate {
      color:coral;
      font-size: 1.5em;
      font-weight: bolder;
    }
  }

  .allInfoCard {
    width: 100%;
    color: #000;
    max-width: 820px;
    margin: 1em auto;
    padding: 1em;
  }

  .chapter {
    height: 2em;

  }
</style>
