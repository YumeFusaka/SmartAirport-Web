// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref()
    const setToken = (val: string) => {
      token.value = val
    }
    const clearToken = () => {
      token.value = undefined
    }
    const identity = ref<string>("1");
    const setIdentity = (val: string) => {
      identity.value = val;
    }
    const clearIdentity = () => {
      identity.value = "";
    }
    const name = ref<string>("");
    const setName = (val: string) => {
      name.value = val;
    }
    const clearName = () => {
      name.value = "";
    }
    return {
      token,
      setToken,
      clearToken,
      identity,
      setIdentity,
      clearIdentity,
      name,
      setName,
      clearName
    }
  },
  {
    persist: true
  },
)