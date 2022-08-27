<template>
  <div class="foot">
    <div class="footer-main">
      <div class="footer-xlx">
        <img class="xlx" src="/image/logo02.png" alt="" />
      </div>
      <div class="footer-factory">
        <img class="factory" src="/image/foot-factory.png" alt="" />
      </div>
      <div class="copytight">
        <ul class="copy-top">
          <li><a href="#">关于我们</a></li>
          <li>｜</li>
          <li><a href="#">联系我们</a></li>
          <li>｜</li>
          <li><a href="#">意见反馈</a></li>
          <li>｜</li>
          <li><a href="#">版权声明</a></li>
        </ul>
        <div class="copy-bottom">
          <span class="">{{
            webconfig.copyright ? webconfig.copyright : ""
          }}</span>
          <a class="go" href="https://beian.miit.gov.cn/" target="_blank">{{
            webconfig.icp ? webconfig.icp : ""
          }}</a>
          <p style="text-align: center; margin-top: 5px">
            <a href="javascript:;" style="color: #fff"
              >《小鹿线用户隐私保护协议》</a
            >
            <a href="javascript:;" style="color: #fff"
              >《小鹿线用户隐私保护协议》</a
            >
          </p>
        </div>
      </div>
      <div class="wx">
        <div class="wx-bg">
<<<<<<< HEAD
          <img
            src=""
          />
=======
<<<<<<< HEAD
          <img
            src=""
          />
=======
          <img src="" />
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
        </div>
        <div class="wx-dsc">{{ guanfangwx.imageName }}</div>
      </div>
      <div class="wx">
        <div class="wx-bg">
<<<<<<< HEAD
          <img
            src=""
          />
=======
<<<<<<< HEAD
          <img
            src=""
          />
=======
          <img src="" />
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
        </div>
        <div class="wx-dsc">{{ teacherwx.imageName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { webConfig } from "@/common/api/webConfig.js";
// import { getImageByCode } from "@/common/api/picture.js";
// import imgCode from "@/common/globalImages.js";
export default {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12c18c8 (day2)
  data () {
    return {
      webconfig: {
        id: '', // 主键
        keywords: '', // 站点关键字
        ext03: '', // 扩展字段3
        ext02: '', // 扩展字段2
        title: '', // 网站标题
        logo: '', // 网站LOGO
        ext01: '', // 扩展字段1
        icp: '', // 备案号
        copyright: '', // 网站版权信息
        website: '', // 网址
        description: '' // 网站描述
      },
      guanfangwx: {
        imageName: '',
        imgUrl: ''
      },
      teacherwx: {
        imageName: '',
        imgUrl: ''
      }
    }
  }

<<<<<<< HEAD
=======
=======
  data() {
    return {
      webconfig: {
        id: "", // 主键
        keywords: "", // 站点关键字
        ext03: "", // 扩展字段3
        ext02: "", // 扩展字段2
        title: "", // 网站标题
        logo: "", // 网站LOGO
        ext01: "", // 扩展字段1
        icp: "", // 备案号
        copyright: "", // 网站版权信息
        website: "", // 网址
        description: "", // 网站描述
      },
      guanfangwx: {
        imageName: "",
        imgUrl: "",
      },
      teacherwx: {
        imageName: "",
        imgUrl: "",
      },
    }
  },
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
}
</script>

<style scoped>
.foot {
  width: 100%;
  min-width: 1200px;
  height: 150px;
  background: #3483ff;
  opacity: 1;
  border-radius: 0px;
}
.footer-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 100%;
  color: #ffffff;
  margin: auto;
}
.footer-xlx {
  width: 110px;
  opacity: 1;
}
.xlx {
  width: 100%;
  height: 100%;
}
.footer-factory {
  width: 130px;
  margin: 0 20px;
}
.factory {
  width: 100%;
  height: 100%;
}
.copy-top {
  font-size: 14px;
  margin: 0 10px 10px 50px;
  display: flex;
}
.copy-top li {
  margin: 0 10px;
}
.copy-top li a {
  color: #ffffff !important;
}
.copy-bottom {
  font-size: 12px;
}
.wx {
  margin-left: 20px;
  width: 80px;
  height: 100px;

  font-size: 12px;
}
.wx-bg {
  width: 80px;
  height: 80px;
}
.wx img {
  width: 100%;
  height: 100%;
}
.wx-dsc {
  text-align: center;
}
.go {
  color: #ffffff;
  text-decoration: underline;
  padding-left: 10px;
}
</style>
