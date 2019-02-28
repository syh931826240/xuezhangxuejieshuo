<template>
  <div class="container">
    <div v-if="!isloading" class="dhua">
      <div id="preloader_6">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-else>
      <div class="tou">
        <el-row :gutter="20" style="width:650px;  ">
          <el-col :span="16" class="zuoduiqi">
            <div class="grid-content bg-purple">
              <span class="plfont">共777条评论</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="pxfont" @click="sjpx">
                <i class="el-icon-sort"></i>
                按时间排序
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="antou">
        <span>优质回答</span>
        <router-link :to="'/details/'+$route.params.did" class="sqpl">收起评论</router-link>
      </div>
      <div class="cmkuai">
        <commentkuai v-for="(o,index) in 5" :key="index"></commentkuai>
      </div>
    </div>
  </div>
</template>

<script>
import commentkuai from "./commentkuai.vue";
export default {
  mounted() {
    this.cs();
  },
  name: "",
  data() {
    return {
      isloading: false
    };
  },
  methods: {
    cs() {
      let that = this;
      setTimeout(function() {
        that.isloading = !that.isloading;
      }, 2000);
    },
    sjpx() {}
  },
  components: {
    commentkuai
  }
};
</script>

<style lang="" scoped>
.sqpl {
  color: gray;
  text-decoration: none;
  margin-right: 5px;
}
.container {
  border: 1px solid rgb(206, 200, 200);
  margin: 5px 10px;
}
.antou {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(230, 220, 220);
  height: 40px;
  padding-left: 5px;
}
.dhua {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
}
.tou {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zuoduiqi {
  display: flex;
  justify-content: flex-start;
}
.plfont {
  font-size: 18px;
  font-weight: 800;
}
.pxfont {
  font-size: 18px;
  font-weight: 500;
  color: rgba(168, 142, 142, 0.856);
  margin-left: 70px;
  cursor: pointer;
}

#preloader_6 {
  position: relative;
  width: 42px;
  height: 120px;
  animation: preloader_6 5s infinite linear;
}
#preloader_6 span {
  width: 20px;
  height: 20px;
  position: absolute;
  background: red;
  display: block;
  animation: preloader_6_span 1s infinite linear;
}
#preloader_6 span:nth-child(1) {
  background: #2ecc71;
}
#preloader_6 span:nth-child(2) {
  left: 22px;
  background: #9b59b6;
  animation-delay: 0.2s;
}
#preloader_6 span:nth-child(3) {
  top: 22px;
  background: #3498db;
  animation-delay: 0.4s;
}
#preloader_6 span:nth-child(4) {
  top: 22px;
  left: 22px;
  background: #f1c40f;
  animation-delay: 0.6s;
}
@keyframes preloader_6 {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@keyframes preloader_6_span {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>