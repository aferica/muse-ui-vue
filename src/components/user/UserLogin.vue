<template>
  <div id='userlogin'>
    <mu-card class="loginform">
      <mu-card-text>
        <mu-text-field label="账号" hintText="请输入用户名" v-model="username" :errorText="usernameErro" labelFloat fullWidth/>
        <mu-text-field label="密码" hintText="请输入密码" v-model="password" type="password" :errorText="passwordErro" labelFloat fullWidth/><br/>
        <mu-text-field label="验证码" hintText="请输入右侧验证码" style="width:75%" v-model="inputCaptchaCode"
          :errorText="captchaCodeErro" :errorColor="captchaCodeColor" labelFloat fullWidth @blur="checkCaptchaCode"/>
        <img :src="captchaSrc" style="width:23%; height:3em;" />
      </mu-card-text>
      <mu-divider/>
      <mu-card-actions class="actions">
        <mu-raised-button label="登录" class="demo-raised-button" @click="login()" primary/>
        <router-link to="/user/register" tag="span">
          <mu-raised-button label="没有账户，去注册" class="demo-raised-button" secondary/>
        </router-link>
      </mu-card-actions>
    </mu-card>

    <mu-dialog :open="dialog" title="^_^登录" @close="close">
      {{dialogText}}
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
    <mu-toast v-if="successLogin" message="恭喜您，登录成功！系统将自动跳转回主页面" @close="hideToast"/>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'

export default {
  name: 'userlogin',
  data () {
    return {
      username: '',
      password: '',
      inputCaptchaCode: '',
      captchaCode: '',
      captchaSrc: '',
      usernameErro: '',
      passwordErro: '',
      captchaCodeErro: '',
      captchaCodeColor: '',
      captchaCodeCheck: false,
      dialog: false,
      dialogText: '',
      successLogin: false,
    }
  },
  components: {},
  mounted () {
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      let url = this.GLOBAL.ALLAPI.user.captcha
      axios.get(url).then(res => {
        console.log(res)
        if(res.data.code == 0) {
          this.captchaCode = res.data.data.text;
          this.captchaSrc = res.data.data.img;
        }
      })
    },
    login() {
      this.checkCaptchaCode()
      if (this.captchaCodeCheck) {
        axios.post(this.GLOBAL.ALLAPI.user.login,
          {name: this.username, password: md5(this.password)}
        ).then(res => {
          console.log(res)
          if(res.data.code == 0) {
            this.showToast()
            this.$router.push({ path:'/main'})
          } else {
            this.dialogText = '抱歉，由于神秘力量导致注册失败了，请重试'
            this.dialog = true;
            this.usernameErro = '用户名或密码错误，请重新输入'
            this.passwordErro = '用户名或密码错误，请重新输入'
            this.username = ''
            this.password = ''
          }
        })
      }
    },
    checkCaptchaCode() {
      if(this.inputCaptchaCode == this.captchaCode) {
        this.captchaCodeErro = '输入正确'
        this.captchaCodeColor = 'green'
        this.captchaCodeCheck = true
      } else {
        this.getCaptcha();
        this.captchaCodeErro = '验证码错误，请重新输入'
        this.captchaCodeColor = 'red'
      }
    },
    close () {
      this.dialog = false
    },
    showToast () {
      this.successLogin = true
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.successLogin = false }, 2000)
    },
  }
}
</script>

<style scoped>

  @media only screen and (min-width: 600px){
    #userlogin{
      background:url(../../assets/userbgbig.jpg) no-repeat;
    }
  }
  @media only screen and (max-width: 600px) {
    #userlogin{
      background:url(../../assets/userbgsmale.jpg) 0 0 no-repeat;
    }
  }

  #userlogin {
    height: 100vh;
    text-align: center;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
  }

  .loginform {
    width: 95%;
    max-width: 30em;
    margin: auto;
    top: 20%;
  }

</style>
