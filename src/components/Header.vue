<template>
  <div class="m-content">
    <div class="header">
      <div class="logo">
        <a>蚌埠市人力资源和社会保障局</a>
      </div>
      <div class="right-info">
        <!--<span><el-link type="primary" href="/register">注册</el-link></span>
        <el-divider direction="vertical"></el-divider>-->
        <span v-show="!hasLogin"><el-link type="primary" href="/login">{{user.username}}</el-link></span>
        <span v-show="hasLogin">
          <el-link type="primary" href="/personinfo">{{user.username}}</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link type="danger" @click="logout">退出</el-link>
        </span>
      </div>
    </div>

    <div class="maction">
      <el-menu
              :router="true"
              :default-active="$route.name"
              class="el-menu-demo"
              mode="horizontal"
              @select="select"
              background-color="#fff"
              text-color="#000a17"
              active-text-color="#4293f4">
        <el-menu-item :route="{name: 'Home'}" index="Home">
          <template slot="title">
            <Icon type="ios-home"></Icon>
            <span>首页</span>
          </template>
        </el-menu-item>

        <el-menu-item :route="{name: 'Guide'}" index="Guide">
          <template slot="title">
            <span>服务指南</span>
          </template>
        </el-menu-item>

        <el-menu-item :route="{name: 'Package'}" index="Package">
          <template slot="title">
            <span>打包办</span>
          </template>
        </el-menu-item>

        <el-menu-item :route="{name: 'Person'}" index="Person">
          <template slot="title">
            <span>个人办事</span>
          </template>
        </el-menu-item>

        <el-menu-item :route="{name: 'Company'}" index="Company">
          <template slot="title">
            <span>法人办事</span>
          </template>
        </el-menu-item>

        <el-menu-item :route="{name: 'Blogs'}" index="Blogs">
          <template slot="title">
            <span>好差评</span>
          </template>
        </el-menu-item>

      </el-menu>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        user: {
          username: '登录'
         /* avatar: './assets/logo.png'*/
        },
        hasLogin: false
      }
    },
    mounted(){
      
      },
    methods: {
       
      logout() {
        const _this = this
        _this.$axios.get("/logout", {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        }).then(res => {
          _this.$store.commit("REMOVE_INFO")
          // 退出返回主页:/ 或者登录页:/login
          _this.$router.push("/home")
        })
      }
    },
	
    created() {
      if(this.$store.getters.getUser.username) {
        this.user.username = this.$store.getters.getUser.username
        /*this.user.avatar = this.$store.getters.getUser.avatar*/

        this.hasLogin = true
      }
    }
  }
</script>

<style>

  .m-content {
    width: 1110px;
    margin: 0 auto;
    text-align: center;
  }
  .maction {
    text-align: left;
  }
  .header{
    height: 80px;
  }
  .header .logo{
      font-size: 30px;
      float: left;
      line-height: 80px;
    }
  .header .right-info{
    float: right;
    line-height: 30px;
    padding: 25px 10px;
  }
.el-menu.el-menu--horizontal{
    border-bottom:0 none!important;
    font-weight: bold;
  }
.el-menu--horizontal > .el-menu-item{
  line-height: 20px!important;
  height: 36px!important;
  padding: 0!important;
  padding-bottom: 15px!important;
  margin-right: 70px!important; 
  border-bottom-width: 4px!important;
}
</style>