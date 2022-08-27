<template>
  <!-- 首页头部组件 -->
  <div class="header">
    <div class="index-header">
      <div class="header-content">
        <!-- 头部logo -->
        <div class="content-logo">
          <img src="/image/logo.png" alt="" />
        </div>
        <!-- 头部导航 -->
        <div class="content-nav">
          <ul>
            <li>
              <router-link to="/" style="cursor: pointer" class="actives"
                >首 页</router-link
              >
            </li>
            <li>
              <router-link to="/course" style="cursor: pointer" class=""
                >课 程</router-link
              >
            </li>
            <li>
              <router-link to="/member" style="cursor: pointer" class=""
                >会 员</router-link
              >
            </li>
          </ul>
        </div>
        <!-- 搜索、购物车、登录注册 -->
        <div class="searBuyLogin">
          <!--头部搜索框-->
          <div class="content-search">
<<<<<<< HEAD
            <input type="text" placeholder="请输入要搜索的课程" />
            <i class="el-icon-search" style="cursor: pointer"></i>
=======
<<<<<<< HEAD
            <input type="text" placeholder="请输入要搜索的课程" />
            <i class="el-icon-search" style="cursor: pointer"></i>
=======
            <input
              type="text"
              placeholder="请输入要搜索的课程"
              v-model="keywords"
            />
            <i
              class="el-icon-search"
              style="cursor: pointer"
              @click="toSearch()"
            ></i>
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
          </div>
          <div class="content-Shopping" style="cursor: pointer">
            <el-badge class="item">
              <router-link to="/cart">
                <i class="el-icon-shopping-cart-1"></i>
              </router-link>
            </el-badge>
            <!-- <i class="el-icon-shopping-cart-1"></i> -->
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12c18c8 (day2)
          <div class="content-login-success">
            <!-- <div style="cursor: pointer">我的课程</div> -->
            <div>
              <!-- <img
                class="avator"
                src=""
                alt=""
              /> -->
              <!-- <img class="avator" alt="" /> -->
              <!-- 头像信息 -->
            </div>
          </div>
          <div class="content-login">登录 / 注册</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
