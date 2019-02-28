
<template>
  <div class="container">
    <pbh class="ph"></pbh>
    <!--标题模块-->
    <div class="mkcontainer">
      <div class="zjcontainer">
        <!--标签-->
        <div class="tag">
          <router-link to>
            <el-tag class="bq">标签一</el-tag>
          </router-link>
          <router-link to>
            <el-tag class="bq">标签一</el-tag>
          </router-link>
          <router-link to>
            <el-tag class="bq">标签一</el-tag>
          </router-link>
          <router-link to>
            <el-tag class="bq">标签一</el-tag>
          </router-link>
        </div>
        <!--问题进一步描述-->
        <div class="titlecontainer">
          <div class="title">有哪些不起眼却非常赚钱的行业？</div>
          <div class="miaoshuadd">有哪些闷声赚大钱的行业，欢迎大家分享!</div>
        </div>
        <!--写回答栏等-->
        <div class="huidalan">
          <el-button type="primary">关注问题</el-button>
          <el-button type="primary" plain>写回答</el-button>
          <el-button type="success" plain>邀请回答</el-button>
          <div class="fx">
            <i class="el-icon-document"></i>
            <span style="font-size:15px;margin:5px;font-weight:700">777</span>评论
          </div>
          <span @click="open4">
            <el-tooltip class="item" effect="dark" content="点击复制链接" placement="bottom-start">
              <div class="fx">
                <i class="el-icon-share"></i>
                分享
              </div>
            </el-tooltip>
          </span>
          <div class="fx" @click="dialogFormVisible = true">
            <i class="el-icon-warning"></i>
            举报
          </div>
          <div>
            <el-dialog title="投诉理由" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="投诉名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="投诉详情" :label-width="formLabelWidth">
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确定投诉</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>
      <!--浏览数等-->
      <div class="lls">
        <div class="gz">
          <div>关注者</div>
          <div class="llfont">{{guanzhushu | NumFormat}}</div>
        </div>
        <div class="gz">
          <div>浏览数</div>
          <div class="llfont">{{liulanshu | NumFormat}}</div>
        </div>
      </div>
    </div>
    <!--详情回答模块-->
    <div class="xqmkcontainer">
      <!--详情回答-->
      <div class="huida">
        <!--千万别再V-bind绑定的东西加this，这this不知道是什么-->
        <huida v-for="(o,index) in 5" :key="index" :id="index" :detid1="$route.params.did"></huida>
      </div>
      <!--fixed一个评论栏-->
      <!--侧边栏-->
      <div class="cebianlan">
        <!--关于作者-->
        <div class="gfont">关于作者</div>
        <div class="gunayuzz">
          <el-row>
            <el-col :span="30" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <router-link to="/grzy">
                  <img src="../../static/t3.jpg" class="image">
                </router-link>
                <div style="padding: 14px;">
                  <span>心里苦</span>
                  <div class="bottom clearfix">
                    <span @click="open6">
                      <el-button type="text" class="button" style="font-size:20px">
                        <i class="el-icon-plus"></i>关注
                      </el-button>
                    </span>
                    <el-button type="text" class="button" style="font-size:20px">
                      <i class="el-icon-phone-outline"></i>发私信
                    </el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!--相关问题(a链接)-->
        <div class="gfont">相关问题</div>
        <div class="xgwt">
          <router-link to class="xgwt1">做什么行业赚钱？</router-link>
          <router-link to class="xgwt1">销售都分为哪些类型，哪个行业最赚钱？</router-link>
          <router-link to class="xgwt1">你所在的行业/职位收入如何？从入职到现在变化怎样?</router-link>
          <router-link to class="xgwt1">最快速挣钱的方法有那些？</router-link>
          <router-link to class="xgwt1">2014年如何用我的10万块在上海赚钱？</router-link>
        </div>
        <!--相关推荐(再写个吧简介块)-->
        <div class="gfont">相关推荐</div>
        <div class="xgtuijan">
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
          <tuijian></tuijian>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pbh from "./public_header.vue";
import tuijian from "./tuijian.vue";
import huida from "./huidakuai.vue";
import pll from "./pll.vue";
export default {
  name: "",
  mounted() {
    this.qqsjde();
    console.log("this.$route.params.did")
  },
  data() {
    return {
      
      guanzhushu: "9999",
      liulanshu: "77777",
      dialogTableVisible: false,
      dialogFormVisible: false,
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
  components: {
    pbh,
    tuijian,
    pll,
    huida
  },
  methods: {
    qqsjde() {
      this.axios
        .get(`/topic?${this.$route.params.did}`)
        .then(function(response) {
          let getblogdetails = response.data;
          localStorage.blogdetails = JSON.stringify(getblogdetails);
          this.$store.commit("getblogdetails", getblogdetails);
        })
        .catch(function(err) {
          console.log("数据拉去失败");
        });
    },
    open6() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 关注成功</strong>"
      });
    },
    open4() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 链接复制成功</strong>"
      });
    }
  }
};
</script>

<style lang="" scoped>
.fx {
  margin: 10px;
  font-weight: 500;
  cursor: pointer;
}
.ph {
  padding-left: 9.5%;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: rgb(235, 233, 233);
}
.mkcontainer {
  display: flex;
  justify-content: flex-start;
  height: 185px;
  padding-left: 15%;
  padding-right: 15%;
  border-top: 1px solid rgb(228, 225, 225);
  background-color: white;
}
.zjcontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.lls {
  display: flex;
  justify-content: flex-start;
}
.tag {
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}
.bq {
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
}
.titlecontainer {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 25px;
  font-weight: 800;
  display: flex;
  justify-content: flex-start;
}
.miaoshuadd {
  font-size: 18px;
  font-weight: 100;
  display: flex;
  justify-content: flex-start;
}
.huidalan {
  display: flex;
  justify-content: flex-start;
  padding-top: 5px;
}
.lls {
  display: flex;
  justify-content: flex-start;
  width: 20%;
  height: 185px;
  padding-top: 30px;
}
.gz {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.llfont {
  font-weight: 900;
}
.xqmkcontainer {
  display: flex;
  justify-content: flex-start;
  padding-left: 15%;
  padding-right: 15%;
}

.huida {
  display: flex;
  flex-direction: column;
}
.cebianlan {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.gunayuzz {
  margin-left: 5px;
  margin-top: 10px;
}
.gfont {
  width: 98%;
  background-color: white;
  height: 30px;
  margin-left: 5px;
  margin-top: 10px;
  font-size: 800;
}
.xgwt {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 98%;
  background-color: white;
  padding-left: 0px;
  height: 300px;
  margin-left: 5px;
  margin-top: 10px;
  text-align: left
}
.xgwt1 {
  margin-top: 5px;
  font-size: 18px;
}
</style>