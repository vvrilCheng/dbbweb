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
        <el-breadcrumb-item>{{packname}}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>

        <div class="cont-box">
            <el-steps :active="0" align-center>
            <el-step title="选择联办业务" description=""></el-step>
            <el-step title="填写相关信息" description=""></el-step>
            <el-step title="提交并进行评价" description=""></el-step>
            </el-steps>
            <div class="pd30">
                <el-table :data="list" :span-method="objectSpanMethod" ref="tableList" border style="width: 100%; margin-top: 20px">
                    <el-table-column type="index" align="center"  width="80">
                    </el-table-column>
                    <el-table-column prop="packname" align="center"  label="类别" width="300">
                    </el-table-column>
                    <el-table-column prop="itemname" label="事项简称">
                    </el-table-column>
                    <el-table-column type="selection"  align="center"  label="选择" width="80">
                    </el-table-column>
                    </el-table>
            </div>
            <div class="center pd30 pb80">
                <router-link :to="{name: 'packDetailParams', params: {listId:listId,newList:newList,packname:packname}}">
                <el-button type="primary" @click="sureBtn">确定</el-button>
                </router-link>
                <!--<router-link :to="{name: 'PackDetail', params: {}}">
                <el-button type="primary">确定</el-button>
                </router-link>-->
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
            listId:'',
            list:[],
            len:"",
            index:"",
            packname:"",
            newList:[]

        }
        },
        mounted() {
       // alert(this.$route.name);
        var id = this.$route.params.listId;
        this.listId = this.$route.params.listId;
        this.packname = this.$route.params.packname;
        var that = this;
        this.$axios.get(that.uniurl+'/package/'+id+'/item').then(
            res=>{
                this.list = res.data.data;
                this.len = this.list.length;
                this.index = this.list.index;
                that.$nextTick(() => {
                    console.log(that.$refs.tableList);
                    if (that.$refs.tableList) {
                        that.$refs.tableList.clearSelection();
                    }
                    that.list.forEach(row => {
                        for (let j in that.list) {
                            if (row.id == that.list[j].id) {
                                that.$refs.tableList.toggleRowSelection(row,true);
                            }
                        }
                    });
                });
            }
        );
        },
        methods:{
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 1) {
                    if (rowIndex === 0) {
                        return {
                        rowspan: this.len,
                        colspan: 1
                        };
                    } else {
                        return {
                        rowspan: 0,
                        colspan: 0
                        };
                    }
                    }
                },
            sureBtn(){
                this.newList = this.$refs.tableList.selection;
                console.log(this.$refs.tableList.selection);
            }
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
</style>