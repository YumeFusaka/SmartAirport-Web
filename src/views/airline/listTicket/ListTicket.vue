<script setup lang="ts">
import type { FormInstance } from 'element-plus'

import type { BuyTicketView } from '@/types/ticket';
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
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


// 查看弹出框
const dialogFormVisible = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  flight_number: '',
  departure_city: '',
  arrival_city: '',
  date_of_departure: '',
  estimated_travel_time: '',
  price: '',
  seat_class: '',
  seat_number: '',
})

const rules = ref({
  flight_number: [
    { required: true, message: '请输入航空器注册号', trigger: 'blur' },
  ],
  departure_city: [
    { required: true, message: '请输入出发地', trigger: 'blur' },
  ],
  arrival_city: [
    { required: true, message: '请输入目的地', trigger: 'blur' },
  ],
  date_of_departure: [
    { required: true, message: '请选择出发时间', trigger: 'blur' },
  ],
  estimated_travel_time: [
    { required: true, message: '请输入预计飞行时间', trigger: 'blur' },
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' },
  ],
  seat_class: [
    { required: true, message: '请输入选择座位等级', trigger: 'blur' },
  ],
  seat_number: [
    { required: true, message: '请输入座位号', trigger: 'blur' },
  ],
})
const seat_classOptions = ref([{
  label: '一等舱',
  value: '1',
},
{
  label: '二等舱',
  value: '2',
}])

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<template>
  <!-- 查看弹出框 -->
  <el-dialog v-model="dialogFormVisible" title="查看机票" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form v-model="form" :rules="rules" ref="formRef" label-position="left" label-width="130px">
      <el-form-item prop="flight_number" label="航空器注册号" :required="true">
        <el-input v-model="form.flight_number" placeholder="航空器注册号" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="departure_city" label="出发地" :required="true">
        <el-input v-model="form.departure_city" placeholder="出发地" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="arrival_city" label="目的地" :required="true">
        <el-input v-model="form.arrival_city" placeholder="目的地" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="date_of_departure" label="出发时间" :required="true">
        <el-date-picker v-model="form.date_of_departure" :clearable="true" placeholder="日期" type="datetime"
          disabled="true">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="estimated_travel_time" label="预计飞行时间" :required="true" disabled="true">
        <el-input v-model="form.estimated_travel_time" type="number" placeholder="预计飞行时间">
        </el-input>
      </el-form-item>
      <el-form-item prop="price" label="价格" :required="true">
        <el-input-number v-model="form.price" placeholder="请输入">
        </el-input-number>
      </el-form-item>
      <el-form-item prop="seat_class" label="座位等级" :required="true">
        <el-select v-model="form.seat_class" :clearable="true" placeholder="座位等级" :filterable="true">
          <el-option :label="option.label" :value="option.value" v-for="option in seat_classOptions"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="seat_number" label="座位号" :required="true">
        <el-input-number v-model="form.seat_number" placeholder="座位号">
        </el-input-number>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Change
        </el-button>
        <el-button type="danger" @click="dialogFormVisible = false">
          Delete
        </el-button>
      </div>
    </template>
  </el-dialog>


  <!-- 页面 -->
  <div class="buy-ticket">
    <div class="header">
      <div class="title">机票列表</div>
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
          <el-button color="#626aef"
            style="font-size: 1.5rem; justify-self: center;align-self: center;width: 2.4rem;height: 2.4rem"
            :icon="Search" />
        </div>
      </div>
      <div class="body-item">
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box">
          <div>123</div>
        </div>
        <div class="box"><el-button type="primary" @click="dialogFormVisible = true"
            style="width: 70%;justify-self: center;align-self: center">查看</el-button>
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
      grid-template-columns: repeat(8, 2fr) 1fr;
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