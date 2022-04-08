<template>
  <div>
    <!-- 矿粉性价比预测版本信息 -->
    <div class="bbxx">
      <!-- 切换版本信息模块 -->
      <div class="qhbb">
        <span style="color: #809dd2; margin-right: 0.5vw; margin-left: 0.5vw"
        >版本</span
        >
        <select v-model="banbenhao" class="xubut" @change="csbbxi()">
          <option v-for="(item, index) in selectxulists" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <!--      <div class="qhbb">-->
      <!--        <span style="color: #809dd2; margin-right: 0.5vw; margin-left: 0.5vw"-->
      <!--        >删除版本</span-->
      <!--        >-->
      <!--        <select v-model="scbbhcails" class="xubut">-->
      <!--          <option v-for="(item, index) in selectxulists" :key="index">-->
      <!--            {{ item }}-->
      <!--          </option>-->
      <!--        </select>-->
      <!--        <div class="oneblue" style="margin-left: 0.5vw" @click="scbbgcals()">-->
      <!--          删除-->
      <!--        </div>-->
      <!--      </div>-->


    </div>
    <!-- 第二行 -->
    <!-- 性价比排序 -->
    <div class="xjbpx">
      <span class="sxjbpx">性价比排序</span>
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
          <td>排名</td>
          <td style="width:10vw">物料名称</td>
          <td>出厂价格</td>
          <td>运费价格</td>
          <td>到厂价格</td>
          <td @click="list_sort('ad')" :class="biaotbs=='ad'?'ssors':''" style="cursor: pointer;">Ad</td>
          <td @click="list_sort('vdaf')" :class="biaotbs=='vdaf'?'ssors':''" style="cursor: pointer;">St,d</td>
          <td @click="list_sort('fcad')" :class="biaotbs=='fcad'?'ssors':''" style="cursor: pointer;">Qgr,d</td>
          <td @click="list_sort('std')" :class="biaotbs=='std'?'ssors':''" style="cursor: pointer;">Vdaf</td>
          <td @click="list_sort('m25')" :class="biaotbs=='m25'?'ssors':''" style="cursor: pointer;">FCd</td>
          <td @click="list_sort('cri')" :class="biaotbs=='cri'?'ssors':''" style="cursor: pointer;">Mt</td>
          <td @click="list_sort('csr')" :class="biaotbs=='csr'?'ssors':''" style="cursor: pointer;">Mad</td>
          <td>付款方式</td>
          <td>结算水分</td>
          <td>不含税价格</td>
          <td>烧结固体单耗</td>
          <td>吨烧燃耗单位成本</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in dcbg" :key="index">
          <td>{{ index + 1 }}</td>
          <td style="width:10vw">{{ item.gysmc }}</td>
          <td>{{ item.ccjg }}</td>
          <td>{{ item.yfjg }}</td>
          <td>{{ item.dcjg }}</td>
          <td>{{ item.ad }}</td>
          <td>{{ item.std }}</td>
          <td>{{ item.qgrd }}</td>
          <td>{{ item.vdaf }}</td>
          <td>{{ item.fcd }}</td>
          <td>{{ item.mt }}</td>
          <td>{{ item.mad }}</td>
          <td>{{ item.fkfs }}</td>
          <td>{{ item.jssf }}</td>
          <td>{{ item.bhsjg }}</td>
          <td>{{ item.sjgtdh }}</td>
          <td>{{ item.dsrhdwcb }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- 配煤方向决策 -->
    <div class="xjbpxli">
      <div class="xjbpxlisize">
        <span class="posi" style="margin-top: 1vh">配煤方向决策</span>
      </div>
      <div class="xjbpxlisize1">
        <div class="posi1" style="margin-top: 1vh">
          <span class="posi" style="margin-top: 1vh">化学元素排序分析</span>
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
            @change="functitacle()"
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
        <div style="margin-top: 1vh">
          <span class="posi">焦粉采购决策</span>
        </div>
      </div>
    </div>

    <div class="bott">
      <div class="bott_l" style="display: flex;justify-content: space-between;align-items: center">
        <div class="ykil" style="margin-left: 0.5vw">
          <div class="ding" style="display: flex;justify-content: flex-end;align-items: center">
            <span>烟煤</span>
            <img class="ding_img" src="../assets/jiantou1.png" v-if="jtera==1">
            <img class="ding_img" src="../assets/jiantou3.png" v-else>
          </div>
        </div>
        <div class="ykil" style="margin-right: 0.5vw">
          <div class="ding" style="display: flex;justify-content: flex-end;align-items: center">
            <span>无烟煤</span>
            <img class="ding_img1" src="../assets/jiantou2.png" v-if="jtera==1">
            <img class="ding_img1" src="../assets/jiantou4.png" v-else>
          </div>
        </div>
      </div>
      <div
        class="bott_c"
        id="sectie"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></div>
      <div class="bott_l" style="display: flex;justify-content: space-between;align-items: center">
        <div class="ykil" style="margin-left: 0.5vw">
          <div class="ding" style="display: flex;justify-content: flex-end;align-items: center">
            <span>焦粉</span>
            <img class="ding_img" src="../assets/jiantou1.png" v-if="jfcgje==1">
            <img class="ding_img" src="../assets/jiantou3.png" v-else>
          </div>
        </div>
        <div class="ykil" style="margin-right: 0.5vw">
          <div class="ding" style="display: flex;justify-content: flex-end;align-items: center">
            <span>无烟煤</span>
            <img class="ding_img1" src="../assets/jiantou2.png" v-if="jfcgje==1">
            <img class="ding_img1" src="../assets/jiantou4.png" v-else>
          </div>
        </div>
      </div>
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
            <div class="neirongtc">{{ this.distributorNames }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">付款方式</div>
            <div class="neirongtc">{{ this.sterilises }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">合同价格</div>
            <div class="neirongtc">{{ this.jshtjgs }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">采购量</div>
            <div class="neirongtc">{{ this.cgls }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">结算水分</div>
            <div class="neirongtc">{{ this.jssds }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">结算粉末</div>
            <div class="neirongtc">{{ this.jsfms }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">不含税价格</div>
            <div class="neirongtc">{{ this.bhsjg }}</div>
          </div>
          <div class="fkyss">
            <div class="biaotifk">归属地</div>
            <div class="neirongtc">{{ this.gsdgilscias }}</div>
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
                    <span class="yuelejsj">结算粉末</span>
                    <span class="yuelejsj" style="color: orange">{{
                        this.jssds
                      }}</span>
                    <span class="yuelejsj">吨</span>
                  </div>
                  <div class="leftsectwo" style="margin-right: 0.5vw">
                    <span class="yuelejsj">结算水分</span>
                    <span class="yuelejsj" style="color: orange">{{
                        this.jsfms
                      }}</span>
                    <span class="yuelejsj">吨</span>
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
                  >
                    <span class="busq">Ad</span>
                    <span class="busq">
                      0-13.5
                    </span>
                  </div>
                  <div
                    class="bzztst"
                    style="margin-top: 0.5vh"
                  >
                    <span class="busq">St,d</span>
                    <span class="busq">
                      0-0.7
                    </span>
                  </div>
                  <div
                    class="bzztst"
                    style="margin-top: 0.5vh"
                  >
                    <span class="busq">CSR</span>
                    <span class="busq">
                      60>
                    </span>
                  </div>
                  <div
                    class="bzztst"
                    style="margin-top: 0.5vh"
                  >
                    <span class="busq">K</span>
                    <span class="busq">
                      0-0.25
                    </span>
                  </div>
                  <div
                    class="bzztst"
                    style="margin-top: 0.5vh"
                  >
                    <span class="busq">Mt</span>
                    <span class="busq">
                      0-10
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
              <!--$ 第二行 -->
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
    <div class="footer">
      责任工程师：张新硕 &nbsp; &nbsp;IT开发:&nbsp;李震 &nbsp;
      &nbsp;UI设计:&nbsp;朱智博
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
        "Ad",
        "St,d",
        "Qgr,d",
        "Vdaf",
        "FCd",
        "Mt",
        "Mad",
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
      bian: true,
      //表头变色
      biaotbs: "yxpwduj",
      //基准值修改
      jzzxg: "",
      //顶层表格
      dcbg: "",
      //区间组件第一个
      value1: "",
      //区间组件第二个
      value2: "",
      /**
       * 第二个图的内容
       * */
      sectiongils: [],
      //第二个图的平均数
      sematgrias: [],
      //采购占比先把采购量垒加 然后用单个采购量比总采购量
      murscglgil: "",
      /**
       * 历史弹窗的字段
       * */
      distributorNames: "",
      sterilises: "",
      jshtjgs: "",
      cgls: "",
      gjbs: "",
      jjbs: "",
      mjbs: "",
      mjcbs: "",
      ads: "",
      vdafs: "",
      fcads: "",
      cris: "",
      csrs: "",
      jssds: "",
      jsfms: "",
      gsdgilscias: "",
      bhsjgs: "",
      /**
       * 折叠弹窗柱状图
       */
      tmilkestial: "",
      /**
       * 饼图
       */
      btbugrs: [],
      /**
       * 基准值毛焦成本
       */
      jzzdmjcbgcis: "",
      //权限
      quanxiancard: "",
      //删除版本号
      scbbhcails: "",
      //删除组件
      visible: false,
      //顶层报表标准值
      tatlesonment: [],
      //区间查询中使用的版本号默认使用最近一笔的版本号
      qursketgor: "",
      //箭头
      jtera: "",
      ym: "",
      //焦粉采购决策
      jfcgje: "",
    };
  },
  mounted() {
    this.quanxiancard = sessionStorage.getItem("card");
    (this.quanxiancard)
    this.value1 = this.convertToDate(new Date().getTime()); //格式化日期并赋值
    this.value2 = this.convertToDate(new Date().getTime()); //格式化日期并赋值
    this.histtorytcs = false;
    //初始化版本号
    this.svered();
    //this.seledctpdxzes();
  },
  methods: {
    /**
     *初始化查询焦炭顶层标准维护
     */
    selectbbtsalsec() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectjtdcxxwh",
        params: {},
      }).then((res) => {
        this.tatlesonment = res.data;
      });
    },
    /**
     * 权限删除版本号
     */
    scbbgcals() {
      if (this.quanxiancard != "220570" && this.quanxiancard != "220589") {
        this.$message("无删除权限");
        return
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/deletebbhintersns",
        params: {
          bbh: this.scbbhcails,
        },
      }).then((res) => {
        this.svered();
        this.$message("版本号删除成功");
      });
    },
    /**
     * 饼图数据信息查询(区间)
     */
    btjcxxcxqj() {
      this.btbugrs = [];
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectbtcopy1qj",
        params: {
          bbh: this.banbenhao,
          tml: this.value1,
          tal: this.value2,
        },
      }).then((res) => {
        this.btbugrs.push({
          value: res.data.sx,
          name: "山西"
        })
        this.btbugrs.push({
          value: res.data.nm,
          name: "内蒙"
        })
        this.btbugrs.push({
          value: res.data.hlj,
          name: "黑龙江"
        })
        this.btbugrs.push({
          value: res.data.ln,
          name: "辽宁"
        })
        if (res.data.jl == "0.0") {
          this.btbugrs.push({
            value: res.data.jl,
            name: "吉林"
          })
        }
        if (res.data.hb == "0.0") {
          this.btbugrs.push({
            value: res.data.hb,
            name: "河北"
          })
        }
        if (res.data.jk == "0.0") {
          this.btbugrs.push({
            value: res.data.jk,
            name: "进口"
          })
        }
        (this.btbugrs);
        this.btuils();
      });
    },
    // /**
    //  *饼图数据信息查询(版本)
    //  */
    // btjcxxcx() {
    //   this.btbugrs = [];
    //   axios({
    //     method: "post",
    //     url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectbtcopy1",
    //     params: {
    //       bbh: this.banbenhao,
    //     },
    //   }).then((res) => {
    //     this.btbugrs.push({
    //       value: res.data.sx,
    //       name: "山西"
    //     })
    //     this.btbugrs.push({
    //       value: res.data.nm,
    //       name: "内蒙"
    //     })
    //     this.btbugrs.push({
    //       value: res.data.hlj,
    //       name: "黑龙江"
    //     })
    //     this.btbugrs.push({
    //       value: res.data.ln,
    //       name: "辽宁"
    //     })
    //     if (res.data.jl == "0.0") {
    //       this.btbugrs.push({
    //         value: res.data.jl,
    //         name: "吉林"
    //       })
    //     }
    //     if (res.data.hb == "0.0") {
    //       this.btbugrs.push({
    //         value: res.data.hb,
    //         name: "河北"
    //       })
    //     }
    //     if (res.data.jk == "0.0") {
    //       this.btbugrs.push({
    //         value: res.data.jk,
    //         name: "进口"
    //       })
    //     }
    //     this.btuils();
    //   });
    // },
    /**
     * 第三个饼图
     */
    btuils() {
      var myChart = echarts.init(document.getElementById("bastils"));
      var option = {
        backgroundColor: "#2A354B",
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}%",
        },
        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          },
        },
        series: [
          {
            name: '区域占比',
            type: 'pie',
            radius: '70%', //饼图大小
            center: ["50%", "50%"],
            color: ["#013E7A", "#01498F", "#0161BF", "#017CF4"],
            data: this.btbugrs,
            label: {
              normal: {
                formatter: "{b|{b}} {c|{c}%}",
                // show: false,
                rich: {
                  c: {
                    color: "#E0B564",
                    fontSize: 15,
                    fontWeight: "bold",
                    lineHeight: 35,
                  },
                  b: {
                    color: "#90B9CC",
                    fontSize: 10,
                    height: 35,
                  },
                },
              },
            },
            //指向导线的颜色
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)",
                },
                smooth: 0.2,
                length: 20,
                length2: 20,
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option, true);
    },
    /**
     * 初始化日期区间组件
     *
     */
    convertToDate(date) {
      var date = new Date(date);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = m < 10 ? "0" + m : m; //月小于10，加0
      d = d < 10 ? "0" + d : d; //day小于10，加0
      return y + "-" + m + "-" + d;
    },
    /**
     * 顶层根据版本进行信息测算
     * @param this.banbenhao 版本号
     *
     */
    csbbxi() {
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectjcmxbbh",
        params: {
          bbh: this.banbenhao,
        },
      }).then((res) => {
        console.log(res.data, 851432)
        //总采购量
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].gysmc = res.data[i].gysmc.replace("有限责任公司", "")
            .replace("矿业", "")
            .replace("公用设施", "")
            .replace("钢铁", "")
            .replace("国际贸易", "")
            .replace("分公司", "")
            .replace("有限公司", "")
            .replace("销售", "").substring(0, 7)
        }
        this.dcbg = res.data.sort((a, b) => a['dsrhdwcb'] - b['dsrhdwcb']);
        //化学元素排序分析 默认ad
        this.ssexl = this.ysmcli[0]
        //ysmcli
        //第二个图
        this.functitacle();
        this.seledctpdxzes();
        this.loading = false;
      });
    },
    //查询箭头
    seledctpdxzes() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/seledctpdxzes",
        params: {
          bbh: this.banbenhao,
        },
      }).then((res) => {
        console.log(res.data)
        if (res.data == "烟煤") {
          this.jtera = 1
        } else {
          this.jtera = 2
        }
      })
    },
    /**
     * 顶层根据版本进行信息测算(区间)
     * @param this.banbenhao 版本号
     *
     */
    taml() {
      var tal = new Date(this.value1).getTime();
      var tml = new Date(this.value2).getTime();
      var today = new Date().getTime();
      if (tal > today || tml > today) {
        this.$message("不可今天之后的数据");
        return;
      }
      if (tal > tml) {
        this.$message("开始时间大于结束时间");
        return;
      }
      this.loading = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selecttocopycopyymqj",
        params: {
          bbh: this.qursketgor,
          tml: this.value1,
          tal: this.value2,
        },
      }).then((res) => {
        console.log(res.data)
        //总采购量
        var cencglgls = 0;
        //默认根据ad排名
        this.btbugrs = [];
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].distributorName = res.data[i].distributorName.replace("有限责任公司", "").replace("有限公司", "")
          cencglgls = cencglgls + res.data[i].cgl * 1;
        }
        var cenctils = 0;
        for (let i = 0; i < this.btbugrs.length; i++) {
          cenctils = cenctils * 1 + this.btbugrs[i].value * 1;
        }
        this.murscglgil = cencglgls;
        this.dcbg = res.data.sort((a, b) => a['dwyxrcb'] - b['dwyxrcb']);
        if (this.dcbg[0].gysmc == "焦粉") {
          this.jfcgje = 1;
        } else {
          this.jfcgje = 2;
        }
        console.log(this.dcbg)
        //第一个图
        this.draw();
        this.functitacle();
        this.btuils();
        this.loading = false;
      });
    },
    svered() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectbehedjcmx",
        params: {},
      }).then((res) => {
        this.selectxulists = res.data;
        this.banbenhao = this.selectxulists[this.selectxulists.length - 1]
        this.qursketgor = this.selectxulists[this.selectxulists.length - 1]
        this.scbbhcails = this.selectxulists[this.selectxulists.length - 1]
        //顶层测算方法
        this.csbbxi();
        this.seledctpdxzes();
      });
    },
    list_sort(e) {
      this.biaotbs = e;
      (e);
      if (this.bian) {
        this.dcbg = this.dcbg.sort((a, b) => a[e] - b[e]);
        this.bian = false;
      } else {
        this.dcbg = this.dcbg.sort((a, b) => b[e] - a[e]);
        this.bian = true;
      }
    },
    threebutton(index) {
      this.paixunum = index;
      this.selecttableall();
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
    functitacle() {
      this.sectiongils = [];
      var biathed = [];
      //平均数
      var matyouioset = [];
      switch (this.ssexl) {
        case "Ad":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].ad
            })
          }
          break;
        case "St,d":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].std
            })
          }
          break;
        case "Qgr,d":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].qgrd
            })
          }
          break;
        case "Vdaf":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].vdaf
            })
          }
          break;
        case "FCd":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].fcd
            })
          }
          break;
        case "Mt":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].mt
            })
          }
          break;
        case "Mad":
          for (let i = 0; i < this.dcbg.length; i++) {
            biathed.push({
              cma: this.dcbg[i].gysmc.substring(0, 7),
              cma1: this.dcbg[i].mad
            })
          }
          break;
        default:
          break;
      }
      this.sectiongils = biathed;
      // (this.sectiongils)
      var toi = 0;
      for (let i = 0; i < biathed.length; i++) {
        toi += biathed[i].cma1 * 1;
        // (toi)
      }
      toi = toi * 1 / this.sectiongils.length
      for (let i = 0; i < biathed.length; i++) {
        matyouioset.push(toi.toFixed(2));
      }
      this.sematgrias = matyouioset;
      this.DrawChart();
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
    getEchart1() {
      this.echart1 = echarts.init(document.getElementById("echartContainer1"));
      // 绘制图表

      this.echart1.setOption({
        backgroundColor: "#1e2d42",
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}%",
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "70%",
            center: ["52%", "60%"],
            color: ["#013E7A", "#01498F", "#0161BF", "#017CF4"],
            data: this.echartarr1.sort(function (a, b) {
              return a.value - b.value;
            }),
            // roseType: "radius",

            label: {
              normal: {
                formatter: "{b|{b}} {c|{c}%}",
                // show: false,
                rich: {
                  c: {
                    color: "#E0B564",
                    fontSize: 15,
                    fontWeight: "bold",
                    lineHeight: 35,
                  },
                  b: {
                    color: "#A8B9CB",
                    fontSize: 10,
                    height: 35,
                  },
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)",
                },
                smooth: 0.2,
                length: 20,
                length2: 20,
              },
            },
            // itemStyle: {
            //   normal: {
            //     shadowColor: "rgba(0, 0, 0, 0.8)",
            //     shadowBlur: 50,
            //   },
            // },
          },
        ],
      });

      this.echart1.on("click", (param) => {
        if (this.aaa) {
          this.aaa = false;
          this.chooseplanttype(param.data.name);
          setTimeout(() => {
            this.aaa = true;
          });
        }
      });
    },


    //第二个
    DrawChart() {
      //名字
      var liocks = [];
      //值
      var talkiones = [];
      //平均数
      var cvtars = this.sematgrias;
      var gmlkioest = this.sectiongils.sort((a, b) => b['cma1'] - a['cma1']);
      for (let i = 0; i < gmlkioest.length; i++) {
        liocks.push(gmlkioest[i].cma);
        talkiones.push(gmlkioest[i].cma1);
      }
      (talkiones)
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("sectie"));
      let option = {
        backgroundColor: "#2A354B",
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
            data: liocks,
            splitLine: {show: false},
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
            splitLine: {show: false},
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
            end: 100,
            width: "98%",
            height: 6,
            bottom: 3,
          },
        ],
        series: [
          {
            name: "元素值",
            type: "bar",
            data: talkiones,
            barWidth: "10px",
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
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
            },
          },
          {
            name: "平均值",
            type: "line",
            data: cvtars,
            barWidth: "10px",
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
                      color: "red", // 0% 处的颜色
                    },

                  ],
                  false
                ),
              },
            },
          }
        ],
      };
      myChart.setOption(option, true);
      // });
    },
    //第一个
    draw() {
      //计划兑现率排序供应商名称
      var gimlcatbg = [];
      var ticgial = [];
      var cmliyedt = [];
      for (let i = 0; i < this.dcbg.length; i++) {
        gimlcatbg.push({
          name: (this.dcbg[i].dxl * 100).toFixed(1),
          name1: this.dcbg[i].distributorName,
        })
      }
      var titme = gimlcatbg.sort((a, b) => a['name'] - b['name'])
      for (let i = 0; i < titme.length; i++) {
        cmliyedt.push(titme[i].name)
        ticgial.push(titme[i].name1.substring(0, 7))
      }
      var myChart = echarts.init(document.getElementById("cail"));
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
            data: "gysmcgls",
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
          data: ticgial,
          splitLine: {show: false},
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
            start: 0, //数据窗口范围的起始百分比
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
            data: cmliyedt,
            barWidth: 8,
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
                label: {
                  show: true, //开启显示
                  position: 'bottom', //在上方显示
                  formatter: '{c} %', //单位
                  textStyle: { //数值样式
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
            },
          },
          // {
          //   name: "计划兑现率",
          //   type: "line",
          //   xAxisIndex: 1,
          //   data: jhdxlls_strand,
          //   barWidth: 14,
          //   barGap: 10,
          //   smooth: true,
          //   itemStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(
          //         0,
          //         0,
          //         1,
          //         0,
          //         [
          //           {
          //             offset: 0,
          //             color: "red", // 0% 处的颜色
          //           },
          //           {
          //             offset: 1,
          //             color: "red", // 100% 处的颜色
          //           },
          //         ],
          //         false
          //       ),
          //     },
          //   },
          // },
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
            start: 50, //数据窗口范围的起始百分比
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
          splitLine: {show: false},
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
            barWidth: 8, //柱图宽度
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
      tats[0] = this.ads;
      tats[1] = this.vdafs;
      tats[2] = this.fcads;
      tats[3] = this.cris;
      tats[4] = this.csrs;
      var myChart = echarts.init(document.getElementById("zdldtus"));
      let option = {
        backgroundColor: "#2A354B",
        radar: {
          indicator: [
            {
              name: "Ad" + "(" + tats[0] + ")",
              max: 15,
            },
            {name: "St,d" + "(" + tats[1] + ")", max: 2},
            {name: "CSR" + "(" + tats[2] + ")", max: 90},
            {name: "K" + "(" + tats[3] + ")", max: 35},
            {name: "Mt" + "(" + tats[4] + ")", max: 65},
          ],
          name: {
            textStyle: {color: "#fff"},
          },
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
      var tar = [];
      var bar = [];
      for (let i = this.tmilkestial.length - 1; i >= 0; i--) {
        tar.push(this.tmilkestial[i].cme);
        bar.push(this.tmilkestial[i].cme1.substring(0, 7));
        console.log(bar)
      }
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
          data: bar,
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
            end: 100,
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
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: "rgba(25,163,223,1)", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            // itemStyle: {
            //   color: "rgba(25,163,223,1)",
            //   borderColor: "#646ace",
            //   borderWidth: 2,
            //   label: {
            //     show: true, //开启显示
            //     position: 'top', //在上方显示
            //     textStyle: { //数值样式
            //       color: '#fff',
            //       fontSize: 24
            //     }
            //   }
            // },
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(25,163,223,.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(25,163,223, 0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(25,163,223, 0.5)", //阴影颜色
                shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: tar,
          },
        ],
      };
      myChart.setOption(option, true);


    },
    // 关闭弹窗
    gbzdtcs() {
      this.histtorytcs = false;
    },
    // 总图版本信息
    selectztbbxis(gysmc) {
      (this.ztbbxxsys = []),
        axios({
          method: "post",
          url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selecttcymsj",
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
      this.loading1 = true;
      axios({
        method: "get",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectsixmtachr",
        params: {
          lieseletone: this.lieseletone,
          distributorNames: this.distributorNames,
        },
      }).then((res) => {
        this.tmilkestial = res.data;
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
      // 折叠总图信息
      //this.selectztbbxis(gysmc);
      //this.selectzztclas(gysmc);
      this.bzxxcx();
      this.histtorytcs = true;
      // 雷达图
      this.hdressmon();

    },
    // 标准信息
    bzxxcx() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectbzzxx",
        params: {},
      }).then((res) => {
        this.bbbsz = res.data;
      });
    },
    //历史弹窗
    gtilgrals(distributorName, sterilise, jshtjg, cgl,
              gjb, jjb, mjb, mjcb, ad, std, csr, k, mt, jssf, jsfm, gsdgils, bhsjg
    ) {
      this.histtorytcs = true;
      this.distributorNames = distributorName;
      this.sterilises = sterilise;
      this.jshtjgs = jshtjg;
      this.cgls = cgl;
      this.gjbs = gjb;
      this.jjbs = jjb;
      this.mjbs = mjb;
      this.mjcbs = mjcb;
      this.ads = ad;
      this.vdafs = std;
      this.fcads = csr;
      this.cris = k;
      this.csrs = mt;
      this.jssds = jssf;
      this.jsfms = jsfm;
      this.gsdgilscias = gsdgils;
      this.bhsjg = bhsjg;
      this.hdressmon();
      this.selectzztclas();
    }
  },
};
</script>

