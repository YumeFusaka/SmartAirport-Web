<script setup lang="ts">
import { passengerTicketHisotryCountAPI, passengerTicketHistoryAPI } from '@/apis/passenger';
import type { Page } from '@/types/page';
import type { BuyTicketView } from '@/types/ticket';
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

const page = ref<Page>({
  pageNo: 1,
  pageSize: 8
})

const ticketSearch = ref<BuyTicketView>({
  price: 0,
  seat_class: "",
  seat_number: 0,
  flight_number: "",
  departure_city: "",
  arrival_city: "",
  date_of_departure: "",
  estimated_travel_time: 0,
  updated_time: "",
  pageNo: 1,
  pageSize: 8
});

const ticketSearchParams = ref<BuyTicketView>({
  price: 0,
  seat_class: "",
  seat_number: 0,
  flight_number: "",
  departure_city: "",
  arrival_city: "",
  date_of_departure: "",
  estimated_travel_time: 0,
  updated_time: "",
  pageNo: 1,
  pageSize: 8
});



const countNumber = ref<number>(0);

const countTicket = async () => {
  const res = await passengerTicketHisotryCountAPI(ticketSearchParams.value);
  console.log(res)
  countNumber.value = res.data;
}

const ticketList = ref<BuyTicketView[]>()

const conditionSearch = async () => {
  page.value.pageNo = 1;
  ticketSearchParams.value = {
    ...ticketSearch.value,
    ...page.value
  };
  const params: BuyTicketView = {
    flight_number: ticketSearch.value.flight_number,
    departure_city: ticketSearch.value.departure_city,
    arrival_city: ticketSearch.value.arrival_city,
    date_of_departure: ticketSearch.value.date_of_departure,
    estimated_travel_time: ticketSearch.value.estimated_travel_time,
    seat_number: ticketSearch.value.seat_number,
    seat_class: ticketSearch.value.seat_class,
    price: ticketSearch.value.price,
    updated_time: ticketSearch.value.updated_time,
    pageNo: page.value.pageNo,
    pageSize: page.value.pageSize
  }
  if (params.seat_class === '一等舱') {
    params.seat_class = '1'
  } else if (params.seat_class === '二等舱') {
    params.seat_class = '2'
  }
  const res = await passengerTicketHistoryAPI(params);
  console.log(res)
  countTicket();
  ticketList.value = res.data
}

const pageSearch = async () => {
  const params: BuyTicketView = {
    flight_number: ticketSearchParams.value.flight_number,
    departure_city: ticketSearchParams.value.departure_city,
    arrival_city: ticketSearchParams.value.arrival_city,
    date_of_departure: ticketSearchParams.value.date_of_departure,
    estimated_travel_time: ticketSearchParams.value.estimated_travel_time,
    seat_number: ticketSearchParams.value.seat_number,
    seat_class: ticketSearchParams.value.seat_class,
    price: ticketSearchParams.value.price,
    updated_time: ticketSearchParams.value.updated_time,
    pageNo: page.value.pageNo,
    pageSize: page.value.pageSize
  }
  const res = await passengerTicketHistoryAPI(params);
  console.log(res);
  ticketList.value = res.data;
}

const refreshSearch = async () => {
  ticketSearch.value = {
    price: 0,
    seat_class: "",
    seat_number: 0,
    flight_number: "",
    departure_city: "",
    arrival_city: "",
    date_of_departure: "",
    estimated_travel_time: 0,
    updated_time: '',
    pageNo: 1,
    pageSize: 8
  };
  ticketSearchParams.value = {
    price: 0,
    seat_class: "",
    seat_number: 0,
    flight_number: "",
    departure_city: "",
    arrival_city: "",
    date_of_departure: "",
    estimated_travel_time: 0,
    updated_time: '',
    pageNo: 1,
    pageSize: 8
  };
  page.value.pageNo = 1;
  page.value.pageSize = 8;
  await countTicket();
  await pageSearch();
}


onMounted(async () => {
  await countTicket();
  await pageSearch();
})


</script>

<template>
  <div class="buy-ticket">
    <div class="header">
      <div class="title">历史机票记录</div>
      <div class="search">
        <el-button color="#626aef" @click="conditionSearch()"
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
      <div class="body-item" v-for="item in ticketList">
        <div class="box">
          <div>{{ item.flight_number }}</div>
        </div>
        <div class="box">
          <div>{{ item.departure_city }}</div>
        </div>
        <div class="box">
          <div>{{ item.arrival_city }}</div>
        </div>
        <div class="box">
          <div>{{ item.date_of_departure }}</div>
        </div>
        <div class="box">
          <div>{{ item.estimated_travel_time }} min</div>
        </div>
        <div class="box">
          <div>{{ item.price }}￥</div>
        </div>
        <div class="box">
          <div>{{ item.seat_class === "1" ? "一等舱" : "二等舱" }}</div>
        </div>
        <div class="box">
          <div>{{ item.seat_number }}</div>
        </div>
        <div class="box">
          <div>2024-04-12 10:03:51</div>
        </div>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="countNumber" :page-size="page.pageSize"
      v-model:current-page="page.pageNo" @current-change="pageSearch()" class="footer" />
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
    grid-template-rows: repeat(10, 3.8rem);
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
          padding: 0 0.8rem;
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