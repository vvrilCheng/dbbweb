<template>
	<el-table :data="tableData3"  ref="multipleTable">
		<el-table-column type="selection" width="55" ></el-table-column>
		<el-table-column type="index" label="序号" width="60"></el-table-column>
		<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></el-table-column>
		<el-table-column prop="date" label="日期"></el-table-column>
		<el-table-column prop="name" label="姓名"></el-table-column>
		<el-table-column prop="address" label="地址"></el-table-column>
	</el-table>
</template>
<script>
export default {   
	data() {
		return {
	        tableData3: [{
	        	id:'1',
				date: '2016-05-03',
				name: '嘎哈和',
				address: '上海市普陀区金沙江路 1518 弄',
				sex:'1'
	        }, {
	        	id:'2',
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
				sex:'0'
	        }, {
	        	id:'3',
				date: '2016-05-02',
				name: '莫默模',
				address: '上海市普陀区金沙江路 1518 弄',
				sex:'-1'
	        }],
	        arrID:[],
 
	    }
	},
	methods: {
		
    },
    mounted() {  
        for(var i=0;i<this.tableData3.length;i++){
             this.$refs.multipleTable.toggleRowSelection(this.tableData3[i],true);//默认选中
        }

       
    }
}
</script>
<style>
