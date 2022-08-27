<template>
  <div class="navswiper">
    <div class="navSwiperContent">
      <div class="navigation">
        <ul>
          <li>
            <!-- <router-link to="/">
              {{ item.categoryName }} <i class="el-icon-arrow-right"></i
            ></router-link> -->
            前端初级工程师 <i class="el-icon-arrow-right"></i>
            <!-- <div class="category-detail">
              <div class="detail-main">
                <div class="detail-desc">基础知识</div>
                <div class="detail-list">
                  <div class="list-know">知识点:</div>
                  <div class="list-ul">
                    <a href="javascript:;" class="list-item">HTML</a>
                  </div>
                </div>
                <div class="detail-class">
                  <div class="course-card">
                    <div class="course-image">
                      <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6520b595fd6efc3037d699850333ce0cbdb67d90ac29-dfn6dK_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640508743&t=0059d05dc2e100bfe5eaed222b16b2a1"
                        alt=""
                      />
                    </div>
                    <div class="right">
                      <div class="courseName">小小游戏</div>
                      <div class="courseDegree">高级 · 123人购买</div>
                      <div class="buy">
                        <div class="buy-free">
                          <div class="coursePriceZero" v-if="true">
                            <div class="learn">免费学习</div>
                            <img src="" alt="" />
                          </div>
                          <div class="coursePrice" v-if="false">
                            <div class="courseMemberbg">
                              <span class="courseMember">会员专享</span>
                            </div>
                            <div class="price">¥111</div>
                          </div>
                          <div class="coursePricePri" v-if="false">
                            <div class="pricePri">¥888</div>
                          </div>
                        </div>
                        <div class="car">
                          <div class="cart-image">
                            <img src="/image/cart16.png" alt="" />
                          </div>
                          <span class="addcart">加入购物车</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </li>
        </ul>
      </div>
      <div class="sliders">
        <el-carousel height="460px">
          <el-carousel-item>
            <router-link to="">
              <!-- <h3>123</h3> -->
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6520b595fd6efc3037d699850333ce0cbdb67d90ac29-dfn6dK_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640508743&t=0059d05dc2e100bfe5eaed222b16b2a1"
                class="sliders-item-image"
              />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 课程分类组件 -->
    <CourseType></CourseType>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12c18c8 (day2)
import CourseType from '@/components/index/CourseType.vue'
export default {
  components: {
    CourseType
  }
<<<<<<< HEAD
=======
=======
import CourseType from "@/components/index/CourseType.vue"
export default {
  components: {
    CourseType,
  },
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
}
</script>

<style scoped>
.navswiper {
  width: 1200px;
  height: 500px;
  background: #ccc;
  margin: 30px auto;
}
</style>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.navSwiper {
  padding-top: 1px;
  width: 100%;
  height: 640px;
<<<<<<< HEAD
  background: url(/image/transitionbg.png);
=======
<<<<<<< HEAD
  background: url(/image/transitionbg.png);
=======
  background: url(../../../public/image/transitionbg.png);
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
}

.navSwiperContent {
  width: 1200px;
  height: 460px;
  margin: 35px auto 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
}

.navigation {
  width: 240px;
  height: 460px;
  background: #2b283d;
  position: relative;
}

.navigation ul {
  margin: 20px 0;
}

.navigation ul li {
  height: 40px;
  list-style: none;
  margin-bottom: 5px;
}

.navigation ul li a i {
  line-height: 40px;
  float: right;
}

.navigation ul li a {
  color: #ffffff;
  text-decoration: none;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  display: block;
  font-size: 16px;
  font-weight: bold;
}

.navigation ul li a:hover {
  background: linear-gradient(to right, #3fe5ff, transparent);
}

.category-detail {
  position: absolute;
  top: 0;
  left: 220px;
  background: rgba(255, 255, 255);
  z-index: 65535;
  min-width: 800px;
  height: 460px;
  /* height: 100%; */
  border-top-right-radius: 10px;
  /* border-bottom-right-radius: 10px; */
  box-sizing: border-box;
}

.sliders {
  width: 1060px;
  height: 460px;
}

.sliders-item-image {
  width: 100%;
  height: 100%;
}

/* 分类详情 */
.detail-main {
  cursor: pointer;
  height: 100%;
  /* margin: 0 10px; */
  position: relative;
}

.detail-list {
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-left: 20px;
  color: #333333;
  font-weight: 400;
  font-size: 14px;
}

.detail-desc {
  padding-top: 20px;
  padding-left: 20px;
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  opacity: 1;
}

.list-know {
  width: 70px;
  height: 30px;
  line-height: 30px;
}

.list-ul {
  width: calc(100% - 70px);
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  line-height: 30px !important;
  padding: 0 10px !important;
  color: #333333 !important;
  font-size: 14px !important;
  font-weight: unset !important;
}

.list-item:hover {
  background: unset !important;
  color: #00ffff;
}

/* 分类详情结束 */
/* 下侧课程开始 */
.detail-class {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 700px; */
  width: 100%;
  /* height: 250px; */
  height: 270px;
  padding: 20px 20px;
  /* margin-top: 30px; */
  background-color: #f3f5f6;
  box-sizing: border-box;
}

.course-card {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  width: 370px;
  height: 110px;
  box-sizing: border-box;
  /*background: red;*/
  /* border-radius: 10px; */
}

.course-image {
  /*position: relative;*/
  width: 100%;
  height: 90px;
  cursor: pointer;
}

.course-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.right {
  /*margin-left:6px;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  padding: 5px;
  box-sizing: border-box;
}

.courseName {
  width: 100%;
  /*height: 100%;*/
  /*margin: 20px 0 0 5px;*/
  font-weight: bold;
  font-size: 12px;
  color: #333333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.courseDegree {
  /*margin: 30px 0 0 5px;*/
  font-size: 12px;
  color: #808080;
}

.coursePrice {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.coursePriceZero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricePri {
  font-size: 12px;
}

.price {
  margin-left: 5px;
  color: red;
}

.courseMember {
  /*color: red;*/
  color: #ffffff;
  padding: 2px;
  box-sizing: border-box;
  background: red;
  border-radius: 6px;
}

.coursePricePri {
  font-size: 12px;
}

.buy {
  width: 200px;
  display: flex;
  /*margin: 30px 0 0 5px;*/
  justify-content: space-between;
  box-sizing: border-box;
}

.buy-free {
  display: flex;
  align-items: center;
}

.buy-free img {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.buy .learn {
  color: #3586ff;
  font-size: 12px;
}

.buy .car {
  display: flex;
  margin-right: 5px;
  font-size: 12px;
}

.buy .addcart {
  margin-left: 2px;
  color: #ff3d17;
  font-size: 12px;
  cursor: pointer;
}
</style>
