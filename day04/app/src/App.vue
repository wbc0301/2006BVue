<template>
	<div id="app">
		<div class="top">
			<span>ToDoList</span>
			<input type="text" v-model="str" @keyup.enter="add" />
		</div>

		<!-- 正在进行 -->
		<div class="doing">
			<h2>正在进行 {{doingList.length}}</h2>
			<ul>
				<li v-for="item in doingList" :key="item.id">
					<input type="checkbox" @change="change(item.id, true)" />

					<span v-if="!item.edit" @dblclick="edit(item.id)">{{item.str}}</span>
					<input v-else type="text" v-model="item.str" @blur="blur" />

					<button @click="del(item.id)">删除</button>
				</li>
			</ul>
		</div>

		<!-- 已经完成 -->
		<div class="done">
			<h2>已经完成 {{doneList.length}}</h2>
			<ul>
				<li v-for="item in doneList" :key="item.id">
					<input type="checkbox" @change="change(item.id, false)" checked />

					<span v-if="!item.edit" @dblclick="edit(item.id)">{{item.str}}</span>
					<input v-else type="text" v-model="item.str" @blur="blur" />

					<button @click="del(item.id)">删除</button>
				</li>
			</ul>
		</div>
		<button @click="clear">clear</button>
	</div>
</template>

<script>
export default {
	name: 'App', // 当前组件的名字
	data() {
		return {
			str: '', // 用户输入的值
			// editStr: '', // 用户修改的值
			list: [],
			// doingList: [], // 改用计算属性
			// doneList: [],
		}
	},
	// 计算属性 是一个一个的函数 函数名可以当数据来使用  函数名就是key  函数return的值就是value 
	// 他会根据他依赖的数据进行计算， 当他依赖的任何一个数据发生改变的时候就会重新计算
	computed: {
		doingList() {
			console.log(123)
			let arr = this.list.filter(item => {
				// return item.done === false
				return !item.done
			})
			return arr
		},
		doneList() {
			return this.list.filter(item => {
				// return item.done === false
				return item.done
			})
		},
	},
	methods: {
		add() { // 添加
			this.list.push({
				id: Math.random(),
				str: this.str,
				done: false,
				edit: false,
			})
			this.str = '';
		},
		del(id) { // 删除
			// es6
			let index = this.list.findIndex(item => {
				return item.id === id;
			})
			console.log(index)
			this.list.splice(index, 1)
		},
		change(id, val) { // 点击复选框
			this.list.forEach(item => {
				if (item.id === id) {
					item.done = val
				}
			});
		},
		clear() {
			this.list = [];
		},
		edit(id) { //编辑
			this.list.forEach(item => {
				if (item.id === id) {
					item.edit = true;
					// this.editStr = item.str;
				} else {
					item.edit = false;
				}
			})
		},
		blur() {
			this.list.forEach(item => {
				item.edit = false;
			})
		}
	},
}
</script>

<style lang="scss">
#app {
	width: 300px;
	margin: auto;
}
</style>
