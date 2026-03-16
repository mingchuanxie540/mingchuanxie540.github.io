<!-- src/views/Home.vue -->
<template>
  <div style="background: #000; color: #fff; padding: 20px;">
    <h1>✅ 抖音首页（测试版）</h1>
    <button @click="goToLive">去直播页</button>
    <button @click="goToUser">去个人中心</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' // ✅ 正确！
const router = useRouter()
const goToLive = () => router.push('/live')
const goToUser = () => router.push('/user')
</script>