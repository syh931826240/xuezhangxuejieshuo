<template>
  <div class="container">
    <!--视频列表-->
    <div class="list">
      <blogkuai v-for="(o,index) in 5" :key="index" :id="index"></blogkuai>
    </div>
    <!--侧面的分类栏-->
    <div class="ce">
      <div class="xie">
        <div class="tuwen">
          <i class="el-icon-view" style="color:blue"></i>
          <span class="fontz">
            <router-link to style="text-decoration:none">写答案</router-link>
          </span>
        </div>
        <div class="tuwen">
          <i class="el-icon-tickets" style="color:red"></i>
          <span class="fontz">
            <router-link to="/xieblog" style="text-decoration:none">写博客</router-link>
          </span>
        </div>
        <div class="tuwen">
          <i class="el-icon-edit" style="color:yellow"></i>
          <span class="fontz">
            <router-link to style="text-decoration:none">写点子</router-link>
          </span>
        </div>
      </div>
      <!--版权信息-->
      <div class="banquan">联系我们 © 2019 学长学姐说</div>
    </div>
  </div>
</template>

<script>
import blogkuai from "./blogkuai.vue";
export default {
  name: "container",
  mounted() {
    this.jianjie = this.$store.state.bloglist;
    if (this.jianjie === {}) {
      this.jianjie = localStorage.jianjie;
    }
  },
  data() {
    return { jianjie: {} };
  },
  components: { blogkuai },
  methods: {
    /*qqsj() {
      axios
        .get("/topic")
        .then(function(response) {
          let bloglist = response.data;
          localStorage.jianjie=JSON.stringify(bloglist);
          this.$store.commit("getbloglist", bloglist);
        })
        .catch(function(err) {
          console.log("数据拉去失败");
        });
    }*/
  }
};
</script>

<style lang="" scoped>
.container {
  margin-top: 80 px;
  display: flex;
  justify-content: space-between;
}
.xie {
  width: 100%;
  height: 80px;
  border: 1px solid rgba(224, 213, 213, 0.63);
  margin-top: 10px;
  margin-left: -200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
.list {
  width: 60%;
}
.fontz {
  font-size: 15px;
  margin-top: 5px;
}
.tuwen {
  display: flex;
  flex-direction: column;
}
.ce {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.banquan {
  width: 100%;
  height: 400px;
  border: 1px solid rgba(224, 213, 213, 0.63);
  margin-top: 10px;
  margin-left: -200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
</style>