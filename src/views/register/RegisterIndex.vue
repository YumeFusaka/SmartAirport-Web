<script setup lang="ts">
import { ref } from "vue";
import { type FormInstance, type FormRules } from "element-plus";
import { useUserStore } from "@/stores";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import type { UserInfo } from "@/types/user";
import { identity } from "@vueuse/core";
import { userRegisterAPI } from "@/apis/user";
const router = useRouter();
const userStore = useUserStore();
const formData = ref<UserInfo>({
  id: 0,
  username: "",
  password: "",
  email: "",
  name: "",
  phone: "",
  address: "",
  identity: ""
});
const rules = ref<FormRules<any>>({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  address: [{ required: true, message: "请输入地址", trigger: "blur" }],
  identity: [{ required: true, message: "请选择身份", trigger: "blur" }],
});

const formRef = ref<FormInstance | null>(null);

const register = async (formRef: FormInstance | null) => {
  await formRef?.validate();
  const registerData: UserInfo = {
    id: 0,
    username: formData.value.username,
    password: formData.value.password,
    email: formData.value.email,
    name: formData.value.name,
    phone: formData.value.phone,
    address: formData.value.address,
    identity: formData.value.identity
  };
  if (formData.value.identity === '旅客')
    registerData.identity = '1';
  else if (formData.value.identity === '商户')
    registerData.identity = '2';
  else if (formData.value.identity === '航司')
    registerData.identity = '3';
  else if (formData.value.identity === '工作人员')
    registerData.identity = '4';
  const res = await userRegisterAPI(registerData);
  console.log(res);
  ElMessage.success("注册成功");
  router.push('/login');
};


</script>

<template>
  <div class="all">
    <div class="box">
      <div class="title">智能机场管理系统</div>
      <el-form :model="formData" label-width="auto" class="form" :rules="rules" ref="formRef">
        <el-form-item label="账号" prop="username" style="margin-top: 8%;">
          <el-input class="user_input" v-model="formData!.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" style="margin-top: 3%;">
          <el-input class="user_input" v-model="formData!.password" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email" style="margin-top: 3%;">
          <el-input class="user_input" v-model="formData!.email" />
        </el-form-item>
        <el-form-item label="姓名" prop="name" style="margin-top: 3%;">
          <el-input class="user_input" v-model="formData!.name" />
        </el-form-item>
        <el-form-item label="电话" prop="phone" style="margin-top: 3%;">
          <span style="margin-left:10%">(+86)</span>
          <el-input class="user_input" v-model="formData!.phone" style="width:60%;margin-left:3%;" />
        </el-form-item>
        <el-form-item label="地址" prop="address" style="margin-top: 3%;">
          <el-input class="user_input" v-model="formData!.address" />
        </el-form-item>
        <el-form-item label="身份" prop="identity" style="margin-top: 3%;">
          <el-radio-group class="radio-group" v-model="formData!.identity" size="big">
            <el-radio value="旅客">旅客</el-radio>
            <el-radio value="商户">商户</el-radio>
          </el-radio-group>
          <el-radio-group class="radio-group" v-model="formData!.identity" size="big">
            <el-radio value="航司">航司</el-radio>
            <el-radio value="工作人员">工作人员</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="button-box" style="margin-top: 3%;">
          <el-button type="danger" @click="register(formRef)" class="button">
            注册
          </el-button>
          <div class="tip" @click="router.push('/login')"
            style="border-bottom: 1.5px solid rgb(91, 91, 215); cursor: pointer">
            已有账号？点我去登录
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
    height: 50%;
    width: 25%;
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
        color: rgb(91, 91, 215);
        align-self: center;
        justify-self: center;
      }
    }
  }
}
</style>