<template>
<div>
    <div class="w-contaner addClass">
        <Header></Header>
    </div>
    <div class="fgx"></div>
    <div class="w-contaner">
        <div class="pd30 pt20">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>打包办</el-breadcrumb-item>
        <el-breadcrumb-item>失业</el-breadcrumb-item>
        </el-breadcrumb>
        </div>

        <div class="cont-box">
            <el-steps :active="2" align-center>
            <el-step title="选择联办业务" description=""></el-step>
            <el-step title="填写相关信息" description=""></el-step>
            <el-step title="提交并进行评价" description=""></el-step>
            </el-steps>
            <div class="pd30">
                <div class="finish-cont center">
                    <div>
                    <div class="display-block"><img src="../assets/images/tjIcon.png"></div>
                    <div class="display-block ywtj">您的业务已提交</div>
                    </div>
                    <div class="yw-tips">
                        亲爱的市民用户，感谢您使用蚌埠市人力资源和社会保障局，请对我们的服务进行评价！
                    </div>
                </div>
            </div>
            <div class="center pd30 pb80">
                <el-button type="primary">查看进度</el-button>
            </div>


        </div>


    </div>

    <Footer></Footer>
</div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    export default {
        name: "Package",
        components: {Header,Footer},
        data(){
        return {
            

        }
        },
        mounted() {
        
        },
        methods:{
           
        }
    }
</script>

<style scoped>
    .w-contaner {
        max-width: 1110px;
        margin: 0 auto;
    }
    h3{
        border-bottom:3px solid #00101d;
        font-size: 24px;
        padding: 20px 0 15px 5px;
    }
    .list-box{
        padding: 20px 0;
    }
    .list-box li{
        width: 23%;
        display: inline-block;
        margin-right:2.6% ;
        margin-bottom: 30px;
        box-shadow: 0px 3px 3px #f5f5f5;
        padding-bottom: 20px;
    }
     .list-box li:nth-child(4n){
         margin-right: 0;
     }
    .list-box li img{
        width: 100%;
    }
    .list-box li h4{
        text-align: center;
        padding: 16px 0;
    }
    .list-box li p{
        padding: 0 10px;
        color: #73757a;
    }
    .finish-cont{
        width: 590px;
        margin: 0 auto;
        padding: 60px 0 10px 0;
    }
    .finish-cont img{
        vertical-align: middle;
    }
    .ywtj{
        color: #4293f4;
        font-size: 24px;
        line-height: 52px;
        padding-left: 30px;
    }
    .yw-tips{
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #e8e8e8;
    }
</style>