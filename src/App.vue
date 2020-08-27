<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    min-width: 1110px;
    margin: 0 auto;
    color: #000a17;
    font-size: 14px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  a{
    color: #000a17;
    text-decoration: none;
  }
  .el-table thead{
    color: #000a17!important;
    font-size: 16px;
  }
  .el-table{
    color: #000a17!important;
    font-weight: 600;
  }
  .pd30{
    padding: 30px 5px;
  }
  .pt20{
    padding-top: 20px;
  }
  .mr30{
    margin-right: 30px!important;
  }
  .center{
    text-align: center;
  }
  .display-block{
    display: inline-block;
  }
  .pb80{
    padding-bottom:80px;
  }
  .info-cont .el-input .el-input-group__prepend{
    width: 115px;
    padding: 0 15px;
    color: #000a17;
  }
  .el-input__inner{
    color: #000!important;
  }
  .el-input.is-disabled .el-input__inner{
    background: #fff!important;
    color: #888!important;
  }
  .fgx{
    height: 20px;
    width: 100%;
    background: url(assets/images/fgx.png) repeat-x;
  }
  .addClass  .el-menu--horizontal>.el-menu-item:nth-child(3){
    color: #409EFF!important;
    border-bottom: 4px solid #409EFF!important;
    background-color: #fff!important;
  }
</style>
