<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import type { Page } from '@/types/page';
import type { FormInstance } from 'element-plus';
const page = ref<Page>({
  pageNo: 1,
  pageSize: 8
})

const countNumber = ref<number>(0);

const itemNow = ref<BuyGoodsView>();

const countGoods = async () => {
  const res = await passengerFindBuyGoodsCountAPI();
  console.log(res);
  countNumber.value = res.data;
}

const goodsList = ref<BuyGoodsView[]>();



const pageSearch = async () => {
  const params = {
    pageNo: page.value.pageNo,
    pageSize: page.value.pageSize
  };
  const res = await passengerFindBuyGoodsAPI(params);
  console.log(res);
  goodsList.value = res.data;
}

const refreshSearch = async () => {
  page.value.pageNo = 1;
  page.value.pageSize = 8;
  await countGoods();
  await pageSearch();
}


onMounted(async () => {
  await countGoods();
  await pageSearch();
})

import { ElMessage, ElMessageBox } from 'element-plus'
import { passengerBuyGoodsAPI, passengerFindBuyGoodsAPI, passengerFindBuyGoodsCountAPI } from '@/apis/passenger';
import type { BuyGoodsView, PassengerGoodsBuyParams } from '@/types/passenger';

const open = () => {
  ElMessageBox.confirm(
    '确定要购买此商品吗？',
    'Confirmation',
    {
      confirmButtonText: 'confirm',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(async () => {
      const params = ref<PassengerGoodsBuyParams>({
        goodsIds: []
      });
      params.value.goodsIds.push(itemNow.value!.id);
      const res = await passengerBuyGoodsAPI(params.value);
      console.log(res);
      refreshSearch();
      ElMessage({
        type: 'success',
        message: '购买成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '购买失败',
      })
    })
}

</script>

<template>



  <!-- 页面 -->
  <div class="buy-goods">
    <div class="header">
      <div class="title">商品列表</div>
    </div>
    <div class="body">
      <div class="body-item">
        <div class="box">
          <div>名称</div>
        </div class="box">
        <div class="box">
          <div>描述</div>
        </div>
        <div class="box">
          <div>价格</div>
        </div class="box">
        <div class="box">
          <div>分类</div>
        </div>
        <div class="box">
          <div>数量</div>
        </div>
        <div class="box">
          <div></div>
        </div>
      </div>

      <div class="body-item" v-for="item in goodsList" :key="item.id">
        <div class="box">
          <div>{{ item.name }}</div>
        </div>
        <div class="box">
          <div>{{ item.description }}</div>
        </div>
        <div class="box">
          <div>{{ item.price }}</div>
        </div>
        <div class="box">
          <div>{{ item.category }}</div>
        </div>
        <div class="box">
          <div>{{ item.stock }}</div>
        </div>

        <div class="box"><el-button type="primary" @click="itemNow = item; open()" :disabled="item.stock == 0"
            style="width: 70%;justify-self: center;align-self: center">购买</el-button>
        </div>
      </div>

    </div>
    <el-pagination background layout="prev, pager, next" :total="countNumber" :page-size="page.pageSize"
      v-model:current-page="page.pageNo" @current-change="pageSearch()" class="footer" />
  </div>
</template>


<style scoped>
.buy-goods {
  height: 100%;
  width: 100%;
  background-color: rgb(34, 43, 69);
  border-radius: 1rem;
  color: #FFFFFF;
  font-size: 1.15rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr 2fr;


  .header {
    border-bottom: 0.1rem solid rgb(20, 20, 20);
    display: grid;

    .title {
      justify-self: center;
      align-self: center;
    }
  }

  .body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 3.8rem);
    padding: 2% 2%;

    .body-item {
      display: grid;
      grid-template-columns: repeat(5, 2fr) 1fr;
      justify-items: center;
      align-items: center;

      .box {
        height: 100%;
        width: 100%;
        border: 0.04rem solid rgb(33, 33, 33);
        display: grid;

        .el-input {
          width: 85%;
          height: 60%;
        }

        div {
          padding: 0 0.8rem;
          align-self: center;
          justify-self: center;
          text-align: center
        }
      }
    }

    .body-item:nth-child(n+2):nth-child(even) {
      background-color: rgb(25, 32, 56);
    }
  }


  .footer {
    justify-self: center;
  }
}
</style>