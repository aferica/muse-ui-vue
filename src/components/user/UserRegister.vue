<template>
  <div id='userregister'>
    <mu-card class="registerform">
      <mu-card-text>
        <mu-text-field label="账号" hintText="请输入用户名" v-model="username" :errorText="usernameErro" labelFloat fullWidth/>
        <mu-text-field label="邮箱" hintText="请输入邮箱" v-model="email" :errorText="emailErro" labelFloat fullWidth/>
        <mu-text-field label="密码" hintText="请输入密码" v-model="password" type="password" :errorText="passwordErro" labelFloat fullWidth/><br/>
        <mu-text-field label="确认密码" hintText="请再次输入密码确认" v-model="password1" type="password" :errorText="password1Erro" labelFloat fullWidth/><br/>
        <mu-text-field label="邀请码" hintText="如果有邀请码，请输入" v-model="inviteCode" :errorText="inviteCodeErro" labelFloat fullWidth/>
        <mu-text-field label="验证码" hintText="请输入右侧验证码" style="width:75%" v-model="inputCaptchaCode"
          :errorText="captchaCodeErro" :errorColor="captchaCodeColor" labelFloat fullWidth @blur="checkCaptchaCode"/>
        <img :src="captchaSrc" style="width:23%; height:3em;" />
      </mu-card-text>
      <mu-divider/>
      <mu-card-actions class="actions">
        <mu-raised-button label="注册" class="demo-raised-button" @click="register()" primary/>
        <router-link to="/user/login" tag="span">
          <mu-raised-button label="已有账户，去登录" class="demo-raised-button" secondary/>
        </router-link>
      </mu-card-actions>
    </mu-card>
    <mu-dialog :open="dialog" title="^_^注册" @close="close">
      {{dialogText}}
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'

export default {
  name: 'userregister',
  data () {
    return {
      username: '',
      password: '',
      inviteCode: '',
      email: '',
      password1: '',
      inputCaptchaCode: '',
      captchaCode: '',
      captchaSrc: '',
      usernameErro: '',
      passwordErro: '',
      inviteCodeErro: '',
      emailErro: '',
      password1Erro: '',
      captchaCodeErro: '',
      captchaCodeColor: '',
      captchaCodeCheck: false,
      dialog: false,
      dialogText: ''
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
    register() {
      this.checkCaptchaCode()
      if (this.captchaCodeCheck) {
        axios.post(this.GLOBAL.ALLAPI.user.register,
          {
            name: this.username,
            password: md5(this.password),
            email: this.email,
            invitation_code_other: this.phone,
          }
        ).then(res => {
          console.log(res)
          if(res.data.code == 0) {
            this.dialog = true;
            this.dialogText = '恭喜您，注册成功！系统将自动跳转回主页面 '
          } else {
            this.dialogText = '抱歉，由于神秘力量导致注册失败了，请重试'
            this.dialog = true;
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
    }
  }
}
</script>

<style scoped>

  @media only screen and (min-width: 600px){
    #userregister{
      background:url(../../assets/userbgbig.jpg) no-repeat;
    }
  }
  @media only screen and (max-width: 600px) {
    #userregister{
      background:url(../../assets/userbgsmale.jpg) 0 0 no-repeat;
    }
  }

  #userregister {
    height: 100vh;
    text-align: center;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
  }

  .registerform {
    width: 95%;
    max-width: 30em;
    margin: auto;
    top: 5%;
  }

</style>
