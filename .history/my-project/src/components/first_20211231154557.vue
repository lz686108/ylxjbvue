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
            <td
              @click="
                opentancs(
                  item.gysmc,
                  item.thxwd,
                  item.ljqd,
                  item.yxldx,
                  item.zjxqd,
                  item.sjdxl,
                  item.tfe,
                  item.sio2,
                  item.Al2O3,
                  item.P,
                  item.MnO,
                  item.jhdxl
                )
              "
              style="cursor: pointer"
            >
              <img src="../assets/chi.png" style="width: 1vw; height: 2vh" />
            </td>
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

    <div class="bott">
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
    <div class="histtory" v-show="histtorytcs == true">
      <div class="tcstyle">
        <!-- 历史数据 -->
        <div class="zbttc">
          <div>
            <span class="lstc">历史数据</span>
            &nbsp;<span class="yuelejsj">(数值取月累计数据)</span>
          </div>
          <div @click="gbzdtcs()" class="qxzetc">❌</div>
        </div>
        <!-- 基本数据 -->
        <div class="yuelejsj zbttc" style="color: #fff">基本数据</div>
        <!-- 8个横向方块 -->
        <div class="zfkyas">
          <div class="fkyss" style="margin-left: 1vw">
            <div class="biaotifk">物料名称</div>
            <div class="neirongtc">{{ this.tcsjshz.gysmc }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">料种</div>
            <div class="neirongtc">{{ this.ztbbxxsys.sterilise }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">定价方式</div>
            <div class="neirongtc">{{ this.ztbbxxsys.pricingType }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">采购质量</div>
            <div class="neirongtc">{{ this.ztbbxxsys.purchasingQuality }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">同性化温度</div>
            <div class="neirongtc">{{ this.tcsjshz.thxwd }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">连晶温度</div>
            <div class="neirongtc">{{ this.tcsjshz.ljqd }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">液相流动性</div>
            <div class="neirongtc">{{ this.tcsjshz.yxldx }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">粘接相强度</div>
            <div class="neirongtc">{{ this.tcsjshz.zjxqd }}</div>
          </div>
        </div>
        <!-- 纵向两个方块 -->
        <div class="zfks">
          <!-- 左 -->
          <div class="leftfks">
            <div class="yuelejsj zbttc" style="color: #fff; margin-left: 0vw">
              数据(月均数据)
            </div>
            <!-- 第二行 -->
            <div class="taallclassed">
              <div class="leftxiugaian">
                <div class="leftsecound">
                  <div class="leftsectwo" style="margin-left: 0.5vw">
                    <span class="yuelejsj">计划兑现率</span>
                    <span class="yuelejsj" style="color: orange">{{
                      this.tcsjshz.jhdxl
                    }}</span>
                    <span class="yuelejsj">%</span>
                  </div>
                  <div class="leftsectwo" style="margin-right: 0.5vw">
                    <span class="yuelejsj">实际兑现率</span>
                    <span class="yuelejsj" style="color: orange">{{
                      this.tcsjshz.sjdxl
                    }}</span>
                    <span class="yuelejsj">%</span>
                  </div>
                </div>
                <div style="background-color: #2a354b">
                  <div class="zdldtus" id="zdldtus"></div>
                  <!-- rgba(255,0,0,0) -->
                  <!-- 标准部分 -->
                  <div class="testallc">
                    <span class="busq">指标</span>
                    <span class="busq">标准</span>
                  </div>
                  <div
                    class="bzztst"
                    style="margin-top: 0.5vh"
                    v-for="(item, index) in bbbsz"
                    :key="index"
                  >
                    <span class="busq">{{ item.item }}</span>
                    <span class="busq">
                      {{ item.price1 }}-{{ item.price2 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右 -->
          <div class="rightfks">
            <!-- 第一行 -->
            <div class="tastbaled">
              <div>
                <div class="twownzi sizes">
                  <div style="margin-top: 1.2vh">历史数据</div>
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
                      v-model="lieseletone"
                      @change="selectzztclas()"
                    >
                      <option v-for="(item, index) in ysmcli" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- 第二行 -->
              <div
                v-loading="loading1"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                class="tommyse"
                id="tommyse"
              ></div>
            </div>
          </div>
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
      loading1: false,
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
      //弹窗数据数组
      tcsjshz: [],
      // 雷达图数组
      leidapht: [],
      //总图版本信息
      ztbbxxsys: [],
      //折叠信息图的柱状图的下拉绑定
      lieseletone: "",
      //折叠柱状图柱状图的值
      timeID: [],
      value_list: [],
      //柱状图带过去的供应商名称
      zzgysmc: "",
      // 标准表数据
      bbbsz: [],
    };
  },
  mounted() {
    this.histtorytcs = false;
    this.DrawChart();
    this.DrawChart1();
    this.draw();
    this.selectxus();
    this.bzxxcx();
    //this.zdldt();
    this.ssexl = this.ysmcli[0];
    this.xlmrs = this.sechslis[0];
    this.lieseletone = this.ysmcli[0];
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
        url: "http://10.6.1.179:40013/mpd/ylxjb/luruf/selectxubut",
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
        url: "http://10.6.1.179:40013/mpd/ylxjb/luruf/selectTableBybbh",
        params: {
          banbenh: this.banbenhao,
          pxgz: this.paixunum,
        },
      }).then((res) => {
        this.tablelistssi = res.data;
        this.fyz = [];
        this.fxsjdxl = [];
        this.fxjhdxl = [];
        this.gysysm();
        this.secharsmount();
        console.log(this.tablelistssi);
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
      var zzz = this.fxsjdxl.sort(this.compare("name1"));
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
      var zzz = this.sechalists.sort(this.compare("name"));
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
    // 雷达图
    hdressmon() {
      let value = 92;
      let order = "Ⅳ";
      var tats = [];
      // let data = Object.values(this.tcsjshz);
      // data.map((v, i) => {
      //   tats[i] = v;
      // });
      tats[0] = this.leidapht.tfe;
      tats[1] = this.leidapht.sio2;
      tats[2] = this.leidapht.P;
      tats[3] = this.leidapht.MnO;
      tats[4] = this.leidapht.Al2O3;
      var myChart = echarts.init(document.getElementById("zdldtus"));
      let option = {
        backgroundColor: "#2A354B",
        radar: {
          indicator: [
            { name: "TFe", max: 70 },
            { name: "SiO2", max: 10 },
            { name: "P", max: 0.1 },
            { name: "MnO", max: 15 },
            { name: "Al2O3", max: 10 },
          ],
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#313B51", // 设置网格的颜色
            },
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: "rgba(255,0,0,0)", // 图表背景的颜色
            },
          },
          axisLine: {
            // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
          },
          center: ["50%", "58%"], // 图的位置
        },

        grid: {
          position: "center",
        },
        series: [
          {
            type: "radar",
            symbolSize: 4,
            data: [
              {
                value: tats,
                areaStyle: {
                  color: "#4B99FF",
                  borderColor: "#4B99FF",
                },
                itemStyle: {
                  normal: {
                    color: "#4B99FF",
                  },
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option, true);
    },
    // 折叠柱状图
    dexls() {
      var myChart = echarts.init(document.getElementById("tommyse"));
      let option = {
        backgroundColor: "#2A354B",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "3%",
          top: "10%",
          containLabel: true,
        },
        legend: {
          data: ["用户总数", "新增会员", "用户", "其它"],
          left: "20px",
          top: 0,
          icon: "path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
          textStyle: {
            color: "#333",
          },
          itemWidth: 10,
          itemHeight: 10,
        },
        xAxis: {
          type: "category",
          data: this.timeID,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3D4D6E",
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#90B9CC",
            textStyle: {
              fontSize: 12,
            },
          },
        },
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
            end: 50,
            width: "100%",
            height: 6,
            bottom: 3,
          },
        ],
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#3D4D6E",
            },
          },
          axisLabel: {
            color: "#90B9CC",
            textStyle: {
              fontSize: 12,
            },
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            data: this.value_list,
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
    },
    // 关闭弹窗
    gbzdtcs() {
      this.histtorytcs = false;
    },
    // 查询总图版本信息
    selectztbbxis(gysmc) {
      (this.ztbbxxsys = []),
        axios({
          method: "post",
          url: "http://10.6.1.179:40013/mpd/ylxjb/luruf/selecttcymsj",
          params: {
            bbh: this.banbenhao,
            gysmc: gysmc,
          },
        }).then((res) => {
          this.ztbbxxsys = res.data;
        });
    },
    //折叠弹窗 柱状图信息
    selectzztclas() {
      // this.zztdz = [];.
      this.loading1 = true;

      axios({
        method: "post",
        url: "http://10.6.1.179:40013/mpd/ylxjb/luruf/selecttypeofzut",
        params: {
          gysmc: this.zzgysmc,
          ysmc: this.lieseletone,
        },
      }).then((res) => {
        let data = [];
        data = res.data;
        // this.zztdz
        data.map((v, i) => {
          this.value_list[i] = v.value;
          this.timeID[i] = v.date;
        });
        this.dexls();
        this.loading1 = false;
      });
    },
    // 打开弹窗
    opentancs(
      gysmc,
      thxwd,
      ljqd,
      yxldx,
      zjxqd,
      sjdxl,
      tfe,
      sio2,
      Al2O3,
      P,
      MnO,
      jhdxl
    ) {
      this.tcsjshz = [];
      this.zzgysmc = gysmc;
      if (sjdxl == "" || sjdxl == null) {
        this.tcsjshz = {
          gysmc: gysmc,
          thxwd: thxwd,
          ljqd: ljqd,
          yxldx: yxldx,
          zjxqd: zjxqd,
          sjdxl: 0,
          jhdxl: jhdxl.replace("%", ""),
        };
      } else {
        this.tcsjshz = {
          gysmc: gysmc,
          thxwd: thxwd,
          ljqd: ljqd,
          yxldx: yxldx,
          zjxqd: zjxqd,
          sjdxl: sjdxl.replace("%", ""),
          jhdxl: jhdxl.replace("%", ""),
        };
      }
      this.leidapht = [];
      this.leidapht = {
        tfe: tfe,
        sio2: sio2,
        Al2O3: Al2O3,
        P: P,
        MnO: MnO,
      };
      // 查询折叠总图信息
      this.selectztbbxis(gysmc);
      this.selectzztclas(gysmc);
      this.bzxxcx();
      this.histtorytcs = true;
      // 雷达图
      this.hdressmon();
    },
    // 标准信息查询
    bzxxcx() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40013/mpd/ylxjb/luruf/selectbzzxx",
        params: {},
      }).then((res) => {
        this.bbbsz = res.data;
      });
    },
  },
};
</script>

// this.$router.push({ path: "/", query: {} });
<style scoped>
.qxzetc {
  color: #bde5f7;
  margin-right: 1vw;
  font-size: 0.5vw;
  margin-top: 0.5vh;
  cursor: pointer;
}
.tommyse {
  width: 36vw;
  height: 47vh;
}
.twownzi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36vw;
  height: 5vh;
}
.sizes {
  font-size: 0.8vw;
  color: #fff;
}
.tastbaled {
  width: 34vw;
  height: 24vw;
  margin-left: 0.5vw;
}
/* 标准 */
.testallc {
  background-color: #142752;
  width: 20.5vw;
  height: 3vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7vw;
  color: #fff;
  margin-left: 0.5vw;
}
.bzztst {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6vw;
  width: 20.5vw;
  color: #fff;
  background-color: #1e2d42;
  margin-top: 0.3vh;
  margin-left: 0.5vw;
  height: 2.3vh;
}
.busq {
  width: 10.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8faff;
}
/* 雷达图 */
.zdldtus {
  width: 20.5vw;
  height: 23vh;
}
/* 左侧第二行 */
.leftsecound {
  display: flex;
  justify-content: space-between;
  width: 21.5vw;
  margin-top: 1vh;
  background-color: #2a354b;
}
/* .leftxiugaian {
  border: solid 1px blue;
  display: flex;
} */
.taallclassed {
  background-color: #2a354b;
  width: 21.5vw;
  height: 47vh;
}
.leftsectwo {
  background-color: #1e2d42;
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
}
.leftfks {
  width: 21.5vw;
  height: 26vw;
  margin-left: 1vw;
}
.rightfks {
  height: 26vw;
  width: 38vw;
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
  background-color: #2a354b;
  width: 6.8vw;
  height: 10vh;
  margin-left: 0.5vw;
  font-size: 0.8vw;
  color: #fff;
}
/* 弹窗8个方快标题 */
.biaotifk {
  font-size: 0.7vw;
  color: #809dd2;
  margin-top: 0.5vh;
  margin-left: 0.3vw;
}
.neirongtc {
  margin-top: 0.5vh;
  margin-left: 0.3vw;
  font-size: 0.85vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bde5f7;
}
.zbttc {
  margin-top: 2vh;
  margin-left: 1vw;
  display: flex;
  justify-content: space-between;
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
  background-color: #091022;
  width: 60vw;
  height: 73vh;
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
