<template>
  <div class="hello">
    <div class="mu-banner">
    <router-link to="main" tag="span">
      <img src="../assets/bg.png" class="mu-banner-image" width="100%" height="100%"/>
      <div class="mu-logo">
        <img src="../assets/main.png" class="mu-logo-image" alt="">
      </div>
      <h1 class="mu-banner-title">
        程序猿的成长之路
      </h1>
      <br/>
      <h3 class="mu-banner-sub-title">
        学习的实践地，娱乐的自由地
      </h3>
    </router-link>
    </div>
    <div class="mu-desc-wrapper">
      <div class="mu-desc">
        <div class="mu-desc-content">
          <h2 class="mu-desc-title"></h2>
          <h3 class="mu-desc-sub-title">笔记博客，记录点点滴滴</h3>
          <img src="../assets/img1.png" class="mu-desc-image" />
        </div>

      </div>
      <div class="mu-desc">
        <div class="mu-desc-content">
          <h2 class="mu-desc-title"></h2>
          <h3 class="mu-desc-sub-title">热门书籍，避免无聊时光</h3>
          <img src="../assets/img2.png" class="mu-desc-image" />
        </div>
      </div>
      <div class="mu-desc">
        <div class="mu-desc-content">
          <h2 class="mu-desc-title"></h2>
          <h3 class="mu-desc-sub-title">缤纷图片，放松释放压力</h3>
          <img src="../assets/img3.png" class="mu-desc-image" />
        </div>
      </div>
    </div>

    <div class="mu-footer">
      <a class="beian" href="http://www.aferica.wang">Aferica</a> &copy; 2017-2018<br/>
      <a class="beian" target="_Blank" href="http://www.miitbeian.gov.cn">粤ICP备18008014号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mu-banner{
    z-index: 100;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #ffffff;
  }
  .mu-banner-image {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .mu-logo{
    width: 120px;
    height: 120px;
    line-height: 100px;
    text-align: center;
    margin:  0 auto;
    font-size: 50px;
    border-radius: 50%;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mu-logo-image {
    width:100%; height:100%; border-radius:50%; overflow:hidden
  }
  .mu-banner-title{
    display: block;
    font-size: 48px;
    line-height: 1;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 12px;
    text-align: center;
  }

  .mu-banner-sub-title{
    text-align: center;
    font-weight: 300;
    margin-bottom: 16px;
    margin-top: 0;
    padding-left: 32px;
    padding-right: 32px;
  }


  .mu-banner-actions{
    text-align: center;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mu-desc-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mu-desc {
    max-width: 972px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 500px;
  }
  .mu-desc-image + .mu-desc-content,
  .mu-desc-content + .mu-desc-image {
    margin-left: 120px;
  }

  .mu-desc-title{
    font-size: 64px;
    font-weight: 300;
    color: #726b79;
    margin: 0;
  }
  .mu-desc-sub-title {
    font-size: 36px;
    font-weight: 300;
    color: #8d70aa;
    margin: 0;
  }
  .mu-desc-image {
    width: 400px;
  }

  .mu-desc-text {
    font-size: 18px;
    color: #736f76;
    font-weight: 300;
  }

  .mu-footer{
    background-color: #1b1b1b;
    text-align: center;
    color: #ffffff;
    padding: 50px 40px;
  }

  .beian{
    color:#20a8d8;
  }
</style>
