<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <el-container class="body">
    <!-- aside布局 -->
    <el-aside width="15rem" class="aside">
      <el-menu active-text-color="rgb(51,102,255)" background-color="rgb(34,43,69)" text-color="#FFFFFF" router
        class="menu" default-active="/airline/ticket">
        <el-menu-item class="aside-item" index="/airline/ticket">
          <el-icon>
            <i-ep-Money class="icon" />
          </el-icon>
          <span class="menu-text">机票列表</span>
          <el-icon><i-ep-ArrowRight /></el-icon>
        </el-menu-item>
        <el-menu-item class="aside-item" index="/airline/flight">
          <el-icon><i-ep-Tickets /></el-icon>
          <span class="menu-text">航班列表</span>
          <el-icon><i-ep-ArrowRight /></el-icon>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- main布局 -->
    <el-main class="main">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.body {
  height: 100%;
  width: 100%;

  .aside {
    height: 100%;

    .menu {
      height: 100%;
      border: none;
      padding-top: 8%;

      .aside-item {
        .icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .menu-text {
          font-size: 1.2rem;
          margin-left: 3%;
          margin-right: 36%;
          font-family: system-ui;
        }
      }

      .aside-item:not(:last-child) {
        border-bottom: 0.1rem solid rgb(228, 60, 178);
      }
    }

  }

  .main {
    background-color: rgb(21, 26, 48);
    padding: 2.5%;
  }
}
</style>