<template>
    <div>
        <button @click="handler">我是按钮1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '我是bt1'
            }
        },
        methods: {
            handler() {
                alert('我是按钮1')
            }
        }
    }
</script>

<style lang="scss" scoped>
button {
    line-height: 50px;
    color: red;
    border-color: green;
}
</style>