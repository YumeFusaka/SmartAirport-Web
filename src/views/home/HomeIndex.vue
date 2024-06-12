<script lang="ts" setup>
import { useRouter } from "vue-router";

const loginIn = () => {
  console.log("loginIn");
};

const loginOut = () => {
  console.log("loginOut");
};

</script>

<template>

  <el-container style="position: relative; top: 0; left: 0; width: 100%; height: 100%">
    <!-- header布局 -->
    <el-header class="header" style="background-color: #181f2e" height="5rem">
      <div class=" text-3xl italic font-black antialiased font-sans pt-5 pl-3">
        智能机场管理系统
      </div>

      <div class="header-user">
        <div class="text">身份: </div>
        <div class="text">用户名: </div>
        <div>
          <el-button type="primary" @click="loginIn">登录</el-button>
          <el-button type="danger" @click="loginOut">注销</el-button>
        </div>
      </div>
    </el-header>

    <el-container>
      <!-- aside布局 -->
      <el-aside width="12.5rem" class="aside">
        <el-menu active-text-color="#ffd04b" background-color="#0C1220" text-color="#fff" router
          style="height: 100%; padding-top: 0.625rem">
          <el-menu-item class="aside-item" index="/info_view" v-if="false">
            <span>信息总览</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <!-- main布局 -->
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: minmax(15rem, auto) 1fr auto;
  grid-template-rows: 1fr;

  .header-user {
    grid-area: 1 / 3 / span 1 / span 1;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    column-gap: 1rem;

    .text {
      color: white;
    }

    div:nth-child(-n + 2) {
      padding-right: 1rem;
      border-right: 0.0625rem solid hsl(0, 0%, 45%);
    }
  }
}

.aside {
  height: 100%;

  .aside-item {
    height: 3.75rem;
    display: grid;
    grid-template: 1fr, 1fr;

    span {
      align-items: center;
      justify-items: center;
      text-align: center;
      font-size: large;
    }
  }

  .aside-item:not(:last-child) {
    span {
      border-bottom: 0.0625rem solid hsl(0, 0%, 45%);
    }
  }
}
</style>
