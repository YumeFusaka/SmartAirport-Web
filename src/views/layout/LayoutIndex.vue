<script lang="ts" setup>
import { useRouter } from "vue-router";
import avatarURL from '@/img/avatar.png'
import userAvatar from '@/img/userAvatar.png'
import { SwitchButton } from '@element-plus/icons-vue'
import { useUserStore } from "@/stores";
const userStore = useUserStore();
const router = useRouter();
const quit = () => {
  userStore.clear();
  router.push('/login');
};

</script>

<template>
  <el-container class="all">
    <!-- header布局 -->
    <el-header class="header" height="4.8rem">
      <el-avatar :src="avatarURL" fit="fill" />
      <span class="title">
        智能机场管理系统
      </span>
      <el-avatar :src="userAvatar" fit="fill" class="user_Avatar" />
      <span class="profile">
        梦浮羽
      </span>
      <el-button class="quit" type="primary" circle color="#ca41ca" :icon="SwitchButton" @click="quit()" />
    </el-header>
    <el-main class="main">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.all {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    background-color: rgb(34, 43, 69);
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.3) !important;
    z-index: 1;

    .title {
      color: #ffffff;
      font-size: 1.4rem;
      font-family: system-ui;
      align-self: center;
      margin-left: 1rem;
    }

    .user_Avatar {
      position: absolute;
      right: 9.3%;
    }

    .profile {
      color: #ffffff;
      font-size: 1.1rem;
      position: absolute;
      right: 5.5%;
    }

    .quit {

      width: 40px;
      height: 40px;
      font-size: 1.4rem;
      position: absolute;
      right: 2%;
    }

  }

  .main {
    padding: 0;
  }
}
</style>
