// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string>("")
    const setToken = (val: string) => {
      token.value = val
    }
    const identity = ref<string>("1");
    const setIdentity = (val: string) => {
      identity.value = val;
    }
    const name = ref<string>("");
    const setName = (val: string) => {
      name.value = val;
    }
    const clear = () => {
      token.value = "";
      identity.value = "";
      name.value = "";
    }
    return {
      token,
      setToken,
      identity,
      setIdentity,
      name,
      setName,
      clear
    }
  },
  {
    persist: true
  },
)