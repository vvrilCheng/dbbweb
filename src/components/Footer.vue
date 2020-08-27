<template>
  <div class="">
    <div class="footer">
    <p>主办：蚌埠市人力资源和社会保障局<span>皖ICP备05003263号</span>技术支持：安徽易联众信息技术有限公司</p>
    <p>蚌埠市人力资源和社会保障局<span>电话:0566-12333</span><span>单位社保业务咨询: 2033145</span><span>个人办事咨询 :2031609</span>技术支持 :2022395</p>
    </div>
    

  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        user: {
          username: '请先登录'
         /* avatar: './assets/logo.png'*/
        },
        hasLogin: false
      }
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

<style scoped>

.footer{
  background: #f1f2f3;
  color: #73757a;
  line-height: 30px;
  padding: 30px 0;
  text-align: center;
}
.footer span{
  margin:0 16px;
}

</style>