<template>
  <div class="container1">
    <!--可有可无的图片-->
    <div class="im1">
      <img class="tjimg" src="../../static/gay.jpg">
      <div class="tjtitle">
      <router-link to >
        <span >恼羞成怒的SB0</span>
      </router-link>
      </div>
    </div>
    <!--title-->
    <div class="tj1">
      <!--多少关注，多少赞同-->
      <div class="ztcont">
        <span>关注&nbsp;&nbsp;{{zancount}}</span>
        <Span>赞同&nbsp;&nbsp;{{sccount}}</Span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zancount: 999,
      sccount: 77777
    };
  }
};
</script>

<style lang="" scoped>
.container1 {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 120px;
  margin-left: 5px;
  margin-top: 10px;
  
}
.tjimg {
  margin-top: 10px;
  height: 50px;
  width: 80%;
  border-radius: 10px;
  margin-left: 70px
}
.tj1 {
  width: 60%;
}
.im1 {
  width: 40%;
  border-radius: 5px;
}
.ztcont {
  width: 220px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 100;
}
.tjtitle {
  font-size: 15px;
  width: 220px;
}
</style>