=======
          <div class="content-login-success" v-if="false">
            <div style="cursor: pointer">我的课程</div>
            <div @mouseenter="isUserInfo = true">
              <img class="avator" src="userInfo.avatar" alt="" />
              <img class="avator" :src="avatarImg" alt="" />
              <!-- 头像信息 -->
            </div>
          </div>
          <div class="content-login" v-else @click="goLogin">登录 / 注册</div>
        </div>
        <!-- 划过头像要显示的下拉框 -->
        <div class="user-info" v-show="isUserInfo">
          <div class="user-info-top">
            <div class="u-i-t-top">
              <img class="avator" src="userInfo.avatar" alt="" />
              <img class="avator" :src="avatarImg" alt="" />
              <div class="avator-info">
                <p>默认昵称</p>
              </div>
              <div class="vip" v-if="vipInfos">
                <div class="vipImg">
                  <img
                    :src="vipInfos.vipIcon"
                    :class="vipEndTime < 0 ? 'gray' : ''"
                  />
                </div>
                <div class="vipName">{{ vipInfos.vipName }}</div>
                <div class="endTime" v-if="vipInfos.isExpired === 0">
                  {{ vipEndTime }}天到期
                </div>
                <div class="endTime" v-else>
                  已过期{{ Math.abs(vipEndTime) }}天
                </div>
              </div>
            </div>
            <div class="u-i-i-bottom">
              <div v-for="(item, index) in avatorList" :key="item.id">
                <router-link :to="item.linkUrl">
                  <div
                    class="info-item"
                    :class="courseColor === index ? 'course-color' : ''"
                    @mouseenter="changeColor(index)"
                    @mouseleave="deleteColor()"
                  >
                    <img :src="item.imgUrl" alt="" />
                    <p>{{ item.title }}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="user-info-bottom">
            <div class="logout">退出登录</div>
          </div>
        </div>
        <!-- 登陆注册对话框 -->
        <el-dialog width="300px" append-to-body :visible.sync="loginDialog">
          <div slot="title">
            <div class="dialog-register" v-if="isregister">快速注册</div>
            <div class="dialog-title" v-else>
              <div
                class="title-item"
                v-for="(item, index) in loginNav"
                :key="index"
                @click="gochange(index)"
              >
                <p class="title-desc">{{ item.title }}</p>
                <span></span>
              </div>
            </div>
          </div>
          <div class="dialog-container">
            <!-- 快速注册 -->
            <div v-if="isregister">
              <el-form
                ref="registerForm"
                class="demo-ruleForm"
                :model="registerForm"
                :rules="registerRules"
              >
                <el-form-item prop="mobile" class="captcha">
                  <el-input
                    v-model="registerForm.mobile"
                    placeholder="短信登录仅限中国大陆用户"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="captcha" class="captcha">
                  <el-input
                    style="width: 150px"
                    placeholder="请输入短信验证码"
                    v-model="registerForm.captcha"
                  ></el-input>
                  <div class="sendcaptcha send">{{ Phonecaptcha }}</div>
                </el-form-item>
                <el-form-item>
                  <el-checkbox class="privacy" v-model="checked">
                    已阅读并同意相关服务条款和隐私政策
                  </el-checkbox>
                  <p
                    style="
                      color: #3481ff;
                      line-height: 15px;
                      margin-left: 20px;
                      font-size: 12px;
                    "
                  >
                    《 协议 》
                  </p>
                  <p
                    style="
                      color: #3481ff;
                      line-height: 15px;
                      margin-left: 20px;
                      font-size: 12px;
                    "
                  >
                    《 隐私 》
                  </p>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="regiterBtn"
                    >立即注册</el-button
                  >
                </el-form-item>
                <div></div>
              </el-form>
              <div class="backLogin" @click="backLogin">账号登陆</div>
            </div>
            <!-- 账号登录 -->
            <div v-else>
              <div v-if="loginCurrent === 0">
                <el-form
                  :model="phoneForm"
                  ref="phoneForm"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="username" class="captcha">
                    <el-input
                      v-model="phoneForm.username"
                      placeholder="请输入用户名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="password" class="captcha identify">
                    <el-input
                      v-model="phoneForm.password"
                      placeholder="请输入密码"
                      show-password
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="primary"
                      class="regiterBtn"
                      @click="submitPhoneForm('phoneForm')"
                      >立即登录</el-button
                    >
                  </el-form-item>
                  <div></div>
                </el-form>
                <div class="backLogin" @click="backRegister">快速注册</div>
              </div>
              <!-- 手机验证码登录 -->
              <div v-else>
                <el-form
                  ref="identifyForm"
                  class="demo-ruleForm"
                  :model="identifyForm"
                >
                  <el-form-item prop="mobile" class="captcha">
                    <el-input
                      v-model="identifyForm.mobile"
                      placeholder="请输入注册手机号码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="captcha" class="captcha identify">
                    <el-input
                      class="el-input-box"
                      placeholder="请输入短信验证码"
                      v-model="identifyForm.captcha"
                    ></el-input>
                    <div class="sendcaptcha send">验证码</div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" class="regiterBtn"
                      >登录</el-button
                    >
                  </el-form-item>
                  <div></div>
                </el-form>
                <div class="backLogin" @click="backRegister">快速注册</div>
              </div>
              <!-- 三方登录 -->
              <div class="third-party-login">
                <div class="login-weixin">
                  <i class="el-icon-s-opportunity" aria-hidden="true"></i>
                </div>
                <div class="login-qq">
                  <i class="el-icon-s-promotion" aria-hidden="true"></i>
                </div>
                <div class="login-weibo">
                  <i class="el-icon-message-solid" aria-hidden="true"></i>
                </div>
              </div>
              <div class="container">登录即同意进入小鹿线官网</div>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
    <!-- 行为校验对话组件 -->
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
  </div>
</template>

