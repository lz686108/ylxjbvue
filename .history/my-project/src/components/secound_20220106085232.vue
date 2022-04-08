<template>
  <div>
    <!-- 第一行物料录入 -->
    <div class="h1">
      <!-- 日期 -->
      <!-- 按钮 -->
      <div class="qhbb2">
        <div class="sjlb">数据列表</div>
        <div class="truenfh">
          <div class="qhbb4 fh" style="width: 7.3vw">
            <select class="xubut" v-model="xubutrs" @change="selectalofluruf()">
              <option v-for="(item, index) in selectxulists" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="qhbb4 fh" @click="insertslurus()">保存</div>
          <div class="qhbb4" @click="fhfir()">返回</div>
        </div>
      </div>
    </div>
    <div style="" class="tback">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 4vw">序号</th>
            <th style="width: 13vw">供应商名称</th>
            <th>物料名称</th>
            <th>料种</th>
            <th>同化性温度</th>
            <th>连晶温度</th>
            <th>液相流动性</th>
            <th>粘结相强度</th>
            <th>定价方式</th>
            <th>采购质量(1%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in talist" :key="index">
            <td style="width: 4vw">
              {{ index + 1 }}
            </td>
            <td style="text-align: left; padding-left: 0.5vw; width: 13vw">
              {{ item.distributorName }}
            </td>
            <td style="text-align: left; padding-left: 0.5vw">
              {{ item.materialName }}
            </td>
            <td style="text-align: left; padding-left: 0.5vw">
              {{ item.sterilise }}
            </td>
            <td>
              <input
                type="text"
                class="inputs"
                v-model="item.chemotropism"
                style="text-align: right"
              />
            </td>
            <td>
              <input
                type="text"
                class="inputs"
                v-model="item.crystalStock"
                style="text-align: right"
              />
            </td>
            <td>
              <input
                type="text"
                class="inputs"
                v-model="item.liquidFluidity"
                style="text-align: right"
              />
            </td>
            <td>
              <input type="text" class="inputs" v-model="item.phaseStrength" />
            </td>
            <td>
              <select
                class="inputs"
                style="border: none; width: 6.2vw"
                v-model="item.pricingType"
              >
                <option v-for="(item, index) in djfs" :key="index">
                  {{ item }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                class="inputs"
                v-model="item.purchasingQuality"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      //   料种
      lztext: "经济科",
      talist: [],
      //定价方式
      djfs: ["---------", "直供户", "一单户"],
      fbuts: "",
      //初始化查询版本
      selectxulists: [],
      //版本
      xubutrs: "",
      //权限
      quanxiancard: "",
    };
  },
  created() {
    this.quanxiancard = sessionStorage.getItem("card");
    console.log(this.quanxiancard);
  },
  mounted() {
    this.selectxus();
    //this.selectalofluruf();
  },
  methods: {
    selectalofluruf() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40014/mpd/ylxjb/luruf/selectsidall",
        params: {
          versiondat: this.xubutrs,
        },
      }).then((res) => {
        this.talist = res.data;
      });
    },
    // 批量添加
    insertslurus() {
      if (this.quanxiancard != "220570" && this.quanxiancard != "217878") {
        alert("无修改权限");
        return;
      }
      var sd1 = [];
      sd1 = this.talist;
      axios({
        method: "post",
        url: "http://10.6.1.179:40014/mpd/ylxjb/luruf/insertslurus",
        params: {
          luruslist: JSON.stringify(sd1),
          ddyh: this.xubutrs,
        },
      }).then((res) => {
        this.talist = res.data;
        // for (let i = 0; i < this.talist.length; i++) {
        //   // this.talist[i].chemotropism = "";
        //   // this.talist[i].crystalstock = "";
        //   // this.talist[i].liquidfluidity = "";
        //   // this.talist[i].phasestrength = "";
        //   // this.talist[i].purchasingquality = "";
        //   this.talist[i].fbuts = "直供户";
        // }
        this.$message("添加成功");
      });
    },
    //返回首页
    fhfir() {
      this.$router.push({ path: "/three", query: {} });
    },
    //初始化查询版本信息
    selectxus() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40014/mpd/ylxjb/luruf/selectxubut",
        params: {},
      }).then((res) => {
        this.selectxulists = res.data;
        this.xubutrs = this.selectxulists[this.selectxulists.length - 1];
        this.selectalofluruf();
      });
    },
  },
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
//picker日期组件样式
<style>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 5vw !important;
}

.el-icon-date:before {
  display: none !important;
}

.el-input--small .el-input__icon {
  width: 0vw !important;
  height: 0vw !important;
}

.el-input--prefix .el-input__inner {
  padding-left: 0vw !important;
  color: #7a91bb;
}

.el-date-editor .el-icon-circle-close {
  display: none;
}

.el-input__inner {
  background-color: #2c3d6d !important;
  height: 3vh !important;
  padding-right: 0vw !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 1vw;
  padding: 1.2vw 0 1vw 0;
}
</style>