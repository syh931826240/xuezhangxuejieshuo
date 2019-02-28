<template>
  <div class="container">
    <div class="title">
      <span>有哪些适合摘抄的句子？{{jianjie.title}}</span>
    </div>
    <div class="img_font">
      <div class="img">
        <img src="../../static/zz.jpg" class="imgr">
      </div>
      <div class="jianjie">
        <router-link :to="'/details/'+this.id2" style="text-decoration:none">
          <pre class="summary">{{jianjie.content}}
台湾牯岭街少年杀人案。
1961年6月15日晚，十六岁少年茅武连捅数刀杀死当时建国中学十五岁女生刘敏。此案在当时的台湾引起引起了巨大的轰动，其中许多值得深思。
后被改编成著名电影《牯岭街少年杀人事件》后被改编成著名电影《牯岭街少年杀人事件》后被改编成著名电影《牯岭街少年杀人事件》后被改编成著名电影《牯岭街少年杀人事件》。</pre>
        </router-link>
      </div>
    </div>
    <div class="pjl">
      <div @click="zan1" v-bind:class="[iszan ? zanactive : zan]">
        <i class="el-icon-caret-top"></i>
        <span v-bind:class="[iszan ? zanleiactive : zanlei]">赞同</span>
        <span v-bind:class="[iszan ? zan_countactive : zan_count]">{{zanconnt}}</span>
      </div>
      <div @click="cai1" v-bind:class="[iscai ? caiactive : cai]">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div class="pl">
        <i class="el-icon-document"></i>
        <span>{{plcount}}</span>
      </div>
      <div class="pl" @click="open4">
        <i class="el-icon-share"></i>
        <Span>分享</Span>
      </div>
      <span @click="open3">
        <div class="pl1" @click="pl2" v-bind:class="[ispl ? plactive1 : pl1]">
          <i class="el-icon-star-on"></i>
          <span>收藏</span>
        </div>
      </span>
      <div class="pl" @click="FormVisible = true">
        <i class="el-icon-warning"></i>
        <span>投诉</span>
        <template>
          <el-dialog title="投诉理由" :visible.sync="FormVisible">
            <el-form :model="form">
              <el-form-item label="投诉名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="投诉详情" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="gb">取 消</el-button>
              <el-button type="primary" @click="this.FormVisible = false">确定投诉</el-button>
            </div>
          </el-dialog>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import pll from "./pll.vue";
export default {
  name: "container",
  props: ["id"],
  mounted() {
    console.log("dmz");
    this.qqsj();
    this.jianjie = this.$store.state.bloglist;
    this.zanconnt = this.jianjie.likenum;
    this.userinfo = localStorage.userinfo;
  },
  components: { pll },
  data() {
    return {
      userinfo: {},
      id2: this.id,
      jianjie: {},
      zanconnt: 777,
      plcount: 999,
      iszan: false,
      iscai: false,
      ispl: false,
      zanactive: "zanactive",
      zan: "zan",
      zanleiactive: "zanleiactive",
      zanlei: "zanlei",
      zan_countactive: "zan_countactive",
      zan_count: "zan_count",
      cai: "cai",
      caiactive: "caiactive",
      pl1: "pl1",
      plactive1: "plactive1",
      dialogTableVisible: false,
      FormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      textarea: ""
    };
  },
  methods: {
    //子组件的mounted比父组件快得多
      qqsj() {
      this.axios
        .get("/topic")
        .then(function(response) {
          let bloglist = response.data;
          localStorage.jianjie=JSON.stringify(bloglist);
          this.$store.commit("getbloglist", bloglist);
        })
        .catch(function(err) {
          console.log("数据拉去失败");
        });
    },
    gb() {
      this.FormVisible = false;
    },
    open4() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 链接复制成功</strong>"
      });
    },
    open3() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 收藏成功</strong>"
      });
    },
    zan1(e) {
      if (!this.iszan) {
        this.iszan = !this.iszan;
        this.zanconnt++;
        this.aioxs
          .get(
            `/answer/like?class1=${this.id2}&class2=${0}&userid=${
              this.userinfo.username
            }&type=increase`
          )
          .then(res => {
            this.zanconnt = res.data.zancount;
          })
          .catch(err => {
            this.$alert("点赞失败", "错误", {
              confirmButtonText: "确定"
            });
          });
        if (this.iscai == true) {
          this.iscai = false;
        }
      } else {
        this.iszan = !this.iszan;
        this.zanconnt--;
        this.aioxs
          .get(
            `/answer/like?class1=${this.id2}&class2=${1}&userid=${
              this.userinfo.username
            }&type=discrease`
          )
          .then(res => {
            this.zanconnt = res.data.zancount;
          })
          .catch(err => {
            this.$alert("取消点赞失败", "错误", {
              confirmButtonText: "确定"
            });
          });
      }
    },
    cai1() {
      if (!this.iscai) {
        this.iscai = !this.iscai;
        if (this.iszan == true) {
          this.iszan = false;
          this.zanconnt--;
          aioxs
            .get(
              `/answer/like?class1=${this.id2}&class2=${1}&userid=${
                this.userinfo.username
              }&type=discrease`
            )
            .then(res => {
              this.zanconnt = res.data.zancount;
            })
            .catch(err => {
              this.$alert("没踩到！", "错误", {
                confirmButtonText: "确定"
              });
            });
        }
      }
    },
    pl2() {
      this.ispl = !this.ispl;
    }
  }
};
</script>