<script>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { Loading } from "element-ui"
import { Encrypt } from "@/utils/aes.js"
import { loginByJson, createToken, getInfo } from "@/common/api/auth.js"
export default {
  name: "Header",
  data() {
    return {
      keywords: "", //用户搜索的关键字
      loginDialog: false, //登录框
      isregister: false, //快速注册
      // 账号密码
      phoneForm: {
        username: "",
        password: "",
        rememberMe: false,
      },
      //登录方式
      loginNav: [
        {
          id: 0,
          title: "账号登录",
        },
        {
          id: 1,
          title: "验证码登录",
        },
      ],
      loginCurrent: 0, //切换账号登录和手机号登录
      registerForm: {}, //注册信息
      registerRules: {
        //注册的校验规则
        mobile: [
          {
            required: true,
            message: "请输入手机号码！",
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            methods: "目前只支持中国大陆的手机号码",
            message: "请输入正确的手机号码",
          },
        ],
        captcha: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: "blur",
          },
        ],
      },
      //登录类型
      crtType: "usernamePasswordLogin", //判断账号、手机号、手机号注册的类型
      identifyForm: {
        //手机验证码登录
        mobile: "",
        captcha: "",
        identifyRememberMe: false,
      },
      checked: false, //必须同意协议才可以注册账号
      vipInfos: {}, //用户vip信息
      vipEndTime: "", //会员结束时间
      captcha: "短信验证码", //手机验证码登录中发送验证码按钮的文本
      Phonecaptcha: "短信验证码", //注册页面发送验证码按钮的文本
      isUserInfo: false, //头像卡片的显示与隐藏
      avatarImg: "../../../public/image/common/avator.png", // 默认头像
      nickname: "小鹿线-默认",
      avatorList: [
        {
          id: 1,
          imgUrl: "image/header/course.png",
          title: "我的课程",
          linkUrl: "/about/my-course",
        },
        {
          id: 2,
          imgUrl: "image/header/order.png",
          title: "订单中心",
          linkUrl: "/about/my-course",
        },
        {
          id: 3,
          imgUrl: "image/header/mess.png",
          title: "我的消息",
          linkUrl: "/about/my-course",
        },
        {
          id: 4,
          imgUrl: "image/header/setting.png",
          title: "个人设置",
          linkUrl: "/user/setbindsns",
        },
      ],
      courseColor: -1, //修改头像卡片中分类的字体样式
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getUserInfo()
    }
  },
  computed: {},
  methods: {
    //搜索功能
    toSearch() {
      // console.log( this.keywords,'用户输入的内容' )
      if (!this.keywords) {
        // elementui消息提示框
        this.$message({
          type: "error",
          message: "请输入关键字，再进行搜索",
        })
        return
      }
      // this.$router.replace({})
    },
    // 账号登录
    submitPhoneForm(phoneForm) {
      this.$refs[phoneForm].validate((valid) => {
        if (valid) {
          var phoneloading = Loading.service({
            lock: true,
            text: "加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0,0,0,.7)",
          })
          // console.log(this.phoneForm.username,this.phoneForm.password,'账号密码') 获取用户输入的账号密码
          // 用账号密码去登录接口
          // 拿到用户的账号密码后，先进行加密才可以正常的请求登录接口
          let username = Encrypt(this.phoneForm.username)
          let password = Encrypt(this.phoneForm.password)
          // 请求登录接口（测试账号：test  密码：123456  该账号禁止擅自修改密码！！！）
          loginByJson({ username, password })
            .then((res) => {
              console.log(res, "登录成功了吗？")
              if (res.meta.code === "10006") {
                //登录成功
                //关闭loading框
                phoneloading.close()
                //关闭登录界面
                this.loginDialog = false
                let accessToken = res.data.accessToken
                localStorage.setItem("token", Encrypt(accessToken))
                localStorage.setItem("isLogin", JSON.stringify(true))
                this.getUserInfo()
                this.$message({
                  type: "success",
                  message: "登录成功，快去学习吧！",
                })
                // this.$router.go(0)
              } else {
                this.$message({
                  type: "error",
                  message: "登陆失败",
                })
                //关闭loading框
                phoneloading.close()
                //关闭登录界面
                this.loginDialog = false
              }
            })
            .catch((err) => {
              this.$message({
                type: "error",
                message: err.meta.msg,
              })
              //关闭loading框
              phoneloading.close()
            })
        } else {
          return false
        }
      })
    },
    // 获取用户个人信息
    getUserInfo() {
      //要先创建token 获取个人信息要携带token
      createToken().then((res) => {
        // console.log( res, 'token' )
        //请求获取个人信息的接口
        getInfo({ token: res.data.token }).then((res) => {
          console.log(res, "用户信息")
        })
      })
    },

    // 登录/注册 按钮
    goLogin() {
      this.loginDialog = true
    },
    //账号登陆和验证码登录的切换
    gochange(index) {
      if (index == 1) {
        this.crtType = "mobileCaptchaLogin"
      } else if (index == 0) {
        this.crtType = "registerLogin"
      }
      this.loginCurrent = index
    },
    backRegister() {
      this.isregister = true
      this.crtType = "registerLogin"
    },
    backLogin() {
      this.isregister = false
    },
  },

  components: {},
}
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
</script>

