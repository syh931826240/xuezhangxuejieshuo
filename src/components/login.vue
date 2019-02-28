<template>
  <div class="main">
    <div class="header">
      <a href="/">
        <img src="../../static/say.png" style="height:80px;width:80px">
      </a>
      <h1>用户登录</h1>
    </div>
    <form id="login_form" method="post">
      <div class="yx">
        <label style>邮箱</label>
        <el-input v-model="username" placeholder="Username" name="username" autofocus></el-input>
      </div>
      <div class="mm">
        <div class="wjmm">
          <label for>密码</label>
          <a class="pull-right" href>忘记密码？</a>
        </div>
        <el-input v-model="password" placeholder="Password" name="password"></el-input>
      </div>
      <div style="margin-top: 20px" @click="jzw">
        <el-radio v-model="radio8" label="1" border size="medium">记住我</el-radio>
      </div>
    </form>
    <Span @click="login_request()">
      <el-button type="primary">登录</el-button>
    </Span>
    <div class="message">
      <p>没有账号?
        <router-link to="/register">点击创建</router-link>
      </p>
      <p>返回首页?
        <router-link to="/">首页</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_status: {},
      username: "",
      password: "",
      userinfo: {},
      radio8: "0"
    };
  },
  computed: {
    user_info() {
      return this.$store.state.user_info; //监听本地仓库的变化而动态获取值
    }
  },
  methods: {
    /* login_request() {
      //  console.log(this.username);
      //  console.log(this.password);
      this.$http
        .post(
          "/login/",
          { username: this.username, password: this.password },
          { emulateJSON: true }
        )
        .then(data => {
          this.login_status = data.body;
          /*  if(login_status.status==0){   
          let userinfo=  login_status.body;
          this.$store.dispatch("record_user",useinfo)
         // this.$router.replace("/")
        } 
        else{
        }    
          //在这里登陆就会获取用户信息,这里由于系统会默认将你用于赋值的对象转换成字符串，所以需要用json.stringify（）来将对象转换成json字符串
          sessionStorage.userinfo = JSON.stringify(this.login_status); //将服务器返回的数据保存在session中
          console.log(sessionStorage.userinfo);
          this.$store.commit("user_info", {
            userinfo1: sessionStorage.userinfo
          }); //提交session的数据到本地仓库

          this.$router.push({ name: "home" }); //登陆完跳转到主页
        }),
        err => {
          console.log("请求失败");
        };
    }*/
    jzw() {
      this.radio8 = !this.radio8;
    },

    open7() {
      this.$alert("登陆失败", "错误", {
        confirmButtonText: "确定"
      });
    },
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
            localStorage.userinfo = JSON.stringify(login_status);
            this.$router.push({ name: "sy" }); //登陆完跳转到主页
          } else {
            this.open7();
          }
        });
    }
  },
  watch: {
    user_info: function(nw) {
      this.$store.commit("user_info", {
        userinfo1: sessionStorage.userinfo
      }); //提交session的数据到本地仓库
    }
  }
};
</script>
<style>
.yx {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
body {
  background-color: #f9f9f9;
}

.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
  margin-top: 50px;
  color: #333;
}

.main .header {
  text-align: center;
}

.main .header h1 {
  font-size: 26px;
}

.main form {
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;
}

.main .message {
  padding: 10px;
  padding-bottom: 0;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
