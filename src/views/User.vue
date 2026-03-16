<template>
  <div class="user-page">
    <header class="top-nav">
      <div class="logo" @click="goToHome">抖音</div>
      <button class="back-btn" @click="goBack">← 返回</button>
    </header>
    <div class="user-content">
      <div class="user-profile">
        <div class="user-avatar">👤</div>
        <h2>我的抖音账号</h2>
        <div class="user-stats">
          <span>关注 128</span>
          <span>粉丝 5680</span>
          <span>获赞 12580</span>
        </div>
      </div>
      <div class="user-videos">
        <h3>我的作品</h3>
        <div class="video-grid">
          <div class="my-video" v-for="i in 4" :key="i">
            <video src="https://www.w3school.com.cn/i/movie.mp4" width="100%" height="200px"></video>
            <p>我的作品{{i}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' // ✅ 正确！
const router = useRouter()
const goToHome = () => router.push('/')
const goBack = () => router.go(-1)
</script>

<style scoped>
.user-page {
  height: 100vh;
  background: #000;
  color: #fff;
}
.top-nav {
  height: 60px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 999;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ff2442;
  cursor: pointer;
}
.back-btn {
  background: #0099ff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.user-content {
  padding: 20px;
}
.user-profile {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
}
.user-avatar {
  font-size: 80px;
  margin-bottom: 10px;
}
.user-profile h2 {
  margin-bottom: 15px;
  font-size: 28px;
}
.user-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 16px;
  color: #999;
}
.user-videos h3 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #ff2442;
}
.video-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.my-video {
  width: 280px;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}
.my-video p {
  padding: 8px 12px;
  color: #fff;
  text-align: center;
}
</style>