<style scoped>
.el-form-item__content {
  line-height: 24px !important;
}

.el-input-box {
  border: 1px solid #dcdfe6;
}
::v-deep .el-input-box input {
  border: none !important;
  width: 150px;
}
/*vip开始*/
.vip {
  display: flex;
  flex-direction: row;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 30px;
  margin-left: -105px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 30px;
}
.vipImg {
  width: 15px;
  height: 15px;
  margin-right: 12px;
}
.vipImg img {
  width: 100% !important;
  height: 100% !important;
}
.vipName {
  color: #93999f;
}
.endTime {
  padding-left: 2px;
  color: #ff0000;
  position: absolute;
  top: 45px;
  left: 73px;
  font-size: 12px;
}
/*vip结束*/
.remember {
  margin-bottom: 10px !important;
}
.el-form-item {
  margin-bottom: 16px;
}
.el-checkbox {
  color: #a2a2a2 !important;
  font-weight: normal !important;
  font-size: 12px !important;
}
.el-checkbox__label {
  font-size: 12px !important;
}
.third-party-login {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 0;
}
.third-party-login i {
  font-size: 20px;
}
.third-party-login div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5ffe1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.third-party-login .login-qq {
  background-color: #edf5ff;
}
.third-party-login .login-weibo {
  background-color: #fff2f5;
}
.third-party-login .fa-qq {
  color: #368afe;
  cursor: pointer;
}
.third-party-login .fa-weixin {
  color: #09bb07;
  cursor: pointer;
}
.third-party-login .fa-weibo {
  color: #d81e06;
  cursor: pointer;
}
.course-color {
  color: #3689ff !important;
}
.container {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #9199a1;
  text-align: center;
  margin-top: 10px;
}
.regiter-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}
.tip-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tip-img div {
  margin: 20px 0;
}
.regiter-success img {
  width: 250px;
  height: 180px;
}
.start-study {
  line-height: 40px;
  text-align: center;
  width: 200px;
  height: 40px;
  background: #3689ff;
  font-size: 18px;
  border-radius: 31px;
  color: #fff;
  cursor: pointer;
}
.privacy {
  font-size: 12px !important;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 153, 161, 1);
}
/*.privacy a {*/
<<<<<<< HEAD
/*color: #3689ff;*/
/*text-decoration: none;*/
=======
<<<<<<< HEAD
/*color: #3689ff;*/
/*text-decoration: none;*/
=======
/*	color: #3689ff;*/
/*	text-decoration: none;*/
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
/*}*/
.active {
  font-weight: bold;
  color: #3481ff;
  /* color: #3689ff; */
}
* {
  list-style: none;
  text-decoration: none;
}
.header {
  width: 100%;
  height: 100px;
  position: relative;
}
.title-desc {
  cursor: pointer;
}
.index-header {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  /* background: skyblue; */
  background: white;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 0px;
  z-index: 20;
}
.header-content {
  position: relative;
  display: flex;
  width: 1200px;
  justify-content: space-around;
}
.content-logo {
  width: 160px;
  height: 55px;
  margin: 10px 0;
  cursor: pointer;
}
.content-logo img {
  height: 100%;
}
.content-nav {
  width: 300px;
  height: 75px;
}
.content-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
  margin: 0;
  padding: 0;
  /* height: 100%; */
  color: black;
}

