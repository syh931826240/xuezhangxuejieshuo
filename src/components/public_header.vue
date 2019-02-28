<template>
  <div class="waibao">
    <div class="container">
      <!--图片-->
      <div class="img_con">
        <img class="logo" src="../../static/3.jpeg">
      </div>
      <!--分类-->
      <div class="fenlei">
        <div class="fenlei_font">
          <el-button type="primary" plain size="mini">发展方向</el-button>
        </div>
        <div class="fenlei_font">
          <el-button type="success" plain size="mini">学校生活</el-button>
        </div>
        <div class="fenlei_font">
          <el-button type="info" plain size="mini">学习经验</el-button>
        </div>
      </div>
      <!--搜索框  -->
      <div class="sskcon">
        <div>
          <el-input placeholder="请输入内容" v-model="input10" clearable class="ssk"></el-input>
        </div>
        <el-button type="primary" icon="el-icon-search" class="bt_ss">搜索</el-button>
      </div>

      <!--我的提醒  -->
      <div class="xk">
        <el-popover placement="bottom" width="400" trigger="click" height>
          <div class="wdxx">我的消息</div>
          <div class="xiaoxikuai" v-for="(o,index) in 10" :key="index">逸州 的提问等你来答 我同桌到底什么意思啊？</div>
          <i class="el-icon-bell" slot="reference"></i>
        </el-popover>
      </div>
      <!--我的私信  -->
      <div class="xk">
        <el-popover placement="bottom" width="400" trigger="click" height>
          <div class="wdxx">我的私信</div>
        
            <div
              class="sixingkuai"
              v-for="(o,index) in 10"
              :key="index"
              @click="dialogTableVisible = true"
            >
              <div>
                <img class="zhihuimg" src="../../static/zhihu.jpg">
              </div>
              <span>心里苦</span>
            </div>
          
          <i class="el-icon-message" slot="reference"></i>
        </el-popover>
      </div>

       <el-dialog title="xxx的聊天" :visible.sync="dialogTableVisible" :modal-append-to-bod="true">
        <div class="container7">
          <div class="liaotiankuang"></div>
          <div class="wenbentiao"></div>
          <div class="shurukuang">
            <textarea class="sr" placeholder="说点什么" autofocus></textarea>
            <div class="fs">
              <el-button size="mini" round type="success ">发送</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
      <!--用户头像  -->
      <div class="xkimg">
        <router-link to="/grzy" v-if="islogin">
          <img class="tximg" src="../../static/t3.jpg">
        </router-link>
        <div v-else @click="dljm">
          <el-button type="danger" plain style="margin-top:3px">请登陆</el-button>
        </div>
      </div>

      <div style="width:30%"></div>
    </div>
  </div>
</template>

<script>
import liaotian from "./liaotian.vue";

export default {
  name: "",
  data() {
    return { input10: "", islogin: false, dialogTableVisible: false };
  },
  methods: {
    dljm() {
      this.$router.push({ path: "/login" });
    }
  },
  components: {
    liaotian,
    
  }
};
</script>

<style lang="" scoped>
.container7 {
  display: flex;
  flex-direction: column;
  padding-left: 100px;
}
.liaotiankuang {
  width: 600px;
  height: 300px;
  border: 0.5px solid rgb(231, 227, 227);
}
.wenbentiao {
  height: 30px;
  width: 600px;
  border: 0.5px solid rgb(231, 227, 227);
}
.zhihuimg {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.shurukuang {
  border: 0.5px solid rgb(223, 218, 218);
  width: 600px;
}
.sr {
  width: 595px;
  height: 80px;
  resize: none;
  font-size: 22px;

  border-style: none;
}
.fs {
  margin-right: -520px;
  margin-bottom: 5px;
}
.wdxx {
  text-align: center;
  font-size: 20px;
  border-bottom: 0.5px solid rgb(230, 223, 223);
}
.sixingkuai {
  height: 60px;
  width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid rgb(231, 227, 227);
  cursor: pointer;
}
.xiaoxikuai {
  height: 60px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgb(231, 227, 227);
}
.container {
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-left: -240px;
  padding-left: 290px;
  border-bottom: 1px solid rgb(156, 151, 151);
}
.img_con {
  height: 50px;
  width: 10%;
}
.logo {
  height: 50px;
  width: 100%;
}
.fenlei {
  display: flex;
  justify-content: flex-start;
  padding: 15px;
  width: 15%;
  font-size: 15px;
}
.fenlei_font {
  margin-right: 5px;
  color: rgb(175, 174, 174);
}
.sskcon {
  width: 20%;
  padding-top: 5px;
  display: flex;
  justify-content: flex-start;
}
.bt_ss {
  margin-left: 10px;
  height: 40px;
  margin-top: 3px;
}
.ssk {
  margin-top: 3px;
}
.xk {
  width: 5%;
  padding-top: 15px;
  font-size: 25px;
  cursor: pointer;
}
.tximg {
  height: 40px;
  width: 40%;
  border: 1px solid rgb(226, 216, 216);
  margin-top: 5px;
}
.xkimg {
  width: 10%;
  padding-top: 5px;
  font-size: 25px;
}
</style>