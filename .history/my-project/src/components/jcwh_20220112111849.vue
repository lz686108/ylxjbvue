<template>
  <div>
    <div class="h1">
      <div class="qhbb2">
        <div class="sjlb">基础信息维护</div>
        <div class="truenfh">
          <div class="qhbb4 fh">新增</div>
          <div class="qhbb4 fh">保存</div>
          <div class="qhbb4">返回</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.h1 {
  display: flex;
  justify-content: space-between;
  width: 99.4vw;
  margin-top: 0.5vh;
  margin-left: 0.3vw;
}
/* 切换版本按钮 */
.qhbb {
  background-color: #5f49ac;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 4vh;
  border-radius: 0.2vw;
  margin-right: 0.5vw;
}
.qhbb1 {
  padding: 0.7vw 0.5vw 0.7vw 0.8vw;
  font-size: 1vw;
}
.sjlb {
  font-size: 0.8vw;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qhbb2 {
  width: 99.4vw;
  display: flex;
  justify-content: space-between;
}
.qhbb4 {
  width: 4vw;
  text-align: center;
  cursor: pointer;
  font-size: 1vw;
  background-color: #2f60d2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 3.5vh;
  border-radius: 0.2vw;
  font-size: 0.8vw;
}
.sh {
  width: 99.4vw;
  height: 6vh;
  background-color: #192633;
  margin-left: 0.3vw;
  margin-top: 0.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 料种 */
.lz {
  background-color: #3674bc;
  width: 4.5vw;
  color: #fff;
  height: 3.5vh;
  text-align: center;
  line-height: 3.5vh;
  margin-left: 0.8vw;
}
/* 经济科 */
.jjk {
  background-color: #364866;
  width: 7vw;
  color: #fff;
  height: 3.5vh;
  text-align: center;
  line-height: 3.5vh;
  margin-left: 0.2vw;
  color: #7184ab;
}
.ljing {
  display: flex;
  justify-content: flex-start;
}
.insbut {
  width: 4vw;
  height: 3.5vh;
  background-color: #2f60d2;
  color: #fff;
  text-align: center;
  line-height: 3.5vh;
  border-radius: 0.2vw;
  margin-left: 4vw;
}
.yjup {
  width: 6vw;
  height: 3.5vh;
  background-color: #2f60d2;
  color: #fff;
  text-align: center;
  line-height: 3.5vh;
  border-radius: 0.2vw;
  margin-right: 1vw;
}
.tableback {
  background-color: silver;
}
.imgp {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tback {
  width: 99.4vw;
  height: 87vh;
  background-color: #353d52;
  margin-left: 0.3vw;
  margin-top: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputs {
  background-color: #1d3466;
  border: none;
  color: #ffffff;
  height: 2vh;
  width: 6vw;
  border-radius: 0.3vw;
  margin-left: 0.5vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
}
.xubut {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #fff;
  height: 2vh;
  width: 8vw;
  border-radius: 0.3vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
}
.xubut option {
  background-color: #2f60d2;
  /*  background-color: #1D3466; */
}
.truenfh {
  display: flex;
  justify-content: flex-end;
}
.fh {
  margin-right: 0.3vw;
}
</style>
<style scoped>
.table,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody tr:hover > td {
  background-color: #0061d1;
}

tr:hover {
  background-color: #0061d1;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 83vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #fff;
  scrollbar-width: none;
  width: 99.8%;
  border-collapse: collapse;
}

/* .table tbody tr {
  height: 4vh;
} */

.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
}
.table th {
  border-bottom: solid 0.1vw #2b354a;
}
.table thead tr th {
  background-color: #142752;
  font-size: 0.8vw;
  /* 取消th自动加粗 */
  font-weight: normal;
  height: 2.7vh;
}
.table tbody tr td {
  font-size: 0.7vw;
  height: 3vh;
}
.table {
  margin-left: 0.2vw;
}

.table thead {
  color: #fff;
  /* 合并单元格 */
  border-collapse: collapse;
  width: 99.8%;
}

/* 取消表格的滚轮 */
::-webkit-scrollbar-thumb {
  background-color: #000 !important;
  border-radius: 3vw;
}

/* 滑轮背景色 */
/* 滚动条的头尾的颜色 */
::-webkit-scrollbar-button {
  background-color: none;
}

/* 滚动条的头尾的颜色 */
/* 滚动条的背景色 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  background-color: none !important;
  display: none;
}
</style>