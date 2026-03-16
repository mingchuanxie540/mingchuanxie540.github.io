<template>
  <!-- 路由出口：所有页面都在这里切换显示 -->
  <router-view />
</template>

<script setup>
// 这里不需要写任何代码
</script>

<style>
/* 全局样式，保证页面铺满屏幕 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  color: #fff;
  font-family: "Microsoft YaHei", sans-serif;
}
</style>