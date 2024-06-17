<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import type { Page } from '@/types/page';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'
import type { BuyGoodsView, GoodsDeleteParams } from '@/types/merchant';
import { merchantGoodsAddAPI, merchantGoodsCountAPI, merchantGoodsDeleteAPI, merchantGoodsListAPI, merchantGoodsUpdateAPI } from '@/apis/merchant';
const page = ref<Page>({
  pageNo: 1,
  pageSize: 8
})

const countNumber = ref<number>(0);

const itemNow = ref<BuyGoodsView>();

const countGoods = async () => {
  const res = await merchantGoodsCountAPI();
  console.log(res);
  countNumber.value = res.data;
}

const goodsList = ref<BuyGoodsView[]>();



const pageSearch = async () => {
  const params = {
    pageNo: page.value.pageNo,
    pageSize: page.value.pageSize
  };
  const res = await merchantGoodsListAPI(params);
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



// 添加弹出框
const dialogAddGoodsFormVisible = ref(false)
const clearAddGoodsForm = () => {
  addGoodsForm.value = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stock: 0,
    category: ''
  }
}

const addGoodsFormRef = ref<FormInstance>()
const addGoodsForm = ref<BuyGoodsView>({
  id: 0,
  name: '',
  price: 0,
  description: '',
  stock: 0,
  category: ''
})

const addGoodsRules = ref<FormRules<BuyGoodsView>>({
  name: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
  ],
  description: [
    { required: true, message: '请输入商品描述', trigger: 'blur' },
  ],
  price: [
    { required: true, message: '请输入商品价格', trigger: 'blur' },
  ],
  stock: [
    { required: true, message: '请输入商品库存', trigger: 'blur' },
  ],
  category: [
    { required: true, message: '请输入商品分类', trigger: 'blur' },
  ]
})

const submitAddGoodsForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
  const res = await merchantGoodsAddAPI(addGoodsForm.value);
  console.log(res);
  ElMessage({
    message: '添加成功',
    type: 'success',
  })
  clearAddGoodsForm();
  refreshSearch();
}


// 查看弹出框
const dialogWitchGoodsFormVisible = ref(false)

const openWitch = () => {
  witchGoodsForm.value = itemNow.value!;
  dialogWitchGoodsFormVisible.value = true;
}

const witchGoodsFormRef = ref<FormInstance>()
const witchGoodsForm = ref<BuyGoodsView>({
  id: 0,
  name: '',
  price: 0,
  description: '',
  stock: 0,
  category: ''
})

const witchGoodsRules = ref<FormRules<BuyGoodsView>>({
  name: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
  ],
  description: [
    { required: true, message: '请输入商品描述', trigger: 'blur' },
  ],
  price: [
    { required: true, message: '请输入商品价格', trigger: 'blur' },
  ],
  stock: [
    { required: true, message: '请输入商品库存', trigger: 'blur' },
  ],
  category: [
    { required: true, message: '请输入商品分类', trigger: 'blur' },
  ]
})

const submitWitchGoodsForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  });
  const res = await merchantGoodsUpdateAPI(witchGoodsForm.value);
  console.log(res);
  ElMessage({
    message: '修改成功',
    type: 'success',
  })
  dialogWitchGoodsFormVisible.value = false;
  refreshSearch();
}

const deleteGoods = async () => {
  const params = ref<GoodsDeleteParams>({
    goodsIds: []
  });
  params.value.goodsIds.push(itemNow.value!.id);
  const res = await merchantGoodsDeleteAPI(params.value);
  console.log(res);
  ElMessage({
    message: '删除成功',
    type: 'success',
  })
  dialogWitchGoodsFormVisible.value = false;
  refreshSearch();
}
</script>


<template>
  <!-- 添加弹出框 -->
  <el-dialog v-model="dialogAddGoodsFormVisible" title="添加商品" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form :model="addGoodsForm" :rules="addGoodsRules" ref="addGoodsFormRef" label-position="left"
      label-width="130px">
      <el-form-item prop="name" label="名称" :required="true">
        <el-input v-model="addGoodsForm.name" placeholder="请输入商品名称">
        </el-input>
      </el-form-item>
      <el-form-item prop="description" label="描述" :required="true">
        <el-input v-model="addGoodsForm.description" placeholder="请输入商品描述">
        </el-input>
      </el-form-item>
      <el-form-item prop="price" label="价格" :required="true">
        <el-input-number v-model="addGoodsForm.price" placeholder="请输入">
        </el-input-number>
      </el-form-item>
      <el-form-item prop="category" label="分类" :required="true">
        <el-input v-model="addGoodsForm.category" placeholder="请输入商品种类">
        </el-input>
      </el-form-item>
      <el-form-item prop="stock" label="数量" :required="true">
        <el-input-number v-model="addGoodsForm.stock" placeholder="请输入商品数量">
        </el-input-number>
      </el-form-item>
    </el-form>


    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="clearAddGoodsForm(); dialogAddGoodsFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitAddGoodsForm(addGoodsFormRef); dialogAddGoodsFormVisible = false">
          Add
        </el-button>
      </div>
    </template>
  </el-dialog>


  <!-- 查看弹出框 -->
  <el-dialog v-model="dialogWitchGoodsFormVisible" title="商品详情" width="600"
    style="padding: 50px;padding-top: 30px; border-radius: 2%">
    <el-form :model="witchGoodsForm" :rules="witchGoodsRules" ref="witchGoodsFormRef" label-position="left"
      label-width="130px">
      <el-form-item prop="name" label="名称" :required="true">
        <el-input v-model="witchGoodsForm.name" placeholder="请输入商品名称">
        </el-input>
      </el-form-item>
      <el-form-item prop="description" label="描述" :required="true">
        <el-input v-model="witchGoodsForm.description" placeholder="请输入商品描述">
        </el-input>
      </el-form-item>
      <el-form-item prop="price" label="价格" :required="true">
        <el-input-number v-model="witchGoodsForm.price" placeholder="请输入">
        </el-input-number>
      </el-form-item>
      <el-form-item prop="category" label="分类" :required="true">
        <el-input v-model="witchGoodsForm.category" placeholder="请输入商品种类">
        </el-input>
      </el-form-item>
      <el-form-item prop="stock" label="数量" :required="true">
        <el-input-number v-model="witchGoodsForm.stock" placeholder="请输入商品数量">
        </el-input-number>
      </el-form-item>
    </el-form>


    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="dialogAddGoodsFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitWitchGoodsForm(witchGoodsFormRef); dialogAddGoodsFormVisible = false">
          Change
        </el-button>
        <el-button type="danger" @click="deleteGoods(); dialogAddGoodsFormVisible = false">
          Delete
        </el-button>
      </div>
    </template>
  </el-dialog>



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
          <el-button color="#FF1493"
            style="font-size: 1.5rem; justify-self: center;align-self: center;width: 2.4rem;height: 2.4rem" :icon="Plus"
            @click="dialogAddGoodsFormVisible = true" />
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

        <div class="box"><el-button type="primary" :disabled="item.stock == 0"
            style="width: 70%;justify-self: center;align-self: center"
            @click="itemNow = item; openWitch()">查看</el-button>
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

    .body-item:nth-child(n+2):nth-child(odd) {
      background-color: rgb(25, 32, 56);
    }
  }


  .footer {
    justify-self: center;
  }
}
</style>