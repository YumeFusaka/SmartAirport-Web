<script setup lang="ts">

</script>

<template>
  <div class="buy-ticket">
    <div class="header">
      <div class="title">机票列表</div>
    </div>
    <div class="body">
      机票
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
  font-size: 1.2rem;
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


  .footer {
    justify-self: center;

  }
}
</style>