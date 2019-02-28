<template>
  <div class="yanse">
    <div id="dlgh">
      <publicheader class="ph"></publicheader>
      <div class="container">
        <div class="line"></div>
        <div class="diyibuf">
          <!--头像-->
          <el-tooltip class="item" effect="dark" content="点击更换头像" placement="bottom">
            <div class="toux">
              <img class="touximg" src="../../static/gay.jpg">
            </div>
          </el-tooltip>
          <!--名字-->
          <div class="title">zzl</div>

          <div class="xixian"></div>
          <!--关注的两个按钮-->
          <div class="guanzhu">
            <div>
              <el-popover placement="left" width="400" trigger="click" height>
                <div class="wdxx">关注我的人</div>
                <div class="sixingkuai" v-for="(o,index) in 4" :key="index">
                  <div>
                    <img class="zhihuimg" src="../../static/zhihu.jpg">
                  </div>
                  <span>心里苦</span>
                </div>
                <div slot="reference" style=" cursor: pointer;">
                  关注我的人
                  <i class="el-icon-star-on"></i>
                </div>
              </el-popover>
            </div>
            <div class="xian"></div>
            <div>
              <el-popover placement="right" width="400" trigger="click" height>
                <div class="wdxx">我关注的人</div>
                <div class="sixingkuai" v-for="(o,index) in 4" :key="index">
                  <div>
                    <img class="zhihuimg" src="../../static/zhihu.jpg">
                  </div>
                  <span>心里苦</span>
                </div>
                <div slot="reference" style=" cursor: pointer;">
                  我关注的人
                  <i class="el-icon-star-on"></i>
                </div>
              </el-popover>
            </div>
          </div>
          <div class="xixian"></div>
        </div>
        <div class="line2"></div>
        <div class="line1"></div>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label="个人信息" name="first">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop label width="50px"></el-table-column>
              <el-table-column prop="key" width="700px"></el-table-column>
              <el-table-column prop="value" width="200px"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="回答" name="second">
            <tw v-for="o in 5" :key="o" style="margin-left:0px"></tw>
          </el-tab-pane>
          <el-tab-pane label="收藏" name="third">
            <div class="sckuai">
              <sckuai class="sck" v-for="o in 5" :key="o" :index="o"></sckuai>
            </div>
          </el-tab-pane>
          <el-tab-pane label="提问" name="fourth">
            <tw v-for="o in 5" :key="o" style=" margin-left: 0px;"></tw>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import publicheader from "./public_header.vue";
import sckuai from "./sckuai.vue";
import tw from "./blogkuai.vue";
export default {
  name: "",
  data() {
    return {
      dl: false,
      xx: 1,
      active: 0,
      show: true,
      username: "",
      password: "",
      activeName: "second",
      tableData: [
        {
          key: "姓名",
          value: "王小虎"
        },
        {
          key: "出生日期",
          value: "2016-05-04"
        },
        {
          key: "家庭住址",
          value: "上海市普陀区金沙江路 1519 弄"
        }
      ]
    };
  },
  components: {
    publicheader,
    sckuai,
    tw
  },
  methods: {
    beforeClose(action, done) {
      if (action === "confirm") {
        setTimeout(done, 1000);
        this.dl = !this.dl;
      } else {
        done();
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="" scoped>
.zhihuimg {
  width: 40px;
  height: 40px;
  margin-right: 20px;
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
}
.sck {
  height: 200px;
}
.sckuai {
  display: flex;
  justify-content: flex-start;
  padding-left: 0px;
  height: 5000px;
  align-content: flex-start;
  flex-wrap: wrap;
}
.yanse {
  background-color: rgb(204, 201, 201);
  height: 5000px;
}
.ph {
  padding-left: 13.5%;
}

.container {
  width: 60%;
  margin-left: 20%;
  background-color: white;
}
.dlbtn {
  display: flex;
  justify-content: center;
  padding-top: 60px;
}
.line {
  height: 5px;
  width: 100%;
  background-color: rgb(196, 189, 189);
  margin-top: 72px;
}
.diyibuf {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.toux {
  height: 300px;
  width: 200px;
  display: flex;
  justify-content: center;
  margin-left: 44%;
  margin-top: 10px;
  cursor: pointer;}
.touximg {
  height: 200px;
  width: 100%;
  border-radius: 100px;
}
.title {
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
}
.xixian {
  border: 0.5px solid rgb(189, 187, 187);
  width: 90%;
  margin: 5px auto;
}
.guanzhu {
  display: flex;
  justify-content: space-around;
}
.xian {
  border: 0.5px solid rgb(189, 187, 187);
  width: 1px;
  height: 30px;
}
.line2 {
  height: 10px;
  width: 100%;
  background-color: rgb(196, 189, 189);
}
.fenqulan {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgb(196, 189, 189);
  height: 50px;
  align-items: center;
}
.font_xx {
  font-size: 18px;
}
</style>