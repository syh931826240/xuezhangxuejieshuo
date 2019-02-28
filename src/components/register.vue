<template>
  <div class="main">
    <div class="header">
      <a href="/">
        <img src="../../static/say.png" style="height:80px;width:80px">
      </a>
      <h1>用户注册</h1>
    </div>
    <form id="register_form" method="post" action="/register">
      <div class="form-group">
        <label for="email">邮箱</label>

        <el-input v-model="email" id="email" name="email" placeholder="Email" autofocus></el-input>
      </div>
      <div class="form-group">
        <label for="nickname">昵称</label>

        <el-input id="nickname" name="nickname" placeholder="Nickname" v-model="username"></el-input>
      </div>
      <div class="form-group">
        <label for="password">密码</label>

        <el-input id="password" name="password" placeholder="Password" v-model="password"></el-input>
      </div>
    </form>
    <Span @click="register_request()">
      <el-button type="warning">注册</el-button>
    </Span>

    <div class="message">
      <p>已有账号?
        <router-link to="/login">点击登录</router-link>.
      </p>
      <p>返回首页?
        <router-link to="/">首页</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    login_request() {
      this.axios
        .post("/login/", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          //里面有用户信息
          this.login_status = response.data;
          if (login_status.code == 1) {
            this.$store.commit("getuser", login_status);
            //将服务器返回的数据保存在localstorage中,哪里要使用就取下
            localStorage.userinfo = JSON.stringify(this.login_status);
            this.$router.push({ name: "sy" }); //登陆完跳转到主页
          } else {
            this.open7();
          }
        });
    },
    open7() {
      this.$alert("登陆失败", "错误", {
        confirmButtonText: "确定"
      });
    },
    open1() {
       this.$alert("注册成功", "提示", {
        confirmButtonText: "确定"
      });
    },
    open2() {
       this.$alert("注册失败,该用户已存在", "提示", {
        confirmButtonText: "确定"
      });
    },
    register_request() {
      console.log(this.username);
      this.axios
        .post("/signup/", {
          username: this.username, //用户名
          password: this.password, //密码
          email: this.email //邮箱
        })
        .then(res => {
          //   console.log()
          if (res.data.code == "1") {
            this.open1();
            this.login_request(); //注册后直接登陆，得到用户信息。
          } else {
            this.open2();
          }
        });
    },
  }
};
</script>

<style lang="" scoped>
</style>