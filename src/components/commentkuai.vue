<template>
  <div class="container">
    <div class="zuozhe">
      <img src="../../static/1.jpg" class="plimg">
      <span class="names">dmz</span>
    </div>
    <div>
      <span class="content">第一条简直醍醐灌顶直冲天灵盖，我已经拿着小本本记好了，续命的那一段话我也记下来了。</span>
    </div>
   <huisepll class="huisepll"></huisepll>
  </div>
</template>

<script>
import huisepll from "./huisepll.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { huisepll }
};
</script>

<style lang="" scoped>
.huisepll{
 margin: 1px 70px;

}
.container {
  display: flex;
  flex-direction: column;

}
.plimg {
  width: 40px;
  height: 40px;
  margin: 5px;
}
.zuozhe {
  display: flex;
  justify-content: flex-start;
}
.names {
  margin-top: 15px;
}
.content {
  margin: 1px 45px;
  text-align: left
}
</style>