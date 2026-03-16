<template>
  <div class="douyin-layout">
    <header class="top-nav">
      <div class="logo" @click="goToHome">抖音网页版</div>
      <div class="search-bar">🔍 搜索感兴趣的内容</div>
      <button class="live-btn" @click="goToLive">🎥 直播</button>
      <div class="user-actions">
        <button>上传</button>
        <span class="avatar" @click="goToUser">👤</span>
      </div>
    </header>

    <div class="main-content">
      <aside class="left-menu">
        <div class="menu-item active" @click="goToHome">🏠 推荐</div>
        <div class="menu-item">👥 朋友</div>
        <div class="menu-item">⭐ 关注</div>
        <div class="menu-item" @click="goToLive">📹 直播</div>
      </aside>

      <main class="video-stream">
        <div class="video-card" v-for="i in 6" :key="i">
          <video src="https://www.w3school.com.cn/i/movie.mp4" controls width="100%" height="180px"></video>
          <div class="video-desc">
            <h3>这是一个超好看的抖音视频标题</h3>
            <p>@用户名 · 点赞 12.3w · 评论 2.1k</p>
          </div>
        </div>
      </main>

      <aside class="right-sidebar">
        <div class="profile" @click="goToUser">
          <span class="avatar">👤</span>
          <span class="username">我的账号</span>
        </div>
        <div class="recommend">
          <h4>推荐关注</h4>
          <div class="user-item" v-for="i in 3" :key="i">
            <span>用户 {{i}}</span>
            <button>+ 关注</button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' // ✅ 正确！
const router = useRouter()

const goToHome = () => router.push('/')
const goToLive = () => router.push('/live')
const goToUser = () => router.push('/user')
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", sans-serif;
}
.douyin-layout {
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.top-nav {
  height: 60px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  border-bottom: 1px solid #333;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
}
.logo {
  font-size: 22px;
  font-weight: bold;
  color: #ff2442;
}
.search-bar {
  background: #222;
  padding: 8px 20px;
  border-radius: 20px;
  color: #999;
  min-width: 300px;
  cursor: text;
}
.live-btn {
  background: #ff2442;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}
.live-btn:hover {
  background: #ff4757;
  transform: scale(1.05);
}
.user-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}
.user-actions button {
  background: #0099ff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}
.user-actions button:hover {
  background: #0088ee;
}
.avatar {
  font-size: 24px;
  cursor: pointer;
}
.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.left-menu {
  width: 80px;
  background: #111;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.menu-item {
  padding: 15px 0;
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s;
}
.menu-item.active {
  opacity: 1;
  border-left: 3px solid #ff2442;
  color: #ff2442;
}
.menu-item:hover {
  opacity: 1;
}
.video-stream {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  overflow-y: auto;
  background: #0a0a0a;
}
.video-card {
  width: 280px;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}
.video-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(255, 36, 66, 0.2);
}
.video-desc {
  padding: 12px;
}
.video-desc h3 {
  font-size: 16px;
  margin-bottom: 8px;
}
.video-desc p {
  color: #999;
  font-size: 14px;
}
.right-sidebar {
  width: 220px;
  background: #111;
  padding: 20px;
  border-left: 1px solid #333;
}
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  cursor: pointer;
}
.recommend h4 {
  margin-bottom: 15px;
  color: #fff;
}
.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #222;
}
.user-item button {
  background: #0099ff;
  color: #fff;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
}
.user-item button:hover {
  background: #0088ee;
}
@media (max-width: 1000px) {
  .right-sidebar {
    display: none;
  }
  .search-bar {
    min-width: 200px;
  }
}
@media (max-width: 768px) {
  .left-menu {
    width: 60px;
  }
  .logo {
    font-size: 18px;
  }
  .live-btn {
    padding: 6px 12px;
  }
}
</style>