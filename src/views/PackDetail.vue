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
            <el-steps :active="1" align-center>
            <el-step title="选择联办业务" description=""></el-step>
            <el-step title="填写相关信息" description=""></el-step>
            <el-step title="提交并进行评价" description=""></el-step>
            </el-steps>
            <div class="pd30">
                <!-- 基础信息 -->
                <h3><img src="../assets/images/info1.png">基础信息</h3>
                <div class="info-cont">
                    <div class="item-list">
                        <div>
                            <el-input placeholder="张**" v-model="input1">
                                <template slot="prepend">姓名</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="安徽省合肥市蜀山区黄山路***小区**栋" v-model="input2">
                                <template slot="prepend">联系地址</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="341076589432967953" v-model="input3">
                                <template slot="prepend">身份证号</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="张**" v-model="input4">
                                <template slot="prepend">代理人姓名</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="18335893892" v-model="input5">
                                <template slot="prepend">联系电话</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="341036793267842849" v-model="input6">
                                <template slot="prepend">代理人身份证号</template>
                            </el-input>
                        </div>
                    </div>
                </div>
                <!-- 失业登记信息填写 -->
                <h3><img src="../assets/images/info2.png">失业登记信息填写</h3>
                <div class="info-cont">
                    <div class="item-list">
                        <div>
                            <el-input placeholder="8654290543" v-model="input7">
                                <template slot="prepend">原单位编号</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="2018-05-21" suffix-icon="el-icon-date" v-model="input8">
                                <template slot="prepend">参加工作日期</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="安徽易联众信息技术有限公司" v-model="input9">
                                <template slot="prepend">原单位名称</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="有" v-model="input10">
                                <template slot="prepend">有无求职要求</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="个人原因" v-model="input11">
                                <template slot="prepend">失业原因</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="6793267842849" v-model="input12">
                                <template slot="prepend">失业证号</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="身份证扫描件" v-model="input13">
                                <template slot="prepend">失业登记电子材料</template>
                                <el-select slot="append" v-model="select" placeholder="请选择">
                                    <el-option label="身份证扫描件" value="1"></el-option>
                                </el-select>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-button type="primary">点击上传</el-button>
                        </div>
                    </div>
                </div>
                <!-- 失业金申领信息填写 -->
                <h3><img src="../assets/images/info3.png">失业金申领信息填写</h3>
                <div class="info-cont">
                    <div class="item-list">
                        <div>
                            <el-input placeholder="2020-03-28" v-model="input14">
                                <template slot="prepend">失业日期</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="4月" v-model="input15">
                                <template slot="prepend">本次缴费月数</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="中国银行" v-model="input16">
                                <template slot="prepend">开户行</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="张**" v-model="input17">
                                <template slot="prepend">银行户名</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="item-list">
                        <div>
                            <el-input placeholder="银行卡" v-model="input18">
                                <template slot="prepend">待遇发放方式</template>
                                <el-select slot="append" v-model="select" placeholder="请选择">
                                    <el-option label="银行卡" value="1"></el-option>
                                </el-select>
                            </el-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center pd30 pb80">
                <router-link :to="{name: 'PackFinish', params: {}}">
                <el-button type="primary">确定</el-button>
                </router-link>
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
            input1: '张**',
            input2: '安徽省合肥市蜀山区黄山路***小区**栋',
            input3: '341076589432967953',
            input4: '张**',
            input5: '18335893892',
            input6: '341036793267842849',
            input7: '8654290543',
            input8: '2018-05-21',
            input9: '安徽易联众信息技术有限公司',
            input10: '有',
            input11: '个人原因',
            input12: '6793267842849',
            input13: '身份证扫描件',
            input14: '2020-03-28',
            input15: '4月',
            input16: '中国银行',
            input17: '张**',
            input18: '银行卡'

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
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        padding: 30px 0 20px 0;
    }
    h3 img{
        vertical-align: middle;
        margin-right: 15px;
    }
    .info-cont{
        padding: 30px 30px 15px 30px;
        border: 1px solid #e8e8e8;
    }
    .item-list{
        display: inline-block;
        width: 49%;
        margin-bottom: 15px;
        margin-right:2%;
    }
    .item-list:nth-child(2n){
        margin-right: 0;
    }
</style>