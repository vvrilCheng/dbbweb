<template>
<div>
    <div class="w-contaner">
        <Header></Header>
    </div>
    <div class="banner-cont">
    </div>
    <div class="w-contaner">
        <h3>“打包一件事”清单</h3>
        <div class="list-box">
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    <router-link :to="{name: 'PackList', params: {listId: item.id,packname:item.name}}">
                    <div><img :src="item.avatar"></div>
                    <h4>{{item.name}}</h4>
                    <p>{{item.description}}</p>
                    </router-link>
                </li>
            </ul>

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
            list:[]

        }
        },
        mounted() {
        var that = this;
        this.$axios.get(that.uniurl+'/packages').then(
            res=>{
                this.list = res.data.data;
                console.log(this.list)
            }
        );
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
    .banner-cont{
        height: 270px;
        width: 100%;
        background: url(../assets/images/banner.png) no-repeat center center;
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
        color: #000a17;
    }
    .list-box li p{
        padding: 0 10px;
        color: #73757a;
    }
</style>