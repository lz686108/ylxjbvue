<template>
  <div>
    <!-- 矿粉性价比预测版本信息 -->
    <div class="bbxx">
        <!-- 切换版本信息模块 -->
        <div class="qhbb">
          <!-- <div class="qhbb1">切换版本</div>
          <i
            class="el-icon-caret-bottom"
            style="color: #fff; margin-right: 0.5vw"
            v-if="qubban == 1"
          ></i>
          <i
            v-else
            class="el-icon-caret-top"
            style="color: #fff; margin-right: 0.5vw"
          ></i> -->
          <span style="color:#809DD2;margin-right:0.5vw;margin-left:0.5vw">版本</span>
          <select v-model="banbenhao" class="xubut" @change="selecttableall()">
            <option v-for="(item, index) in selectxulists" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
    </div>
    <!-- 第二行 -->
    <!-- 性价比排序 -->
    <div class="xjbpx">
      <span class="sxjbpx">性价比排序</span>
      <div class="threebt">
        <div
          :class="index == paixunum ? 'oneblue' : 'onebut'"
          v-for="(item, index) in paixulist"
          :key="index"
          @click="threebutton(index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- table表格 -->
    <div class="tablebackground">
      <table class="table">
        <thead>
          <tr>
            <td>排名</td>
            <td>供应商</td>
            <td>性价比</td>
            <td>合同价格</td>
            <td>有效品位</td>
            <td>有效品位<br />吨度价</td>
            <td>计划<br />兑现率</td>
            <td>实际<br />兑现率</td>
            <td>TFe</td>
            <td>CaO</td>
            <td>SiO<sub>2</sub></td>
            <td>MgO</td>
            <td>AI<sub>2</sub>O<sub>3</sub></td>
            <td>TiO2</td>
            <td>P</td>
            <td>K2O</td>
            <td>Na2O</td>
            <td>ZnO</td>
            <td>MnO</td>
            <td>H2O</td>
            <td>lg</td>
            <td>S</td>
            <td style="width: 6vw">同化性温度<br />(1240-1280℃）</td>
            <td>连晶强度（≥300N)</td>
            <td style="width: 5vw">液相流动性(1.2-1.8)</td>
            <td style="width: 4vw">粘结相强度(＞700N)</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tablelistssi" :key="index">
            <td>{{ 11 }}</td>
            <td>{{ item.gysmc }}</td>
            <td>1</td>
            <td>{{ item.htjg }}</td>
            <td>{{ item.yxpw }}</td>
            <td>{{ item.yxpwduj }}</td>
            <td>{{ item.jhdxl }}</td>
            <td>{{ item.sjdxl }}</td>
            <td>{{ item.tfe }}</td>
            <td>{{ item.CaO }}</td>
            <td>{{ item.sio2 }}</td>
            <td>{{ item.MgO }}</td>
            <td>{{ item.Al2O3 }}</td>
            <td>{{ item.tio2 }}</td>
            <td>{{ item.P }}</td>
            <td>{{ item.K2O }}</td>
            <td>{{ item.Na2O }}</td>
            <td>{{ item.ZnO }}</td>
            <td>{{ item.MnO }}</td>
            <td>{{ item.shuifen }}</td>
            <td>{{ item.Ig }}</td>
            <td>{{ item.liu }}</td>
            <td style="width: 6vw">{{ item.thxwd }}</td>
            <td>{{ item.ljqd }}</td>
            <td style="width: 5vw">{{ item.yxldx }}</td>
            <td style="width: 4vw">{{ item.zjxqd }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 性价比排序分析 -->
    <div class="xjbpxli">
      <div class="xjbpxlisize">
        <span class="posi">性价比排序分析</span>
      </div>
      <div class="xjbpxlisize1">
        <div class="posi1">
          <span class="posi">化学元素排序分析</span>
        </div>

        <div>
          <select
            style="
              height: 3.3vh;
              margin-left: 0.6vw;
              border-radius: 0.2vw;
              width: 4vw;
              background: #1d3466;
              border: none;
              color: #fffff;
              cursor: pointer;
              outline: none;
            "
            v-model="shift"
          >
            <option v-for="(item, index) in 5" :key="index">Al3O2</option>
          </select>
        </div>
      </div>
      <!-- 高温特性排序分析 -->
      <div class="xjbpxlisize2 jsc">
        <div>
          <span class="posi">高温特性排序分析</span>
        </div>
        <div>
          <select
            style="
              height: 3.3vh;
              margin-left: 0.6vw;
              border-radius: 0.2vw;
              width: 4vw;
              background: #1d3466;
              border: none;
              color: #fffff;
              cursor: pointer;
              outline: none;
            "
            v-model="shift"
          >
            <option v-for="(item, index) in 5" :key="index">Al3O2</option>
          </select>
        </div>
      </div>
    </div>

    <div class="bott">
      <div class="bott_l" id="bott_l"></div>
      <div class="bott_c" id="bott_c"></div>
      <div class="bott_r" id="bott_r"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "first",
  data() {
    return {
      // 切换版本按钮
      qhbban: "1",
      //第二行排序部分
      paixulist: ["整体排序", "精分排序", "外粉排序"],
      paixunum: 0,
      a1: [
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
        { name: "螺纹钢厂库", v1: "1000", v2: "1000", v3: "1000", v4: "1000" },
      ],
      html: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版本:<span style='margin-left:5%;'>2021-03-28至2021-04-28</span>",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      name_arr: [
        "沈阳",
        "大连",
        "广州",
        "海南",
        "长春",
        "北京",
        "青岛",
        "上海",
      ],
      tkg: false,
      banbenhao: "",
      selectxulists: [],
      //table
      tablelistssi: [],
      shift: "",
    };
  },
  mounted() {
    this.DrawChart();
    this.DrawChart1();
    this.draw();
    this.selectxus();
  },
  methods: {
    threebutton(index) {
      this.paixunum = index;
    },
    //初始化查询版本信息
    selectxus() {
      axios({
        method: "post",
        url: "http://localhost:40010/mpd/ylxjb/luruf/selectxubut",
        params: {},
      }).then((res) => {
        this.selectxulists = res.data;
        this.banbenhao = this.selectxulists[this.selectxulists.length - 1];
        //this.selectalofluruf();
        this.selecttableall();
      });
    },
    // 切换版本号 表格显示不同数据 加上精分外粉 根据有效品位排序
    selecttableall() {
      this.tablelistssi = [];
      axios({
        method: "post",
        url: "http://localhost:40010/mpd/ylxjb/luruf/selectTableBybbh",
        params: {
          banbenh: this.banbenhao,
          pxgz: 1,
        },
      }).then((res) => {
        this.tablelistssi = res.data;
        console.log(res.data);
      });
    },
    DrawChart() {
      // axios.get("http://10.6.1.129/sop_api/test.php?sid="+id).then((res) => {

      // let data = res.data[0];
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("bott_c"));

      let option = {
        backgroundColor: "#2A354B",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "15%",
          right: "10%",
          left: "10%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            data: [
              "制造业",
              "建筑业",
              "农林牧渔",
              "房地产",
              "金融业",
              "居民服务及其他",
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#90B9CC",
              textStyle: {
                fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#90B9CC",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,1)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [5000, 2600, 1300, 1300, 1250, 1500],
            barWidth: "20px",
            itemStyle: {
              normal: {
                color: "#A8884A",
              },
            },
          },
        ],
      };
      myChart.setOption(option, true);
      // });
    },
    draw() {
      var myChart = echarts.init(document.getElementById("bott_l"));
      var category = ["小王", "小李", "小赵", "小马", "小刘", "小张", "小齐"];
      var barData = [3100, 2142, 1218, 581, 431, 383, 163];

      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          type: "scroll",
          // orient: 'vertical',
          // selectedMode: false, //图例点击失效
          right: "1%",
          top: "2%",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },

          // data: datas.legendData,
        },
        grid: {
          left: "8%",
          top: "15%",
          right: "8%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
            axisLine: {
              show: false,
            },
            axisLabel: {
              //  改变y轴字体颜色和大小
              //formatter: '{value} m³ ', //  给y轴添加单位
              textStyle: {
                color: "rgba(144,185,204,1)",
                fontSize: 12,
              },
            },
            axisTick: {
              show: false,
            },
          },
          {
            type: "value",
            axisLabel: {
              //  改变y轴字体颜色和大小
              //formatter: '{value} m³ ', //  给y轴添加单位
              textStyle: {
                color: "rgba(144,185,204,1)",
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: {
          type: "category",
          data: category,
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: "rgba(144,185,204,1)",
              fontSize: 12,
            },
          },
          axisTick: {
            show: false,
          },
          offset: 10,
          nameTextStyle: {
            fontSize: 15,
          },
        },
        series: [
          {
            name: "办结率(%)",
            xAxisIndex: 0,
            type: "line",
            smooth: true,
            data: [30, 50, 53, 42, 66, 80, 20, 80, 20],
            symbol: "circle",
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: "#FFFFFF",
                borderColor: "#fff",
                lineStyle: {
                  color: "rgba(227, 164, 83, 0.5)",
                },
              },
            },
          },
          {
            name: "数量",
            type: "bar",
            xAxisIndex: 1,
            data: barData,
            barWidth: 14,
            barGap: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#008CCB",
              },
            },
          },
        ],
      };
      myChart.setOption(option, true);
    },
    DrawChart1() {
      // axios.get("http://10.6.1.129/sop_api/test.php?sid="+id).then((res) => {

      // let data = res.data[0];
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("bott_r"));
      var option = {
        backgroundColor: "#2A354B",
        barWidth: 10,
        grid: {
          left: "20%",
          right: "5%",
          top: "15%",
          bottom: "5%",
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,0.2)",
            },
          },
          position: "top",
          axisTick: {
            show: false,
          },
          axisLine: {
            //  改变x轴颜色
            show: false,
            lineStyle: {
              color: "#26D9FF",
            },
          },
          axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
              color: "rgba(144,185,204,1)",
              fontSize: 14,
            },
          },
        },
        yAxis: {
          type: "category",
          data: [
            "硼铁粉",
            "印度外粉52",
            "塞拉利昂外粉",
            "外购铁皮",
            "印度外粉57",
            "桓仁精粉",
            "马郡城精粉",
            "超特外粉",
            "印度外粉54",
            "顺锋精粉",
          ],
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            //  改变y轴颜色
            lineStyle: {
              color: "#26D9FF",
            },
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: "rgba(144,185,204,1)",
              fontSize: 12,
            },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return (
              params[0].name +
              "<br/>" +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              " : " +
              params[0].value +
              " <br/>"
            );
          },
        },
        series: [
          {
            type: "bar",
            name: "采样人数",
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "rgba(250,250,250,0.6)",
                    fontSize: 16,
                    fontWeight: 600,
                  },
                },
                color: "rgba(2,174,189,1)",
                borderWidth: 2,
                barBorderRadius: 5,
              },
            },
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          },
        ],
      };
      myChart.setOption(option, true);
      // });
    },
  },
};
</script>
// this.$router.push({ path: "/", query: {} });
<style scoped>
.xubut {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #FFFFFF;
  height: 2vh;
  width: 7.5vw;
  border-radius: 0.3vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
}
.xubut option {
  background-color: #2f60d2;
  /*  background-color: #1D3466; */
}
/* 矿粉性价比预测版本信息 */
.bbxx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99.4vw;
  height: 3.5vh;
  margin-top: 0.5vh;
  margin-left: 0.3vw;
}
/* 切换版本按钮 */
.qhbb {
  background-color: #1D3466;
  color: #fff;
  font-size: 0.5vw;
  display: flex;
  align-items: center;
  margin-right: 0.5vw;
  cursor: pointer;
  height: 3.5vh;
  border-radius: 0.2vw;
}
.qhbb1 {
  padding: 0.7vw 1.5vw 0.7vw 1.6vw;
  font-size: 0.8vw;
}
/* 第三行性价比排序模块 */
.xjbpx {
  display: flex;
  justify-content: space-between;
}
.threebt {
  display: flex;
  justify-content: flex-end;
  color: #717f9b;
  font-size: 0.8vw;
  padding-right: 0.3vw;
  cursor: pointer;
}
/* 整体排序 精分排序 外粉排序 */
.onebut {
  background-color: #1d3466;
  height: 3.5vh;
  border-radius: 0.1vw;
  width: 5vw;
  text-align: center;
  line-height: 3.5vh;
  color: #809dd2;
  font-size: 0.8vw;
  margin-left: 0.3vw;
}
/* 蓝色切换 */
.oneblue {
  background-color: #0061d1;
  height: 3.5vh;
  border-radius: 0.1vw;
  width: 5vw;
  text-align: center;
  line-height: 3.5vh;
  color: #fff;
  font-size: 0.8vw;
  margin-left: 0.3vw;
}
/* 性价比排序 */
.sxjbpx {
  color: #fff;
  font-size: 0.8vw;
  padding: 0.2vw 0 0 1vw;
  display: flex;
  align-items: center;
}
/* table背景 */
.tablebackground {
  background-color: #353d52;
  width: 99.4vw;
  height: 37vh;
  margin-left: 0.3vw;
  margin-top: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xjbpxli {
  display: flex;
  justify-content: space-between;
  width: 99.4vw;
  height: 4vh;
  margin-left: 0.3vw;
  margin-top: 0.5vh;
}
.xjbpxlisize {
  width: 24.6vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  align-items: center;
}
.xjbpxlisize1 {
  width: 49.2vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xjbpxlisize2 {
  width: 24.6vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posi {
  padding: 0 0 0 0.8vw;
  font-size: 0.8vw;
}
.bott {
  width: 99.4vw;
  height: 39vh;
  margin: 0.5vh auto 0;
  display: flex;
  justify-content: space-between;
  /* background-color: #353d52; */
}
.bott_l,
.bott_r {
  width: 24.6vw;
  height: 39vh;
  background-color: #353d52;
}
.bott_c {
  width: 49.2vw;
  height: 39vh;
  background-color: #353d52;
}
</style>
// 表格样式
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
  height: 31vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.8%;
  scrollbar-width: none;
  border-collapse: collapse;
}
.table tbody tr td {
  background-color: #1f2e43;
  font-size: 0.6vw;
  height: 3vh;
}
.table thead tr td {
  height: 2.7vh;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
}
.table tbody tr {
  color: #c0e6f9;
}
.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
}
.table thead tr td {
  background-color: #142a53;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}
.table {
  margin-left: 0.2vw;
}
.table thead {
  width: 99.8%;
  color: #fff;
  border-collapse: collapse;
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