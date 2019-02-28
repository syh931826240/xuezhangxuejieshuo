<template>
  <div id="container">
    <pbh></pbh>
    <bloglist></bloglist>
  </div>
</template>

<script>
import pbh from "./public_header.vue";
import bloglist from "./bloglist";
export default {
  components: {
    pbh,
    bloglist
  }
};
</script>

<style>
#container {
  background-color: rgb(252, 245, 238);
}
</style>