<style lang="" scoped>
.zanactive {
  margin: 5px 5px;
  border-radius: 5px;
  height: 35px;
  width: 100px;
  background-color: rgb(43, 10, 104);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: column;
  height: 220px;
  background-color: white;
  width: 100%;
  margin-left: 10%;
  margin-top: 10px;
  border-bottom: 5px solid rgb(175, 166, 166);
}
.title {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  font-size: 25px;
  font-weight: 800;
}
.img_font {
  display: flex;
  justify-content: flex-start;
}
.img {
  height: 70px;
  width: 20%;
}
.imgr {
  margin-top: 15px;
  height: 105px;
  width: 100%;
  border-radius: 10px;
  margin-left: 5px;
}
.jianjie {
  width: 80%;
}
.summary {
  font-size: 18px;
  height: 100px;
  font-weight: 800;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  padding-left: 10px;
  text-align: left;
  text-indent: 35px;
}

.pjl {
  height: 50px;
  display: flex;
  justify-content: flex-start;
}
.zan {
  margin: 5px 5px;
  border-radius: 5px;
  height: 35px;
  width: 100px;
  background-color: rgb(207, 221, 223);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(17, 57, 104);
  cursor: pointer;
}
.zanlei {
  font-size: 15px;
  color: rgb(17, 57, 104);
  font-weight: 600;
}
.zanleiactive {
  font-size: 15px;
  color: rgb(255, 255, 255);
  font-weight: 600;
}
.zan_count {
  font-size: 15px;
  font-weight: 400px;
  color: rgb(17, 57, 104);
  margin-top: 2px;
}
.zan_countactive {
  font-size: 15px;
  font-weight: 400px;
  color: white;
  margin-top: 2px;
}
.cai {
  height: 35px;
  width: 50px;
  background-color: rgb(142, 173, 177);
  margin: 5px 0px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(17, 57, 104);
  cursor: pointer;
}
.caiactive {
  height: 35px;
  width: 50px;
  background-color: rgb(43, 10, 104);
  margin: 5px 0px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.pl {
  height: 35px;
  width: 80px;
  background-color: rgb(142, 173, 177);
  margin: 5px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(17, 57, 104);
  font-size: 15px;
  cursor: pointer;
}
.plactive {
  height: 35px;
  width: 80px;
  background-color: rgb(43, 10, 104);
  margin: 5px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  cursor: pointer;
}
.pl1 {
  height: 35px;
  width: 80px;
  background-color: rgb(142, 173, 177);
  margin: 5px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(17, 57, 104);
  font-size: 15px;
  cursor: pointer;
}
.plactive1 {
  height: 35px;
  width: 80px;
  background-color: rgb(43, 10, 104);
  margin: 5px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  cursor: pointer;
}
</style>