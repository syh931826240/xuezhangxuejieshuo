<template>
  <div v-bind:class="[panduan ? container2: container1 ]">
    <el-row class="cctv2">
      <el-col :span="10" v-for="(o) in 1" :key="o">
        <el-card :body-style="{ padding: '0px' }" class="zdycard">
          <img src="../../static/zz.jpg" class="image">
          <div style="padding: 10px;">
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import pll from "./pll.vue";
export default {
  mounted() {
    this.panduan1();
  },
  props: ["index"],
  data() {
    return {
      currentDate: new Date(),
      panduan: true,
      container1: "container1",
      container2: "container2"
    };
  },
  components: { pll },
  methods: {
    panduan1() {
      console.log(this.index);
      if (this.index > 4) {
        this.panduan = false;
      }
    }
  }
};
</script>
<style scope>
.container1 {
  margin-top: 80px;
  margin-right: 20px;
}
.container2 {
  margin-top: 0px;
  margin-right: 20px;
}
.cctv1 {
  right: 145px;
  margin: 5px;
}
.cctv2 {
  margin: 5px;
}

.zdycard {
  width: 208px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 10px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 208px;
  height: 208px;
  display: block;
}
</style>

