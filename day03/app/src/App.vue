<template>
	<div >
        <!-- 3：直接在HTML中使用 -->
        <mybutton></mybutton>
        <mybutton2></mybutton2>
	</div>
</template>

<script>
// 使用子组件分三步：
// 1：引入子组件
// 2：注册子组件
// 3：直接在HTML中使用

// 1：引入子组件
import  mybutton from  './components/mybutton'
import  mybutton2 from  './components/mybutton2'


export default {
	// 在.vue文件中 data必须是一个函数,还必须返回一个对象
	data() {
		return {}
	},
    components: {
        // 2：注册子组件
        // mybutton: mybutton,
        mybutton,
        mybutton2,
    }
}
</script>

<style lang="scss" scoped>
// scoped 作用： 把css的作用域限制在当前组件，不会影响到别的组件

</style>
