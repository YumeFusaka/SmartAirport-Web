<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { Search, Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { FlightView } from '@/types/flight';
const flightSearch = ref<FlightView>({
  flight_number: "",
  departure_city: "",
  arrival_city: "",
  date_of_departure: "",
  estimated_travel_time: 0,
  capacity: 0
});


// 添加机票弹出框
const dialogAddTicketFormVisible = ref(false)
const addTicketFormRef = ref<FormInstance>()
const addTicketForm = ref({
  flight_number: '',
  departure_city: '',
  arrival_city: '',
  date_of_departure: '',
  estimated_travel_time: '',
  price: '',
  seat_class: '',
  seat_number: '',
})

const addRules = ref({
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

const submitAddTicketForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetAddTicketForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


// 添加航班弹出框

const dialogAddFlightFormVisible = ref(false)


const addFlightFormRef = ref<FormInstance>()
const addFlightForm = ref({
  flight_number: '',
  departure_city: '',
  arrival_city: '',
  date_of_departure: '',
  estimated_travel_time: '',
  capacity: '',
})

const addFlightRules = ref({
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
  capacity: [
    { required: true, message: '请输入乘客容量', trigger: 'blur' },
  ],
})

const submitAddFlightForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetAddFlightForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// 查看航班弹出框
const dialogWitchFlightFormVisible = ref(false)


const witchFlightFormRef = ref<FormInstance>()
const witchFlightForm = ref({
  flight_number: '',
  departure_city: '',
  arrival_city: '',
  date_of_departure: '',
  estimated_travel_time: '',
  capacity: '',
})

const witchFlightRules = ref({
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
  capacity: [
    { required: true, message: '请输入乘客容量', trigger: 'blur' },
  ],
})

const submitWitchFlightForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetWitchFlightForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
  <!-- 添加机票弹出框 -->
  <el-dialog v-model="dialogAddTicketFormVisible" title="发布机票" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form v-model="addTicketForm" :rules="addRules" ref="addTicketFormRef" label-position="left" label-width="130px">
      <el-form-item prop="flight_number" label="航空器注册号" :required="true">
        <el-input v-model="addTicketForm.flight_number" placeholder="航空器注册号" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="departure_city" label="出发地" :required="true">
        <el-input v-model="addTicketForm.departure_city" placeholder="出发地" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="arrival_city" label="目的地" :required="true">
        <el-input v-model="addTicketForm.arrival_city" placeholder="目的地" disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item prop="date_of_departure" label="出发时间" :required="true">
        <el-date-picker v-model="addTicketForm.date_of_departure" :clearable="true" placeholder="日期" type="datetime"
          disabled="true">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="estimated_travel_time" label="预计飞行时间" :required="true" disabled="true">
        <el-input v-model="addTicketForm.estimated_travel_time" placeholder="预计飞行时间">
        </el-input>
      </el-form-item>
      <el-form-item prop="price" label="价格" :required="true">
        <el-input-number v-model="addTicketForm.price" placeholder="请输入">
        </el-input-number>
      </el-form-item>
      <el-form-item prop="seat_class" label="座位等级" :required="true">
        <el-select v-model="addTicketForm.seat_class" :clearable="true" placeholder="座位等级" :filterable="true">
          <el-option :label="option.label" :value="option.value" v-for="option in seat_classOptions"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="seat_number" label="座位号" :required="true">
        <el-input-number v-model="addTicketForm.seat_number" placeholder="座位号">
        </el-input-number>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="dialogAddTicketFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogAddTicketFormVisible = false">
          Add
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 添加航班弹出框 -->
  <el-dialog v-model="dialogAddFlightFormVisible" title="发布机票" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form v-model="addFlightForm" :rules="addFlightRules" ref="addFlightFormRef" label-position="left"
      label-width="130px">
      <el-form-item prop="flight_number" label="航空器注册号" :required="true">
        <el-input v-model="addFlightForm.flight_number" placeholder="航空器注册号">
        </el-input>
      </el-form-item>
      <el-form-item prop="departure_city" label="出发地" :required="true">
        <el-input v-model="addFlightForm.departure_city" placeholder="出发地">
        </el-input>
      </el-form-item>
      <el-form-item prop="arrival_city" label="目的地" :required="true">
        <el-input v-model="addFlightForm.arrival_city" placeholder="目的地">
        </el-input>
      </el-form-item>
      <el-form-item prop="出发时间" label="出发时间" :required="true">
        <el-date-picker v-model="addFlightForm.date_of_departure" :clearable="true" placeholder="日期" type="datetime">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="estimated_travel_time" label="预计飞行时间" :required="true">
        <el-input v-model="addFlightForm.estimated_travel_time" type="Number" placeholder="预计飞行时间">
        </el-input>
      </el-form-item>
      <el-form-item prop="capacity" label="乘客容量" :required="true">
        <el-input v-model="addFlightForm.capacity" type="Number" placeholder="乘客容量">
        </el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="dialogAddFlightFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogAddFlightFormVisible = false">
          Change
        </el-button>
        <el-button type="danger" @click="dialogAddFlightFormVisible = false">
          Delete
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 查看航班弹出框 -->
  <el-dialog v-model="dialogWitchFlightFormVisible" title="发布机票" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form v-model="witchFlightForm" :rules="witchFlightRules" ref="witchFlightFormRef" label-position="left"
      label-width="130px">
      <el-form-item prop="flight_number" label="航空器注册号" :required="true">
        <el-input v-model="witchFlightForm.flight_number" placeholder="航空器注册号">
        </el-input>
      </el-form-item>
      <el-form-item prop="departure_city" label="出发地" :required="true">
        <el-input v-model="witchFlightForm.departure_city" placeholder="出发地">
        </el-input>
      </el-form-item>
      <el-form-item prop="arrival_city" label="目的地" :required="true">
        <el-input v-model="witchFlightForm.arrival_city" placeholder="目的地">
        </el-input>
      </el-form-item>
      <el-form-item prop="出发时间" label="出发时间" :required="true">
        <el-date-picker v-model="witchFlightForm.date_of_departure" :clearable="true" placeholder="日期" type="datetime">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="estimated_travel_time" label="预计飞行时间" :required="true">
        <el-input v-model="witchFlightForm.estimated_travel_time" type="Number" placeholder="预计飞行时间">
        </el-input>
      </el-form-item>
      <el-form-item prop="capacity" label="乘客容量" :required="true">
        <el-input v-model="witchFlightForm.capacity" type="Number" placeholder="乘客容量">
        </el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="dialogAddFlightFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogAddFlightFormVisible = false">
          Change
        </el-button>
        <el-button type="danger" @click="dialogAddFlightFormVisible = false">
          Delete
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 页面 -->
  <div class="buy-ticket">
    <div class="header">
      <div class="title">航班列表</div>
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
          <div>乘客容量</div>
        </div>
        <div class="box">
          <el-button color="#FF1493"
            style="font-size: 1.5rem; justify-self: center;align-self: center;width: 2.4rem;height: 2.4rem" :icon="Plus"
            @click="dialogAddFlightFormVisible = true" />
        </div>
      </div>
      <div class="body-item">
        <div class="box">
          <el-input class="el-input" placeholder="航空器注册号" v-model="flightSearch.flight_number" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="出发地" v-model="flightSearch.departure_city" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="目的地" v-model="flightSearch.arrival_city" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="出发时间" v-model="flightSearch.date_of_departure" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="预计飞行时间" v-model="flightSearch.estimated_travel_time" />
        </div>
        <div class="box">
          <el-input class="el-input" placeholder="乘客容量" v-model="flightSearch.capacity" />
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
        <div class="box-button">
          <el-button type="success" style="width: 70%;justify-self: center;align-self: center"
            @click="dialogWitchFlightFormVisible = true">查看</el-button>
          <el-button type="primary" style="width: 70%;align-self: center"
            @click="dialogAddTicketFormVisible = true">出票</el-button>
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
    grid-auto-rows: 3.8rem;
    padding: 2% 2%;

    .body-item {
      display: grid;
      grid-template-columns: repeat(6, 2fr) 1.5fr;
      justify-items: center;
      align-items: center;

      .box {
        height: 100%;
        width: 100%;
        border: 0.04rem solid rgb(33, 33, 33);
        display: grid;

        .el-input {
          width: 75%;
          height: 60%;
        }

        div {
          align-self: center;
          justify-self: center;
          text-align: center
        }
      }

      .box-button {
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
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