.content-nav ul li a {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #808080;
}

.searBuyLogin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
}
.content-search {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 350px;
  height: 35px;
  border-radius: 8px;
  background: #f0f2f4;
}
.content-search input {
  padding: 0 10px;
  width: 430px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  color: #808080;
  background: #f0f2f4;
  font-size: 16px;
  outline: none;
}
.content-search i {
  color: #808080;
  font-size: 22px;
}
.content-Shopping i {
  color: #808080;
  font-size: 24px;
}
.content-login {
  height: 31px;
  font-size: 18px;
  color: #808080;
  text-align: center;
  cursor: pointer;
}
.content-login-success {
  height: 53px;
  color: #808080;
  text-align: center;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #707070;
}
.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}
.dialog-title {
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
}
.title-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(120, 125, 130, 1);
}
.title-item span {
  margin-top: 5px;
  width: 15px;
  height: 2px;
  /* background-color: red; */
}

.active span {
  background-color: rgba(54, 137, 255, 1);
}
.dialog-register {
  width: 200px;
  height: 30px;
  color: #3689ff;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  cursor: pointer;
}
.captcha {
  width: 100%;
  background: rgba(245, 245, 245, 1);
  position: relative;
}
.captcha el-input {
  background: rgba(245, 245, 245, 1);
}
.sendcaptcha {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #3689ff;
  cursor: pointer;
}
.send {
  font-size: 12px;
  color: rgba(120, 125, 130, 1);
}
.regiterBtn {
  width: 100%;
  border-radius: 20px;
}
.backLogin {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #3689ff;
  cursor: pointer;
}
.user-info {
  width: 200px;
  height: 194px;
  background-color: #fff;
  border: 1px solid rgba(248, 250, 252, 1);
  box-shadow: 0px 5px 15px 3px #888888;
  position: absolute;
  top: 87px;
  right: -40px;
  z-index: 999;
  display: block;
  border-radius: 10px;
}
.user-info-top {
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(248, 250, 252, 1);
  flex-direction: column;
}
.u-i-t-top {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
}
.u-i-t-top img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
}
.avator-info {
  width: 120px;
  height: 60px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}
/*有会员了之后高度微调*/
.avator-info p {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.u-i-i-bottom {
  display: flex;
  height: 100px;
  width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.info-item {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.info-item img {
  width: 14px;
  height: 16px;
}
.user-info-bottom {
  position: relative;
  width: 100%;
  height: 30px;
}
.logout {
  line-height: 30px;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
  cursor: pointer;
}
.shopcar {
  width: 200px;
  height: 220px;
  background: #fff;
  position: absolute;
  top: 87px;
  right: 130px;
  z-index: 999;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 3px #888888;
  border-radius: 10px;
}
.shopcar-top {
  height: 30px;
  line-height: 30px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
}
.s-t-left {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}
.shopcar-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  font-size: 10px;
  box-sizing: border-box;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #a2a2a2;
  /* opacity: 0.56; */
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.shopcar-center img {
  width: 60px;
  height: 54px;
  margin-bottom: 5px;
}
.car-empy {
  font-size: 14px;
  color: #787d82;
  margin-bottom: 5px;
}
.course-center {
  color: #3481ff;
  cursor: pointer;
}
.shopcar-bottom {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
}
.shopcar-bottom .car {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.car img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.actives {
  position: relative;
  color: #3689ff !important;
}
.actives::after {
  content: "" !important;
  position: absolute !important;
  bottom: -38px !important;
  left: -15px;
  width: 70px;
  height: 2px;
  background-color: #3689ff;
  border-radius: 5px !important;
}
.gray {
  /*grayscale(val):val值越大灰度就越深*/
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
