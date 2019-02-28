<template>
  <div class="container">
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
        <router-link :to="'/details/'+this.detid2+'/cs/'+this.id1">
          <i class="el-icon-document"></i>
          <span>{{plcount}}评论</span>
        </router-link>
      </div>
      <span @click="open4">
        <el-tooltip class="item" effect="dark" content="点击复制链接" placement="bottom-start">
          <div class="pl">
            <i class="el-icon-share"></i>
            <Span>分享</Span>
          </div>
        </el-tooltip>
      </span>
      <span @click="open3">
        <div class="pl1" @click="pl2" v-bind:class="[ispl ? plactive1 : pl1]">
          <i class="el-icon-star-on"></i>
          <span>收藏</span>
        </div>
      </span>
      <div class="pl" @click="dialogFormVisible = true">
        <i class="el-icon-warning"></i>
        <span>投诉</span>
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
      <el-dropdown>
        <el-button type="primary" style="height:35px;width:120px;margin:5px">
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>没有帮助</el-dropdown-item>
          <el-dropdown-item>举报</el-dropdown-item>
          <el-dropdown-item>水货</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props:["id","detid1"],
  data() {
    return {
      detid2:this.detid1,
      id1:this.id,
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

  methods: {
    open3() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 收藏成功</strong>"
      });
    },
    open4() {
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: "<strong> 链接复制成功</strong>"
      });
    },
    zan1(e) {
      if (!this.iszan) {
        this.iszan = !this.iszan;
        this.zanconnt++;
        this.iscai = false;
      } else {
        this.iszan = !this.iszan;
        this.zanconnt--;
      }
    },
    cai1() {
      this.iscai = !this.iscai;
      if (this.iscai == true) {
        this.iszan = false;
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
.pjl {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
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