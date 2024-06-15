<script setup lang="ts">
import type { BuyTicketView } from '@/types/ticket';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const ticketSearch = ref<BuyTicketView>({
  price: 0,
  seat_class: "",
  seat_number: "",
  flight_number: "",
  departure_city: "",
  arrival_city: "",
  date_of_departure: "",
  estimated_travel_time: 0,
  updated_time: ""
});


</script>

<template>
  <div class="buy-ticket">
    <div class="header">
      <div class="title">历史机票记录</div>
      <div class="search">
        <el-button color="#626aef"
          style="font-size: 1.5rem; justify-self: center;align-self: center;width: 2.4rem;height: 2.4rem"
          :icon="Search" />

      </div>
    </div>
    <div class="body">
      <div class="body-item">
        <div class="box">
          <div>航空器注册号</div>
        </div class="box">
        <div class="box">
          <div>出发地</div>
        </div>
        <div class="box">
          <div>目的地</div>
        </div class="box">
        <div class="box">
          <div>出发时间</div>
        </div>
        <div class="box">
          <div>预计飞行时间</div>
        </div>
        <div class="box">
          <div>价格</div>
        </div>
        <div class="box">
          <div>座位等级</div>
        </div>
        <div class="box">
          <div>座位号</div>
        </div>
        <div class="box">
          <div>购票时间</div>
        </div>
      </div>
      <div class="body-item">
        <div class="box">
          <el-input class="el-input" placeholder="航空器注册号" v-model="ticketSearch.flight_number" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="出发地" v-model="ticketSearch.departure_city" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="目的地" v-model="ticketSearch.arrival_city" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="出发时间" v-model="ticketSearch.date_of_departure" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="预计飞行时间" v-model="ticketSearch.estimated_travel_time" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="价格" v-model="ticketSearch.price" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="座位等级" v-model="ticketSearch.seat_class" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="座位号" v-model="ticketSearch.seat_number" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="购票时间" v-model="ticketSearch.seat_number" />
        </div>
      </div>
      <div class="body-item">
        <div class="box">
          <div>B-1549</div>
        </div>
        <div class="box">
          <div>湖北襄阳</div>
        </div>
        <div class="box">
          <div>上海外滩</div>
        </div>
        <div class="box">
          <div>2024-04-13 20:32:21</div>
        </div>
        <div class="box">
          <div>30min</div>
        </div>
        <div class="box">
          <div>2000</div>
        </div>
        <div class="box">
          <div>一等舱</div>
        </div>
        <div class="box">
          <div>12</div>
        </div>
        <div class="box">
          <div>2024-04-12 10:03:51</div>
        </div>
      </div>

    </div>
    <el-pagination background layout="prev, pager, next" :pager-count="5" :total="50" class="footer" />
  </div>
</template>


<style scoped>
.buy-ticket {
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

    .search {
      position: absolute;
      right: 5%;
      top: 14%;
    }

    .title {
      justify-self: center;
      align-self: center;
    }
  }

  .body {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 3.8rem;
    padding: 2% 2%;

    .body-item {
      display: grid;
      grid-template-columns: repeat(9, 2fr);
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
          align-self: center;
          justify-self: center;
          text-align: center
        }
      }
    }

    .body-item:nth-child(n+4):nth-child(even) {
      background-color: rgb(25, 32, 56);
    }
  }


  .footer {
    justify-self: center;
  }
}
</style>