// this.$router.push({ path: "/", query: {} });
<style scoped>
.ssors {
  color: #0061d1 !important;
  font-size: 0.7vw !important;
}

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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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
  justify-content: flex-start;
  align-items: center;
  width: 99.4vw;
  height: 3.5vh;
  margin-top: 0.5vh;
  margin-left: 0.3vw;
}

.mathsma {
  font-weight: lighter;
  color: #fff;
}

.mathsea {
  font-weight: lighter;
  color: red;
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
  width: 53vw;
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
  width: 25.7vw;
  height: 39vh;
  background-color: #353d52;
}

.ykil {
  height: 36vh;
  width: 8vw;
  border: dashed 3px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 0.8vw;
}

.bott_c {
  width: 47vw;
  height: 39vh;
  background-color: #353d52;
}

/*区间背景*/
.qjbjcil {
  height: 3.5vh;
  background-color: #1d3466;
  border-radius: 0.2vw;
  display: flex;
  align-items: center;
  font-size: 0.5vw;
}

/*超出区间标红*/
.ccbh {
  color: red;
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
  background-color: #284269;
}

tr:hover {
  background-color: #284269;
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
  color: #fff !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

.el-date-editor .el-icon-circle-close {
  display: none;
}

.el-input__inner {
  background-color: rgba(0, 0, 0, 0) !important;
  height: 3.5vh !important;
  padding-right: 0vw !important;
  border: none !important;
  cursor: pointer !important;
  color: #fff !important;
  font-size: 0.7vw !important;
  width: 4vw !important;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
  background-color: rgba(0, 0, 0, 0) !important;
  width: 3.8vw !important;
  text-align: center !important;
}

elecents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  width: 100vw;
  line-height: 2.3vh;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 0.6vw;
  text-align: center;
}

.ding {
  position: relative;
}

.ding_img {
  width: 4vw;
  position: absolute;
  /*top: 10vh;*/
  right: -5.5vw;
  border: dashed 2px gray;
}

.ding_img1 {
  width: 4vw;
  position: absolute;
  /*top: 10vh;*/
  right: 3vw;
  border: dashed 2px gray;
}
</style>
