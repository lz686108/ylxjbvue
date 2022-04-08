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
        <span style="color: #809dd2; margin-right: 0.5vw; margin-left: 0.5vw"
          >版本</span
        >
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
    <div
      class="tablebackground"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-if="1 == 2"
    >
      <table class="table">
        <thead>
          <tr>
            <td style="width: 2vw">排名</td>
            <td style="width: 9vw">供应商</td>
            <td style="width: 3vw">合同价格</td>
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
            <td>历史</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tablelistssi" :key="index">
            <td style="width: 2vw">{{ index + 1 }}</td>
            <td class="gysnames" style="width: 9vw; text-align: left">
              {{ item.gysmc }}
            </td>
            <td class="mathsma" style="text-align: right; width: 3vw">
              {{ item.htjg }}
            </td>
            <td class="mathsma" style="text-align: right">{{ item.yxpw }}</td>
            <td class="mathsma" style="text-align: right">
              {{ item.yxpwduj }}
            </td>
            <td class="mathsma" style="text-align: right">{{ item.jhdxl }}</td>
            <td class="mathsma" style="text-align: right">{{ item.sjdxl }}</td>
            <td class="mathsma" style="text-align: right">{{ item.tfe }}</td>
            <td class="mathsma" style="text-align: right">{{ item.CaO }}</td>
            <td class="mathsma" style="text-align: right">{{ item.sio2 }}</td>
            <td class="mathsma" style="text-align: right">{{ item.MgO }}</td>
            <td class="mathsma" style="text-align: right">{{ item.Al2O3 }}</td>
            <td class="mathsma" style="text-align: right">{{ item.tio2 }}</td>
            <td class="mathsma" style="text-align: right">{{ item.P }}</td>
            <td class="mathsma" style="text-align: right">{{ item.K2O }}</td>
            <td class="mathsma" style="text-align: right">{{ item.Na2O }}</td>
            <td class="mathsma" style="text-align: right">{{ item.ZnO }}</td>
            <td class="mathsma" style="text-align: right">{{ item.MnO }}</td>
            <td class="mathsma" style="text-align: right">
              {{ item.shuifen }}
            </td>
            <td class="mathsma" style="text-align: right">{{ item.Ig }}</td>
            <td class="mathsma" style="text-align: right">{{ item.liu }}</td>
            <td
              style="width: 6vw; text-align: right; padding-right: 0.5vw"
              class="mathsma"
            >
              {{ item.thxwd }}
            </td>
            <td style="text-align: right" class="mathsma">{{ item.ljqd }}</td>
            <td style="width: 5vw; text-align: right" class="mathsma">
              {{ item.yxldx }}
            </td>
            <td style="width: 4vw; text-align: right" class="mathsma">
              {{ item.zjxqd }}
            </td>
            <td>历史</td>
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
              height: 3.5vh;
              margin-left: 0.6vw;
              border-radius: 0.2vw;
              width: 4.5vw;
              background: #1d3466;
              border: none;
              color: #fff;
              cursor: pointer;
              outline: none;
              font-size: 0.7vw;
            "
            @change="gysysm()"
            v-model="ssexl"
          >
            <option v-for="(item, index) in ysmcli" :key="index">
              {{ item }}
            </option>
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
              height: 3.5vh;
              margin-left: 0.6vw;
              border-radius: 0.2vw;
              width: 6vw;
              background: #1d3466;
              border: none;
              color: #fff;
              cursor: pointer;
              outline: none;
              font-size: 0.7vw;
            "
            v-model="xlmrs"
            @change="secharsmount()"
          >
            <option v-for="(item, index) in sechslis" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="bott" v-if="1 == 2">
      <div
        class="bott_l"
        id="bott_l"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></div>
      <div
        class="bott_c"
        id="bott_c"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></div>
      <div
        class="bott_r"
        id="bott_r"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></div>
    </div>
    <!-- 历史弹窗 -->
    <div class="histtory">
      <div class="tcstyle">
        <!-- 历史数据 -->
        <div class="zbttc">
          <span class="lstc">历史数据</span>
          &nbsp;<span class="yuelejsj">(数值取月累计数据)</span>
        </div>
        <!-- 基本数据 -->
        <div class="yuelejsj zbttc" style="color: #fff">基本数据</div>
        <!-- 8个横向方块 -->
        <div class="zfkyas">
          <div class="fkyss" style="margin-left: 1vw">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
          <div class="fkyss">1</div>
        </div>
        <!-- 纵向两个方块 -->
        <div class="zfks">
          <!-- 左 -->
          <div class="leftfks">
            <div class="yuelejsj zbttc" style="color: #fff; margin-left: 0vw">
              数据(月均数据)
            </div>
            <!-- 第二行 -->
            <div class="leftsecound">
              <div class="leftsectwo">
                <span class="yuelejsj">月累计到货量</span>
                <span class="yuelejsj">1</span>
                <span class="yuelejsj">t</span>
              </div>
              <div class="leftsectwo">
                <span class="yuelejsj">实际兑现率</span>
                <span class="yuelejsj">1</span>
                <span class="yuelejsj">%</span>
              </div>
            </div>
            <div class="zdldtus" id="zdldtus"></div>
          </div>
          <!-- 右 -->
          <div class="rightfks"></div>
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
    return {
      // 切换版本按钮
      qhbban: "1",
      //第二行排序部分
      paixulist: ["整体排序", "精粉排序", "外粉排序"],
      paixunum: 0,
      value: "",
      tkg: false,
      banbenhao: "",
      selectxulists: [],
      //table
      tablelistssi: [],
      shift: "",
      //第一个echarts
      // y轴厂家
      fyz: [],
      // x轴实际兑现率
      fxsjdxl: [],
      // x轴计划兑现率
      fxjhdxl: [],
      //第二个echartS
      //下拉部分
      ysmcli: [
        "TFe",
        "CaO",
        "SiO2",
        "MgO",
        "Al2O3",
        "TiO2",
        "P",
        "K2O",
        "Na2O",
        "ZnO",
        "MnO",
        "H2O",
        "S",
      ],
      //下拉按钮的值
      ssexl: "",
      //第二个echarts的内容
      sechali: [],
      //第三个echarts内容
      //下拉
      sechslis: ["同性化温度", "连晶强度", "液相流动性", "粘结相强度"],
      //下拉默认
      xlmrs: "",
      //第三个echarts内容
      sechalists: [],
      //计划兑现率
      jhdxlslt: "",
      loading: false,
      //历史弹窗
      histtorytcs: false,
    };
  },
  mounted() {
    this.hdressmon();
    this.DrawChart();
    this.DrawChart1();
    this.draw();
    this.selectxus();
    //this.zdldt();
    this.ssexl = this.ysmcli[0];
    this.xlmrs = this.sechslis[0];
  },
  methods: {
    threebutton(index) {
      this.paixunum = index;
      this.selecttableall();
    },
    //初始化查询版本信息
    selectxus() {
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/selectxubut",
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
      this.loading = true;
      this.tablelistssi = [];
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/selectTableBybbh",
        params: {
          banbenh: this.banbenhao,
          pxgz: this.paixunum,
        },
      }).then((res) => {
        this.tablelistssi = res.data;
        console.log(res.data);
        this.fyz = [];
        this.fxsjdxl = [];
        this.fxjhdxl = [];
        this.gysysm();
        this.secharsmount();
        for (let i = 0; i < this.tablelistssi.length; i++) {
          this.fyz.push(
            this.tablelistssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
          );
          if (this.tablelistssi[i].sjdxl) {
            this.fxsjdxl.push({
              name: this.tablelistssi[i].sjdxl.replace("%", ""),
              name1: this.tablelistssi[i].gysmc,
            });
          } else {
            this.fxsjdxl.push({
              name: 0,
              name1: this.tablelistssi[i].gysmc,
            });
          }
          if (this.tablelistssi[i].jhdxl) {
            this.fxjhdxl.push(this.tablelistssi[i].jhdxl.replace("%", ""));
          } else {
            this.fxjhdxl.push("0");
          }
          this.fxjhdxl.push(this.tablelistssi[i].jhdxl);
          this.jhdxlslt = this.fxjhdxl[0];
        }
        console.log(this.fxsjdxl, 66666666);
        this.draw();
        this.DrawChart();
        this.DrawChart1();
        this.loading = false;
      });
    },
    secharsmount() {
      //第三个echarts内容
      this.sechalists = [];
      var tsmlec = this.xlmrs;
      var tabletalse = this.tablelistssi;
      if (tsmlec == "同性化温度") {
        for (let i = 0; i < tabletalse.length; i++) {
          this.sechalists.push({
            name: tabletalse[i].thxwd,
            name1: tabletalse[i].gysmc,
          });
        }
        this.DrawChart1();
        return;
      }
      if (tsmlec == "连晶强度") {
        for (let i = 0; i < tabletalse.length; i++) {
          //this.sechalists.push(tabletalse[i].ljqd);
          this.sechalists.push({
            name: tabletalse[i].ljqd,
            name1: tabletalse[i].gysmc,
          });
        }
        this.DrawChart1();
        return;
      }
      if (tsmlec == "液相流动性") {
        for (let i = 0; i < tabletalse.length; i++) {
          // this.sechalists.push(tabletalse[i].yxldx);
          this.sechalists.push({
            name: tabletalse[i].yxldx,
            name1: tabletalse[i].gysmc,
          });
        }
        this.DrawChart1();
        return;
      }
      if (tsmlec == "粘结相强度") {
        for (let i = 0; i < tabletalse.length; i++) {
          //this.sechalists.push(tabletalse[i].zjxqd);
          this.sechalists.push({
            name: tabletalse[i].zjxqd,
            name1: tabletalse[i].gysmc,
          });
        }
        this.DrawChart1();
        return;
      }
    },
    gysysm() {
      //下拉按钮的值
      var tas = this.ssexl;
      //table返回的内容
      var tabssi = this.tablelistssi;
      this.sechali = [];
      console.log(tabssi, 7777777);
      if (tas == "TFe") {
        for (let i = 0; i < tabssi.length; i++) {
          //this.sechali.push(tabssi[i].tfe);
          this.sechali.push({
            name: tabssi[i].tfe,
            name1: tabssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
              .replace("公用设施", "")
              .replace("钢铁", ""),
          });
        }
        this.DrawChart();
        return;
      }
      if (tas == "SiO2") {
        for (let i = 0; i < tabssi.length; i++) {
          this.sechali.push({
            name: tabssi[i].sio2,
            name1: tabssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
              .replace("公用设施", "")
              .replace("钢铁", ""),
          });
        }
        this.DrawChart();
        return;
      }
      if (tas == "TiO2") {
        for (let i = 0; i < tabssi.length; i++) {
          //this.sechali.push(tabssi[i].tio2);
          this.sechali.push({
            name: tabssi[i].tio2,
            name1: tabssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
              .replace("公用设施", "")
              .replace("钢铁", ""),
          });
        }
        this.DrawChart();
        return;
      }
      if (tas == "H2O") {
        for (let i = 0; i < tabssi.length; i++) {
          //this.sechali.push(tabssi[i].shuifen);
          this.sechali.push({
            name: tabssi[i].shuifen,
            name1: tabssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
              .replace("公用设施", "")
              .replace("钢铁", ""),
          });
        }
        this.DrawChart();
        return;
      }
      if (tas == "S") {
        for (let i = 0; i < tabssi.length; i++) {
          //this.sechali.push(tabssi[i].liu);
          this.sechali.push({
            name: tabssi[i].liu,
            name1: tabssi[i].gysmc
              .replace("有限公司", "")
              .replace("有限责任公司", "")
              .replace("矿业", "")
              .replace("公用设施", "")
              .replace("钢铁", ""),
          });
        }
        this.DrawChart();
        return;
      }
      for (let j = 0; j < tabssi.length; j++) {
        //this.sechali.push(tabssi[j][tas]);
        this.sechali.push({
          name: tabssi[j][tas],
          name1: tabssi[j].gysmc
            .replace("有限公司", "")
            .replace("有限责任公司", "")
            .replace("矿业", "")
            .replace("公用设施", "")
            .replace("钢铁", ""),
        });
      }
      console.log(this.sechali, 9999999);
      this.DrawChart();
    },
    //第二个
    DrawChart() {
      // axios.get("http://10.6.1.129/sop_api/test.php?sid="+id).then((res) => {

      // let data = res.data[0];
      var zzz = this.sechali.sort(this.compare("name"));
      var category = [];
      var traton = [];
      for (let i = 0; i < zzz.length; i++) {
        category.push(
          zzz[i].name1
            .replace("有限公司", "")
            .replace("有限责任公司", "")
            .replace("矿业", "")
            .replace("公用设施", "")
            .replace("钢铁", "")
        );
        traton.push(zzz[i].name);
      }

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("bott_c"));
      // var category = this.fyz;
      // var traton = this.sechali.sort(function (a, b) {
      //   return a - b;
      // });
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
          right: "2%",
          left: "6%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            data: category,
            splitLine: { show: false },
            //x轴轴线
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
            // x轴字体
            axisLabel: {
              margin: 10,
              color: "#90B9CC",
              textStyle: {
                fontSize: 10,
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
            splitLine: { show: false },
            axisTick: {
              //y轴刻度线
              show: false,
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "50%", //两边的大小
            backgroundColor: "#142a53", //滚动条颜色
            borderColor: "rgba(0,0,0,0)",
            left: "1%",
            start: 0, //数据窗口范围的起始百分比
            end: 25,
            width: "100%",
            height: 6,
            bottom: 3,
          },
        ],
        series: [
          {
            type: "bar",
            data: traton,
            barWidth: "20px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#1268f3", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#08a4fa", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#01ccfe", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };
      myChart.setOption(option, true);
      // });
    },
    //第一个
    draw() {
      console.log(this.fxsjdxl, 656565655);
      var zzz = this.fxsjdxl.sort(this.compare("name"));
      var category = [];
      var testada = [];
      for (let i = zzz.length - 1; i >= 0; i--) {
        category.push(
          zzz[i].name1
            .replace("有限公司", "")
            .replace("有限责任公司", "")
            .replace("矿业", "")
            .replace("公用设施", "")
            .replace("钢铁", "")
        );
        testada.push(zzz[i].name);
      }
      var myChart = echarts.init(document.getElementById("bott_l"));
      //y轴
      // var category = this.fyz;
      // var testada = this.fxsjdxl.sort(function (a, b) {
      //   return a - b;
      // });
      var hlsada = this.fxjhdxl;
      var jhdxlls = this.jhdxlslt;

      let jhdxlls_strand = [];

      category.map((v, i) => {
        jhdxlls_strand.push(jhdxlls);
      });

      console.log(jhdxlls, "我是哈哈");
      console.log(category, 5465465);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        backgroundColor: "rgb(42, 53, 75)",
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
          left: "20%",
          right: "5%",
          top: "17%",
          bottom: "1%",
        },
        xAxis: [
          {
            type: "value",
            splitLine: {
              //网格线
              show: false,
            },
            data: "jhdxlls",
            axisLine: {
              show: false,
            },
            axisLabel: {
              //  改变y轴字体颜色和大小
              //formatter: '{value} m³ ', //  给y轴添加单位
              textStyle: {
                color: "rgba(144,185,204,1)",
                fontSize: 10,
              },
            },
            axisTick: {
              show: false,
            },
          },
          {
            type: "value",
            splitLine: {
              //网格线
              show: false,
            },
            axisLabel: {
              //  改变y轴字体颜色和大小
              //formatter: '{value} m³ ', //  给y轴添加单位
              textStyle: {
                color: "rgba(144,185,204,1)",
                fontSize: 10,
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
            color: "#000",
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: "rgba(144,185,204,1)",
              fontSize: 10,
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
        dataZoom: [
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "50%", //两边的大小
            backgroundColor: "#142a53", //滚动条颜色
            borderColor: "rgba(0,0,0,0)",
            start: 80, //数据窗口范围的起始百分比
            end: 100,
            width: 8,
            height: "80%",
            bottom: 10,
            right: 10,
            textStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
        ],
        series: [
          {
            name: "实际兑现率",
            type: "bar",
            xAxisIndex: 1,
            data: testada,
            barWidth: 14,
            barGap: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#1268f3", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#08a4fa", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#01ccfe", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "计划兑现率",
            type: "line",
            xAxisIndex: 1,
            data: jhdxlls_strand,
            barWidth: 14,
            barGap: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "red", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "red", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };
      myChart.setOption(option, true);
    },
    compare(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    },
    // 第三个
    DrawChart1() {
      // axios.get("http://10.6.1.129/sop_api/test.php?sid="+id).then((res) => {

      // let data = res.data[0];
      // 基于准备好的dom，初始化echarts实例
      // var category = this.fyz;
      // console.log(this.sechalists, 133333);
      var zzz = this.sechalists.sort(this.compare("name"));
      // console.log(frnamevalue);
      var frnamevalue = [];
      var category = [];
      for (let i = zzz.length - 1; i >= 0; i--) {
        frnamevalue.push(zzz[i].name);
        category.push(
          zzz[i].name1
            .replace("有限公司", "")
            .replace("有限责任公司", "")
            .replace("矿业", "")
            .replace("公用设施", "")
            .replace("钢铁", "")
        );
      }
      var myChart = echarts.init(document.getElementById("bott_r"));
      var option = {
        backgroundColor: "#2A354B",
        barWidth: 10,
        grid: {
          left: "20%",
          right: "6%",
          top: "16%",
          bottom: "1%",
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
              fontSize: 10,
            },
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "50%", //两边的大小
            backgroundColor: "#142a53", //滚动条颜色
            borderColor: "rgba(0,0,0,0)",
            start: 80, //数据窗口范围的起始百分比
            end: 100,
            width: 8,
            height: "80%",
            bottom: 10,
            right: 10,
          },
        ],
        yAxis: {
          type: "category",
          data: category,
          splitLine: { show: false },
          // max: 30,
          // minInterval: 6,
          //interval: 6,
          splitLine: {
            show: false,
          },
          axisTick: {
            //y轴刻度线
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
            show: false,
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: "rgba(144,185,204,1)",
              fontSize: 10,
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
            barWidth: 14, //柱图宽度
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "rgba(250,250,250,0.6)",
                    fontSize: 10,
                    fontWeight: 600,
                  },
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#1268f3", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#08a4fa", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#01ccfe", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: 0,
              },
            },
            data: frnamevalue,
          },
        ],
      };
      myChart.setOption(option, true);
      // });
    },
    hdressmon() {
      var myChart = echarts.init(document.getElementById("zdldtus"));
      let value = 92;
      let order = "Ⅳ";
      let option = {
        grid: {
          left: "20%",
          right: "6%",
          top: "16%",
          bottom: "1%",
        },
        title: [
          // {
          //   text: value,
          //   left: "60%",
          //   top: "60%",
          //   subtext: "限电轮次：" + order,
          //   textAlign: "center",
          //   textStyle: {
          //     fontSize: "50",
          //     fontWeight: "400",
          //     color: "#8b8d90",
          //     textAlign: "center",
          //   },
          // },
          // {
          //   text: "分",
          //   left: "55%",
          //   top: "47.5%",
          //   textAlign: "center",
          //   textStyle: {
          //     fontSize: "25",
          //     fontWeight: "400",
          //     color: "#8b8d90",
          //     textAlign: "center",
          //   },
          // },
        ],
        radar: {
          indicator: [
            { name: "单位增加值能耗", max: 6500 },
            { name: "能耗消费进度", max: 6000 },
            { name: "柔性调控参与率", max: 30000 },
            { name: "亩均论英雄评级", max: 38000 },
            { name: "腾出用能总量", max: 52000 },
          ],
        },

        series: [
          {
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                areaStyle: {
                  color: "rgba(64, 158, 255, 0.2)",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option, true);
    },
  },
};
</script>

// this.$router.push({ path: "/", query: {} });
<style scoped>
/* 雷达图 */
.zdldtus {
  width: 21.5vw;
  height: 23vh;
  /* border: solid 1px red; */
  background-color: #353d52;
}
/* 左侧第二行 */
.leftsecound {
  display: flex;
  justify-content: space-between;
  width: 21.5vw;
  margin-top: 1vh;
}
.leftsectwo {
  background-color: #1d3466;
  width: 10.5vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leftfks {
  border: solid 1px red;
  width: 21.5vw;
  height: 24vw;
  margin-left: 1vw;
}
.rightfks {
  height: 24vw;
  border: solid 1px red;
  width: 36.5vw;
}
.zfks {
  display: flex;
  justify-content: flex-start;
  width: 59vw;
}
/* 方块样式 */
.zfkyas {
  width: 59vw;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5vh;
}
.fkyss {
  background-color: #1d3466;
  width: 6.8vw;
  height: 10vh;
  margin-left: 0.5vw;
}
.zbttc {
  margin-top: 2vh;
  margin-left: 1vw;
}
.lstc {
  color: #fff;
  font-size: 1vw;
}
.yuelejsj {
  color: #bde5f7;
  font-size: 0.8vw;
}
.tcstyle {
  background-color: #2c3b4e;
  width: 60vw;
  height: 70vh;
}
.histtory {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.xubut {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #ffffff;
  height: 2vh;
  width: 7.5vw;
  border-radius: 0.3vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
  margin-right: 0.5vw;
}
.xubut option {
  background-color: #1d3466;
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
.mathsma {
  font-weight: lighter;
}
/* 供应商名字过长 */
.gysnames {
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
/* 切换版本按钮 */
.qhbb {
  background-color: #1d3466;
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
  font-size: 0.7vw;
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
  font-size: 0.7vw;
  margin-left: 0.3vw;
}
/* 性价比排序 */
.sxjbpx {
  color: #fff;
  font-size: 0.8vw;
  padding: 0.7vw 0 0 1vw;
  display: flex;
  align-items: center;
}
/* table背景 */
.tablebackground {
  background-color: #353d52;
  width: 99.4vw;
  height: 39.5vh;
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
  /* margin-left: 0.3vw; */
  margin-top: 0.5vh;
}
.xjbpxlisize {
  width: 29.2vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  align-items: center;
}
.xjbpxlisize1 {
  /* width: 49.2vw; */
  width: 40vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xjbpxlisize2 {
  width: 29.2vw;
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
  width: 29.2vw;
  height: 39vh;
  background-color: #353d52;
}
.bott_c {
  width: 40vw;
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
  height: 33.5vh;
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
  color: #fff;
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