<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance, type FormRules } from "element-plus";
import { useUserStore } from "@/stores";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import type { UserLoginParams } from "@/types/user";
import { identity } from "@vueuse/core";
import { userLoginAPI } from "@/apis/user";
const userStore = useUserStore();
const router = useRouter();
const formData = ref<UserLoginParams>({
  username: "",
  password: "",
  identity: ""
});
const rules = ref<FormRules<UserLoginParams>>({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  identity: [{ required: true, message: "请选择身份", trigger: "blur" }],
});

const formRef = ref<FormInstance | null>(null);

const login = async (formRef: FormInstance | null) => {
  await formRef?.validate();
  const loginData: UserLoginParams = {
    username: formData.value.username,
    password: formData.value.password,
    identity: formData.value.identity
  };
  if (formData.value.identity === '旅客')
    loginData.identity = '1';
  else if (formData.value.identity === '商户')
    loginData.identity = '2';
  else if (formData.value.identity === '航司')
    loginData.identity = '3';
  else if (formData.value.identity === '工作人员')
    loginData.identity = '4';
  const res = await userLoginAPI(loginData);
  console.log(res);
  userStore.setToken(res.data.token);
  userStore.setName(res.data.name);
  if (formData.value.identity === '旅客') {
    userStore.setIdentity("1");
    router.push('/' + 'passenger');
  }
  else if (formData.value.identity === '商户') {
    userStore.setIdentity("2");
    router.push('/' + 'merchant');
  }
  else if (formData.value.identity === '航司') {
    userStore.setIdentity("3");
    router.push('/' + 'airline');
  }
  else if (formData.value.identity === '工作人员') {
    userStore.setIdentity("4");
    router.push('/' + 'staff');
  }
};

</script>

<template>
  <div class="all">
    <div class="box">
      <div class="title">智能机场管理系统</div>
      <el-form :model="formData" label-width="auto" class="form" :rules="rules" ref="formRef">
        <el-form-item label="账号" prop="username" style="margin-top: 10%;">
          <el-input class="user_input" v-model="formData!.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" style="margin-top: 8%;">
          <el-input class="user_input" v-model="formData!.password" />
        </el-form-item>
        <el-form-item label="身份" prop="identity" style="margin-top: 8%;">
          <el-radio-group class="radio-group" v-model="formData!.identity" size="big">
            <el-radio value="旅客">旅客</el-radio>
            <el-radio value="商户">商户</el-radio>
          </el-radio-group>
          <el-radio-group class="radio-group" v-model="formData!.identity" size="big">
            <el-radio value="航司">航司</el-radio>
            <el-radio value="工作人员">工作人员</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="button-box" style="margin-top: 6%;">
          <el-button type="primary" @click="login(formRef)" class="button">
            登录
          </el-button>
          <div class="tip" @click="router.push('/register')"
            style="border-bottom: 1.5px solid rgb(241, 102, 127); cursor: pointer">
            没有账号？点我去注册
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.all {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/img/plane.png") center no-repeat;
  background-size: cover;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35%;
    width: 20%;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0.98;
    border-radius: 4%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 3% 3%;

    .title {
      font-size: 1.5625rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 1.25rem;
    }

    .user_input {
      width: 80%;
      margin-left: 10%;
    }

    .radio-group {
      margin-left: 15%;
    }


    .button-box {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      row-gap: 0.2rem;

      .button {
        width: 60%;
        font-size: 1rem;
        justify-self: center;
      }

      .tip {
        font-size: 0.9rem;
        color: rgb(241, 102, 127);
        align-self: center;
        justify-self: center;
      }
    }
  }
}
</style>