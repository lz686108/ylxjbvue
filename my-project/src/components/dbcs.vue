<template>
  <div>
    <!-- 第一行 -->
    <div class="fh">
      <div class="airtoi">
        <div class="ti1">
          <div class="xdxx">变更前</div>
          <div class="yica">
            <div class="spoir">
              <span>有效热量:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (qyxrl * 1).toFixed(1) }}</span>
            </div>
            <div class="spoir">
              <span>不含税价格:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (qbhsjg * 1).toFixed(1) }}</span>
            </div>
            <div class="spoir">
              <span>置换比:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (qzhb * 1).toFixed(1) }}</span>
            </div>
          </div>
        </div>

        <div class="ti1" style="margin-left: 0.5vw">
          <div class="xdxx">变更后</div>
          <div class="yica">
            <div class="spoir">
              <span>有效热量:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (hyxrl * 1).toFixed(1) }}</span>
            </div>
            <div class="spoir">
              <span>不含税价格:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (hbhsjg * 1).toFixed(1) }}</span>
            </div>
            <div class="spoir">
              <span>置换比:</span>
              <span style="color: #bde5f7;margin-left: 0.3vw">{{ (hzhb * 1).toFixed(1) }}</span>
            </div>
          </div>
        </div>
      </div>


      <div class="ery">
        <div class="yica" style="width: 16vw;margin-right: 0.3vw;border-radius: 0.3vw">
          <div class="spoir">
            <span style="color: #bde5f7">铁水成本:</span>
            <span style="color: #E0B564;margin-left: 0.3vw">{{ (tscb * 1).toFixed(1) }}</span>
          </div>
          <div class="spoir" style="margin-left: 1.2vw">
            <span style="color: #bde5f7">配煤成本变化:</span>
            <span style="color: #E0B564;margin-left: 0.3vw">{{ (qbhsjg * 1 - hbhsjg * 1).toFixed(2) }}</span>
          </div>
        </div>

      </div>
    </div>

    <div class="fh" style="margin-right: 0.3vw">

      <div class="xdxx" style="width: 8vw">煤粉结构调整-变更前</div>
      <div style="display: flex;justify-content: flex-end">
        <div class="xbutt" style="margin-left: 0.3vw" @click="ciiitoge()">
          <img src="../assets/ere.png">
          <span style="margin-left: 0.2vw">保存</span>
        </div>
        <div class="xbutt" style="margin-left: 0.3vw" @click="cegrl()">
          <img src="../assets/yui.png">
          <span style="margin-left: 0.2vw">测算</span>
        </div>
        <div class="xbutt" style="margin-left: 0.3vw;background-color: #1E2D42" @click="redrscbs=true">
          <span style="margin-left: 0.2vw">基准维护</span>
        </div>

      </div>

    </div>


    <!-- 第五行 -->
    <div class="tablebackground">
      <!--      选单添加部分-->
      <table class="table">
        <thead>
        <tr>
          <td style="width: 4vw">类型</td>
          <td style="width: 23vw">燃料名称</td>
          <td>Ad</td>
          <td>St,d</td>
          <td>Qgr,d</td>
          <td>Vdaf</td>
          <td>FCd</td>
          <td>Mt</td>
          <td>Mad</td>
          <td>有效热量</td>
          <td>出厂价格</td>
          <td>运费价格</td>
          <td>到厂价格</td>
          <td>付款方式</td>
          <td>结算水分</td>
          <td>不含税价格</td>
          <td>配比</td>
          <td>有效热成本</td>
          <!--          <td>删除</td>-->
        </tr>
        </thead>
        <tbody style="height: 34.3vh">
        <tr v-for="(item, index) in topraslist" :key="index">
          <td style="width: 4vw">{{ item.lx }}</td>
          <td style="width: 23vw;text-align: left">{{ item.gysmc }}</td>
          <td>{{ item.ad }}</td>
          <td>{{ item.std }}</td>
          <td>{{ item.qgrd }}</td>
          <td>{{ item.vdaf }}</td>
          <td>{{ item.fcd }}</td>
          <td>{{ item.mt }}</td>
          <td>{{ item.mad }}</td>
          <td>{{ item.yxrl }}</td>
          <td>{{ item.ccjg }}</td>
          <td>{{ item.yfjg }}</td>
          <td>{{ item.dcjg }}</td>
          <td>{{ item.fkfs }}</td>
          <td>{{ item.jssf }}</td>
          <td>{{ item.bhsjg }}</td>
          <td>
            <input
              type="text"
              class="inputs"
              style="width: 3vw; height: 2vh;background-color: #1d3466"
              v-model="item.pb"
              v-if="item.lx!=''&&item.lx!=null"
            />
          </td>
          <td>{{ item.yxrcb }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="fh" style="margin-right: 0.5vw;margin-top: 0vh">
      <div class="xdxx" style="width: 8vw;margin-top: 0.5vh">煤粉结构调整-变更后</div>
    </div>
    <!-- 第六行 table -->
    <div class="tablebackground" style="margin-top: 0.5vh;height: 40vh">
      <table class="table">
        <thead>
        <tr>
          <td style="width: 4vw">类型</td>
          <td style="width: 23vw">燃料名称</td>
          <td>Ad</td>
          <td>St,d</td>
          <td>Qgr,d</td>
          <td>Vdaf</td>
          <td>FCd</td>
          <td>Mt</td>
          <td>Mad</td>
          <td>有效热量</td>
          <td>出厂价格</td>
          <td>运费价格</td>
          <td>到厂价格</td>
          <td>付款方式</td>
          <td>结算水分</td>
          <td>不含税价格</td>
          <td>配比</td>
          <td>有效热成本</td>
          <!--          <td>选型</td>-->
        </tr>
        </thead>
        <tbody style="height: 35.8vh">
        <tr v-for="(item, index) in upcatuicour" :key="index">
          <td style="width: 4vw">{{ item.lx }}</td>
          <td style="width: 23vw;text-align: left">{{ item.gysmc }}</td>
          <td>{{ item.ad }}</td>
          <td>{{ item.std }}</td>
          <td>{{ item.qgrd }}</td>
          <td>{{ item.vdaf }}</td>
          <td>{{ item.fcd }}</td>
          <td>{{ item.mt }}</td>
          <td>{{ item.mad }}</td>
          <td>{{ item.yxrl }}</td>
          <td>{{ item.ccjg }}</td>
          <td>{{ item.yfjg }}</td>
          <td>{{ item.dcjg }}</td>
          <td>{{ item.fkfs }}</td>
          <td>{{ item.jssf }}</td>
          <td>{{ item.bhsjg }}</td>
          <td>
            <input
              type="text"
              class="inputs"
              style="width: 3vw; height: 2vh;background-color: #1d3466"
              v-model="item.pb"
              v-if="item.lx!=''&&item.lx!=null"
            />
          </td>

          <td>{{ item.yxrcb }}</td>
          <!--          <td>-->
          <!--            <div>-->
          <!--                <span-->
          <!--                  @click="rebuts(item.id,item.lx)"-->
          <!--                  v-if="turnbuts.indexOf(item.id) == -1"-->
          <!--                  style="cursor: pointer; font-size: 0.85vw;display: flex;justify-content: center;align-items: center"-->
          <!--                >-->
          <!--                  <img src="../assets/资源 64@2x.png" style="width: 0.9vw; height: 1.8vh">-->
          <!--                </span>-->
          <!--              <span v-else @click="rebuts1(item.id,lx)" style="cursor: pointer"-->
          <!--              ><img src="../assets/资源 65@2x.png" style="width: 0.9vw; height: 1.8vh"></span>-->
          <!--            </div>-->
          <!--          </td>-->
        </tr>
        </tbody>
      </table>
    </div>
    <!-- 修改弹窗 -->
    <div v-show="updateshow" class="turnaongn">
      <div class="whcuia" style="height: 60vh">
        <div class="firgui">
          <div>修改明细</div>
          <div style="font-size: 1.5vw" @click="updateshow=false">×</div>
        </div>

        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>Ad</sp>
            <input type="text" class="inputs" v-model="ad"/>
          </div>
          <div class="outils">
            <sp>Vdaf</sp>
            <input type="text" class="inputs" v-model="vdaf"/>
          </div>
        </div>


        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>St,d</sp>
            <input type="text" class="inputs" v-model="std"/>
          </div>
          <div class="outils">
            <sp>Qgr,d</sp>
            <input type="text" class="inputs" v-model="qgrd"/>
          </div>
        </div>


        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>FCd</sp>
            <input type="text" class="inputs" v-model="fcd"/>
          </div>
          <div class="outils">
            <sp>Mad</sp>
            <input type="text" class="inputs" v-model="mad"/>
          </div>
        </div>


        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>Mt</sp>
            <input type="text" class="inputs" v-model="mt"/>
          </div>
          <div class="outils">
            <sp>出厂价格</sp>
            <input type="text" class="inputs" v-model="ccjg"/>
          </div>
        </div>

        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>结算水分</sp>
            <input type="text" class="inputs" v-model="jssf"/>
          </div>
          <div class="outils">
            <sp>付款方式</sp>
            <input type="text" class="inputs" v-model="fkfs"/>
          </div>
        </div>

        <div class="firgui" style="width: 26vw;margin-left: 2vw">
          <div class="outils">
            <sp>焦粉名称</sp>
            <select v-model="gysmc" class="xubut"
                    style="height: 3vh;width: 6vw;background-color: #3E4559;border: none; width: 6.2vw">
              <option v-for="(item, index) in selectbuts.jfmc" :key="index">
                {{ item }}
              </option>
            </select>

          </div>
          <div class="outils">
            <sp>运费价格</sp>
            <input type="text" class="inputs" v-model="yfjg"/>
          </div>
        </div>
        <div class="ery" style="margin-top: 4vh">
          <div class="qhbb2" style="border-radius: 0.2vw;margin-right: 0.8vw" @click="updatejcbghyl()">
            <div class="qhbb4" style="font-size: 0.8vw">
              保存
            </div>
          </div>
          <div class="qhbb2" style="border-radius: 0.2vw;margin-right: 1vw;background-color: #666666">
            <div class="qhbb4" style="font-size: 0.8vw" @click="updateshow=false">
              返回
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 标准维护 -->
    <div class="uhb" v-if="bzwhtc">
      <div class="bbwhtcs">
        <div class="btbzwh">标准维护</div>
        <div class="bzfyh">
          <div class="udbuibiu" v-for="(item, index) in bbbsz" :key="index">
            <div class="textsb">{{ item.item }}</div>
            <input
              type="text"
              class="inputindex"
              v-model="item.price1"
              style="margin-left: 0.3vw; cursor: pointer"
            />
            <span style="color: #fff">-</span>
            <input
              type="text"
              class="inputindex"
              v-model="item.price2"
              style="cursor: pointer"
            />
          </div>
        </div>
        <div class="buttuo">
          <div
            class="buts"
            style="background-color: #abbbce; cursor: pointer"
            @click="qubzwhtc()"
          >
            取消
          </div>
          <div
            class="buts"
            style="margin-left: 2vw; cursor: pointer"
            @click="updatewhbztc()"
          >
            确定
          </div>
        </div>
      </div>
    </div>
    <!--    焦炭明细添加-->
    <div v-show="jcmxtimia" class="turnaongn">
      <div class="whcuia">
        <div class="firgui">
          <div>新建</div>
          <div style="font-size: 1.5vw" @click="jcmxtimia=false">×</div>
        </div>
        <form method="post" id="myform">

          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>Ad</sp>
              <input type="text" class="inputs" v-model="ad"/>
            </div>
            <div class="outils">
              <sp>Vdaf</sp>
              <input type="text" class="inputs" v-model="vdaf"/>
            </div>
          </div>


          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>St,d</sp>
              <input type="text" class="inputs" v-model="std"/>
            </div>
            <div class="outils">
              <sp>Qgr,d</sp>
              <input type="text" class="inputs" v-model="qgrd"/>
            </div>
          </div>


          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>FCd</sp>
              <input type="text" class="inputs" v-model="fcd"/>
            </div>
            <div class="outils">
              <sp>Mad</sp>
              <input type="text" class="inputs" v-model="mad"/>
            </div>
          </div>


          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>Mt</sp>
              <input type="text" class="inputs" v-model="mt"/>
            </div>
            <div class="outils">
              <sp>出厂价格</sp>
              <input type="text" class="inputs" v-model="ccjg"/>
            </div>
          </div>

          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>到厂价格</sp>
              <input type="text" class="inputs" v-model="dcjg"/>
            </div>
            <div class="outils">
              <sp>付款方式</sp>
              <input type="text" class="inputs" v-model="fkfs"/>
            </div>
          </div>


          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>结算水分</sp>
              <input type="text" class="inputs" v-model="jssf"/>
            </div>
            <div class="outils">
              <sp>烧结固体单耗</sp>
              <input type="text" class="inputs" v-model="sjgtdh"/>
            </div>
          </div>

          <div class="firgui" style="width: 26vw;margin-left: 2vw">
            <div class="outils">
              <sp>焦粉名称</sp>
              <select v-model="gysmc" class="xubut"
                      style="height: 3vh;width: 6vw;background-color: #3E4559;border: none; width: 6.2vw">
                <option v-for="(item, index) in selectbuts.jfmc" :key="index">
                  {{ item }}
                </option>
              </select>

            </div>
            <div class="outils">
              <sp>运费价格</sp>
              <input type="text" class="inputs" v-model="yfjg"/>
            </div>
          </div>
        </form>
        <div class="ery" style="margin-top: 4vh">
          <div class="qhbb2" style="border-radius: 0.2vw;margin-right: 0.8vw" @click="bucjfrs()">
            <div class="qhbb4" style="font-size: 0.8vw">
              保存
            </div>
          </div>
          <div class="qhbb2" style="border-radius: 0.2vw;margin-right: 1vw;background-color: #666666">
            <div class="qhbb4" style="font-size: 0.8vw" @click="jcmxtimia=false">
              返回
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    吨烧燃耗单位成本弹窗-->
    <div v-show="redrscbs" class="turnaongn">
      <div class="whcuia" style="height: 28vh">
        <div class="firgui">
          <div>基准值维护</div>
          <div style="font-size: 1.5vw" @click="redrscbs=false">×</div>
        </div>
        <div class="firgui" style="width: 27vw;margin-left: 1.5vw">
          <div class="outils" style="width: 12vw">
            <sp>焦炭有效热量</sp>
            <input type="text" class="inputs" v-model="jtyxrl"/>
          </div>
          <div class="outils" style="width: 12vw">
            <sp>煤比</sp>
            <input type="text" class="inputs" v-model="mby"/>
          </div>
          <div class="outils" style="width: 12vw">
            <sp>焦炭价格</sp>
            <input type="text" class="inputs" v-model="jtjg"/>
          </div>
          <div class="outils" style="width: 12vw">
            <sp>置换系数</sp>
            <input type="text" class="inputs" v-model="zhxs"/>
          </div>


          <div class="fanh" style="width: 30vw">
            <div
              class="xbutt"
              style="background-color: #abbbce"
              @click="redrscbs=false"
            >
              取消
            </div>
            <div
              class="xbutt"
              style="margin-left: 1.8vw"
              @click="quedingupdate()"
            >
              确定
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
      value1: "",
      value2: "",
      qubban: "",
      // 选单信息添加
      //选单信息添加下拉
      butf: "",
      //选单信息添加input
      ifbut: "",
      // 按钮分配属性值
      selectbuts: [],
      //燃料名称
      gysmc: "",
      //表格集合
      tablelists: [],
      //选型点击
      turnbuts: [],
      //修改弹窗控制
      updateshow: false,
      //修改使用的id
      upid: "",
      //合同价格+
      htjgzj: "",
      //合同价格-
      htjgjs: "",
      //全选取消全选
      qxxbuts: 2,
      //标准维护弹窗
      bzwhtc: false,
      //标准更改
      bbbsz: [],
      jzzxg: "",
      //基准信息维护按钮
      jzxxwhan: "",
      //顶层的饼图下拉列表
      bugralst: ['山西', '内蒙', '黑龙江', '辽宁', '吉林', '河北', '进口'],
      quanxiancard: "",
      //决策模型明细添加
      jcmxtimia: false,
      component: ["a", "b"],
      // '焦粉名称',
      //新建弹窗
      ad: "",
      vdaf: "",
      std: "",
      qgrd: "",
      fcd: "",
      mad: "",
      mt: "",
      ccjg: "",
      dcjg: "",
      fkfs: "",
      jssf: "",
      sjgtdh: "",
      yfjg: "",
      //吨烧燃耗单位成本
      redrscbs: false,
      wymrh: "",
      jfrh: "",
      //焦粉表格数据
      jftablescilma: [],
      //接收版本号
      ourbbhar: "",
      //上面表的数据
      topraslist: [],
      //变更前
      qyxrl: "-------",
      qbhsjg: "-------",
      qzhb: "-------",
      //下面表的数据
      upcatuicour: [],
      //变更后
      hyxrl: "-------",
      hbhsjg: "-------",
      hzhb: "-------",
      //无烟煤和烟煤只能各保留一个
      wyymlistucr: [],
      //煤比
      mby: "",
      //焦炭有效热量
      jtyxrl: "",
      //焦炭价格
      jtjg: "",
      //置换系数
      zhxs: "",
      //基准值维护弹窗
      jzzburk: false,
      //贴水成本
      tscb: "",

    };
  },
  created() {
    this.quanxiancard = sessionStorage.getItem("card");
    this.ourbbhar = this.$route.query.ourbbha;
  },
  mounted() {
    //初始化查询第一个表(配比除外)
    this.csujzz();
    this.ciiia();
    //this.ciiiah();
  },
  methods: {
    //保存铁水成本
    cegrl() {
      // axios({
      //   method: "post",
      //   url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/inserttscb",
      //   params: {
      //     tscb: this.tscb,
      //     bbhs: this.ourbbhar
      //   },
      // }).then((res) => {
      //   this.$message("添加成功")
      // });
      this.$router.push({path: "/cgjcdccs", query: {}});

    },
    //初始化基准值信息
    csujzz() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/csujzz",
        params: {},
      }).then((res) => {
        this.mby = res.data.mby
        this.jtyxrl = res.data.jtyxrl
        this.jtjg = res.data.jtjg
        this.zhxs = res.data.zhxs
      });
    },
    //配比更改
    wymkj(id, pb) {
      // if (this.turnbuts.length > 2) {
      //   this.$message("不得测算两条以上数据")
      //   return
      // }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/ymjswymzj",
        params: {
          cetz: JSON.stringify(this.upcatuicour),
          ourbbhar: this.ourbbhar,
        },
      }).then((res) => {
        if (res.data == 1) {
          this.$message("不可同时增加和减少无烟煤")
          return
        }
        if (res.data == 2) {
          this.$message("不可同时增加和减少烟煤")
          return
        }
        this.upcatuicour = res.data
        //有效热量
        var airtur = 0;
        //不含税价格
        var tbrbae = 0;
        //置换比
        var zhtuc = 0;
        for (let i = 0; i < this.upcatuicour.length; i++) {
          airtur = airtur + (this.upcatuicour[i].yxrl * 1) * (this.upcatuicour[i].pb / 100)
          tbrbae = tbrbae + (this.upcatuicour[i].bhsjg * 1) * (this.upcatuicour[i].pb / 100)
        }
        this.hyxrl = airtur
        this.hbhsjg = tbrbae
        //煤粉有效热量/焦炭有效热量（焦炭有效热量为手动）
        this.qzhb = ((this.qyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        this.hzhb = ((this.hyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        // 铁水成本 =（调整后煤价格 - 调整前煤价格） * 煤比/1000 -
        //（调整后置换比 - 调整前置换比） * 0.7 * 煤比/1000 * 焦炭价格
        this.tscb = (((this.hbhsjg * 1) - (this.qbhsjg * 1)) * this.mby * 1 / 1000 -
          (this.hzhb * 1 - this.qzhb * 1) * 0.7 * this.mby * 1 / 1000 * this.jtjg * 1)
      });

    },
    //烟煤加无烟煤减
    ymgkj() {
      if (this.turnbuts.length > 2) {
        this.$message("不得测算两条以上数据")
        return
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/ymzjwymjs",
        params: {
          cetz: JSON.stringify(this.turnbuts),
          ourbbhar: this.ourbbhar,
        },
      }).then((res) => {
        if (res.data == 1) {
          this.$message("不可同时增加和减少无烟煤")
          return
        }
        if (res.data == 2) {
          this.$message("不可同时增加和减少烟煤")
          return
        }
        this.upcatuicour = res.data
        //有效热量
        var airtur = 0;
        //不含税价格
        var tbrbae = 0;
        //置换比
        var zhtuc = 0;
        for (let i = 0; i < this.upcatuicour.length; i++) {
          airtur = airtur + (this.upcatuicour[i].yxrl * 1) * (this.upcatuicour[i].pb / 100)
          tbrbae = tbrbae + (this.upcatuicour[i].bhsjg * 1) * (this.upcatuicour[i].pb / 100)
        }
        this.hyxrl = airtur
        this.hbhsjg = tbrbae
        //煤粉有效热量/焦炭有效热量（焦炭有效热量为手动）
        this.qzhb = ((this.qyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        this.hzhb = ((this.hyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        // 铁水成本 =（调整后煤价格 - 调整前煤价格） * 煤比/1000 -
        //（调整后置换比 - 调整前置换比） * 0.7 * 煤比/1000 * 焦炭价格
        this.tscb = (((this.hbhsjg * 1) - (this.qbhsjg * 1)) * this.mby * 1 / 1000 -
          (this.hzhb * 1 - this.qzhb * 1) * 0.7 * this.mby * 1 / 1000 * this.jtjg * 1)
      });

    },
    fztri() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/tacbere",
        params: {
          courlist: JSON.stringify(this.topraslist),
          ourbbhar: this.ourbbhar,
        },
      }).then((res) => {
        this.upcatuicour = res.data
        console.log(res.data)
        //有效热量
        var airtur = 0;
        //不含税价格
        var tbrbae = 0;
        //置换比
        var zhtuc = 0;
        for (let i = 0; i < this.upcatuicour.length; i++) {
          airtur = airtur + (this.upcatuicour[i].yxrl * 1) * (this.upcatuicour[i].pb / 100)
          tbrbae = tbrbae + (this.upcatuicour[i].bhsjg * 1) * (this.upcatuicour[i].pb / 100)
        }
        this.qyxrl = airtur
        this.hyxrl = airtur
        this.qbhsjg = tbrbae
        this.hbhsjg = tbrbae
        //煤粉有效热量/焦炭有效热量（焦炭有效热量为手动）
        this.qzhb = ((this.qyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        this.hzhb = ((this.hyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
        // 铁水成本 =（调整后煤价格 - 调整前煤价格） * 煤比/1000 -
        //（调整后置换比 - 调整前置换比） * 0.7 * 煤比/1000 * 焦炭价格
        this.tscb = (((this.hbhsjg * 1) - (this.qbhsjg * 1)) * this.mby * 1 / 1000 -
          (this.hzhb * 1 - this.qzhb * 1) * 0.7 * this.mby * 1 / 1000 * this.jtjg * 1)
      });

    },
    //初始化上面表数据
    ciiia() {
      this.topraslist = []
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/routerairnw",
        params: {
          ourbbhar: this.ourbbhar,
        },
      }).then((res) => {
        // console.log(res.data)
        if (res.data == "") {
          return
        }
        for (let i = 0; i < res.data.bgq[0].length; i++) {
          if (res.data.bgq[0][i].lx == "烟煤") {
            this.topraslist.push(res.data.bgq[0][i])
          }
        }
        for (let i = 0; i < res.data.bgq[0].length; i++) {
          if (res.data.bgq[0][i].lx == "无烟煤") {
            this.topraslist.push(res.data.bgq[0][i])
          }
        }
        //配煤指标变化
        var ad = 0;
        var ad1 = 0;
        var std = 0;
        var std1 = 0;
        var qgrd = 0;
        var qgrd1 = 0;
        var vdaf = 0;
        var vdaf1 = 0;
        var fcd = 0;
        var fcd1 = 0;
        var mt = 0;
        var mt1 = 0;
        var mad = 0;
        var mad1 = 0;
        for (let i = 0; i < res.data.bgq[0].length; i++) {
          ad = ad + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].ad * 1
          ad1 = ad1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          std = std + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].std * 1
          std1 = ad1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          qgrd = qgrd + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].qgrd * 1
          qgrd1 = qgrd1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          vdaf = vdaf + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].vdaf * 1
          vdaf1 = vdaf1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          fcd = fcd + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].fcd * 1
          fcd1 = fcd1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          mt = mt + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].mt * 1
          mt1 = mt1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
          mad = mad + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1) * res.data.bgq[0][i].mad * 1
          mad1 = mad1 + res.data.bgq[0][i].pb * 1 * 22 * (100 - res.data.bgq[0][i].mt * 1 - res.data.bgq[0][i].mad * 1)
        }
        var gil = ({
          ad: (ad / ad1).toFixed(2),
          std: (std / std1).toFixed(2),
          qgrd: (qgrd / qgrd1).toFixed(2),
          vdaf: (vdaf / vdaf1).toFixed(2),
          fcd: (fcd / fcd1).toFixed(2),
          mt: (mt / mt1).toFixed(2),
          mad: (mad / mad1).toFixed(2),
          gysmc: "变更前配煤指标",
        })
        this.topraslist.push(gil);
        for (let i = 0; i < res.data.bgh[0].length; i++) {
          if (res.data.bgh[0][i].lx == "烟煤") {
            this.upcatuicour.push(res.data.bgh[0][i])
          }
        }
        for (let i = 0; i < res.data.bgh[0].length; i++) {
          if (res.data.bgh[0][i].lx == "无烟煤") {
            this.upcatuicour.push(res.data.bgh[0][i])
          }
        }
        var had = 0;
        var had1 = 0;
        var hstd = 0;
        var hstd1 = 0;
        var hqgrd = 0;
        var hqgrd1 = 0;
        var hvdaf = 0;
        var hvdaf1 = 0;
        var hfcd = 0;
        var hfcd1 = 0;
        var hmt = 0;
        var hmt1 = 0;
        var hmad = 0;
        var hmad1 = 0;
        for (let i = 0; i < res.data.bgh[0].length; i++) {
          had = had + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].ad * 1
          had1 = had1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hstd = hstd + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].std * 1
          hstd1 = had1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hqgrd = hqgrd + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].qgrd * 1
          hqgrd1 = hqgrd1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hvdaf = hvdaf + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].vdaf * 1
          hvdaf1 = hvdaf1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hfcd = hfcd + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].fcd * 1
          hfcd1 = hfcd1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hmt = hmt + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].mt * 1
          hmt1 = hmt1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
          hmad = hmad + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1) * res.data.bgh[0][i].mad * 1
          hmad1 = hmad1 + res.data.bgh[0][i].pb * 1 * 22 * (100 - res.data.bgh[0][i].mt * 1 - res.data.bgh[0][i].mad * 1)
        }
        var gil1 = ({
          ad: (had / had1).toFixed(2),
          std: (hstd / hstd1).toFixed(2),
          qgrd: (hqgrd / hqgrd1).toFixed(2),
          vdaf: (hvdaf / hvdaf1).toFixed(2),
          fcd: (hfcd / hfcd1).toFixed(2),
          mt: (hmt / hmt1).toFixed(2),
          mad: (hmad / hmad1).toFixed(2),
          gysmc: "变更后配煤指标",
        })
        this.upcatuicour.push(gil1);
        var bgcy =({
          ad: (gil1.ad -gil.ad).toFixed(2),
          std: (gil1.std -gil.std).toFixed(2),
          qgrd: (gil1.qgrd -gil.qgrd).toFixed(2),
          vdaf: (gil1.vdaf -gil.vdaf).toFixed(2),
          fcd: (gil1.fcd -gil.fcd).toFixed(2),
          mt: (gil1.mt -gil.mt).toFixed(2),
          mad: (gil1.mad -gil.mad).toFixed(2),
          gysmc: "配煤指标差异",
        })
        this.upcatuicour.push(bgcy);
        this.qyxrl = res.data.bgqhsjx[0].bgqyxrl
        this.qbhsjg = res.data.bgqhsjx[0].bgqbhsjg
        this.qzhb = res.data.bgqhsjx[0].bgqzhb
        this.hyxrl = res.data.bgqhsjx[0].bghyxrl
        this.hbhsjg = res.data.bgqhsjx[0].bghbhsjg
        this.hzhb = res.data.bgqhsjx[0].bghzhb
        this.tscb = res.data.bgqhsjx[0].tscb
      });
    },
    //初始化下面表数据
    // ciiiah() {
    //   this.upcatuicour = []
    //   axios({
    //     method: "post",
    //     url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/routerairnwh",
    //     params: {
    //       ourbbhar: this.ourbbhar,
    //     },
    //   }).then((res) => {
    //     this.upcatuicour = res.data
    //     //this.fztri();
    //     //this.fztri();
    //     //有效热量
    //     var airtur = 0;
    //     //不含税价格
    //     var tbrbae = 0;
    //     //置换比
    //     var zhtuc = 0;
    //     for (let i = 0; i < this.upcatuicour.length; i++) {
    //       airtur = airtur + (this.upcatuicour[i].yxrl * 1) * (this.upcatuicour[i].pb / 100)
    //       tbrbae = tbrbae + (this.upcatuicour[i].bhsjg * 1) * (this.upcatuicour[i].pb / 100)
    //     }
    //     this.hyxrl = airtur
    //     this.hbhsjg = tbrbae
    //     //煤粉有效热量/焦炭有效热量（焦炭有效热量为手动）
    //     this.hzhb = ((this.hyxrl * 1) / (this.jtyxrl * 1)).toFixed(1)
    //     // 铁水成本 =（调整后煤价格 - 调整前煤价格） * 煤比/1000 -
    //     //（调整后置换比 - 调整前置换比） * 0.7 * 煤比/1000 * 焦炭价格
    //     this.tscb = (((this.hbhsjg * 1) - (this.qbhsjg * 1)) * this.mby * 1 / 1000 -
    //       (this.hzhb * 1 - this.qzhb * 1) * 0.7 * this.mby * 1 / 1000 * this.jtjg * 1)
    //   });
    // },
    //同时保存变更前和变更后
    ciiitoge() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/togererork",
        params: {
          ourbbhar: this.ourbbhar,
          topraslists: JSON.stringify(this.topraslist),
          upcatuicours: JSON.stringify(this.upcatuicour),
        },
      }).then((res) => {
        console.log(res.data)
        for (let i = 0; i < res.data.bgq.length - 1; i++) {
          this.topraslist.push(res.data.bgq[i])
        }
        for (let i = 0; i < res.data.bgh.length - 1; i++) {
          this.upcatuicour.push(res.data.bgh[i])
        }
        this.qyxrl = res.data.bgqhsjx[0].bgqyxrl
        this.qbhsjg = res.data.bgqhsjx[0].bgqbhsjg
        this.qzhb = res.data.bgqhsjx[0].bgqzhb
        this.hyxrl = res.data.bgqhsjx[0].bghyxrl
        this.hbhsjg = res.data.bgqhsjx[0].bghbhsjg
        this.hzhb = res.data.bgqhsjx[0].bghzhb
        this.tscb = res.data.bgqhsjx[0].tscb
        this.$message("保存成功")
      });
    },
    //添加焦粉和无烟煤信息
    insertjfwymxxl() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectjcdisallarl",
        params: {
          idrs: JSON.stringify(this.turnbuts),
        },
      }).then((res) => {
        if (res.data == "1") {
          this.$message("新增版本成功")
        }
      });
    },
    //提交更改焦粉表格信息
    updatejcbghyl() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/updatejfbgwhels",
        params: {
          ad: this.ad,
          std: this.std,
          qgrd: this.qgrd,
          vdaf: this.vdaf,
          fcd: this.fcd,
          mt: this.mt,
          ccjg: this.ccjg,
          yfjg: this.yfjg,
          dcjg: this.dcjg,
          fkfs: this.fkfs,
          jssf: this.jssf,
          mad: this.mad,
          sjgtdh: this.sjgtdh,
          gysmc: this.gysmc,
          id: this.upid
        },
      }).then((res) => {
        this.jftablescilma = res.data
        this.$message("修改成功");
        this.updateshow = false;
      });

    },
    //初始化查询焦粉表格信息
    selectjcdisall() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectjcdisall",
        params: {},
      }).then((res) => {
        this.jftablescilma = res.data
      });

    },
    bucjfrs() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/cilma",
        params: {
          ad: this.ad,
          vdaf: this.vdaf,
          std: this.std,
          qgrd: this.qgrd,
          fcd: this.fcd,
          mad: this.mad,
          mt: this.mt,
          ccjg: this.ccjg,
          dcjg: this.dcjg,
          fkfs: this.fkfs,
          jssf: this.jssf,
          sjgtdh: this.sjgtdh,
          gysmc: this.gysmc,
          yfjg: this.yfjg,
        },
      }).then((res) => {
        this.jftablescilma = res.data
      });

    },
    //焦炭明细添加
    mxgils() {
      if (this.jftablescilma != '') {
        this.$message("焦粉信息不得超过一条,如有需要请修改焦粉信息")
        return
      }
      this.jcmxtimia = true;
      this.selectattributevalue();
    },
    //基准信息维护选钮
    jizhuxxwh(id) {
      if (this.jzxxwhan == id) {
        this.jzxxwhan = 0;
        this.turnbuts.splice(this.turnbuts.indexOf(id), 1)
        return
      }
      if (this.turnbuts.indexOf(id) == -1) {
        this.turnbuts.push(id);
      }
      this.jzxxwhan = id;
    },
    //修改维护标准弹窗
    updatewhbztc() {
      var general = [];
      general = this.bbbsz;
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/updatebzzxxgls",
        params: {
          bzlist: JSON.stringify(general),
        },
      }).then((res) => {
        this.bzxxcx();
        this.$message("修改成功");
        this.bzwhtc = false;
      });
    },
    //取消标准维护按钮弹窗
    qubzwhtc() {
      this.bzwhtc = false;
    },
    // 基准值初始化
    selectjzz() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectjzz",
        params: {},
      }).then((res) => {
        this.jzzxg = res.data;
      });
    },
    //基准值修改
    updatejzz() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/updatejzz",
        params: {
          jzzxg: this.jzzxg,
        },
      }).then((res) => {
        this.jzzxg = res.data;
        this.$message("基准值修改成功");
      });
    },
    // 下拉列框添加按钮
    insertattribute() {
      if (this.ifbut == "") {
        this.$message("请输入新增内容")
        return
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/insertattribute",
        params: {
          attributename: "焦粉名称",
          propertyvalue: this.ifbut,
        },
      }).then((res) => {
        if (res.data == 1) {
          this.$message("添加成功");
          this.selectattributevalue();
          this.ifbut = "";
        }
      });
    },
    //属性名查询属性值
    selectattributevalue() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectattributevalue",
        params: {},
      }).then((res) => {
        this.selectbuts = res.data;
        this.gysmc = this.selectbuts.jfmc[res.data.jfmc.length - 1];
      });
    },
    //信息添加至表格中
    insertallofluruf() {
      if (
        this.gysmc == '' ||
        this.htjg == ''
      ) {
        this.$message("请填写完整的信息");
        return;
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/insertwymdcwh",
        params: {
          distributor_name: this.gysmc,
          sterilise: this.fkfs,
          contract_price: this.htjg,
          month_amount: this.yjhl,
          jssf: this.jssf,
          jsfm: this.jsfm,
        },
      }).then((res) => {
        if (res.data.length == 0) {
          this.$message("信息已存在");
          return
        }
        this.tablelists = res.data;
        this.selectattributevalue();
        (this.htjg = ""), (this.yjhl = "");
      });
    },
    //初始化查询表格信息
    selectofluruf() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/selectwymdccx",
        params: {},
      }).then((res) => {
        this.tablelists = res.data;
      });
    },
    //切换按钮
    rebuts(id, lx) {
      this.turnbuts.push(id);
    },
    //切换按钮
    rebuts1(id, lx) {
      let haha = this.turnbuts.indexOf(id);
      this.jzxxwhan = 0;
      // 删除数组中的元素,1代表删除一个
      this.turnbuts.splice(haha, 1);
    },
    //添加版本号
    insertversons() {
      if (this.turnbuts.length == 0) {
        this.$message("请勾选需要添加的信息");
        return;
      }
      if (this.jzxxwhan == "") {
        this.$message("请勾选基准值");
        return;
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/insertversiontocopy",
        params: {
          idrs: JSON.stringify(this.turnbuts),
          jzzaniu: this.jzxxwhan,
        },
      }).then((res) => {
      });
      this.$message("添加成功");
      this.turnbuts = [];
    },
    //修改信息
    updatecontext(
      ad, std, qgrd, vdaf, fcd, mt, id, mad, ccjg, yfjg, dcjg, fkfs, jssf, bhsjg, sjgtdh) {
      this.selectattributevalue();
      this.ad = ad;
      this.std = std;
      this.qgrd = qgrd;
      this.vdaf = vdaf
      this.fcd = fcd
      this.mt = mt
      this.ccjg = ccjg
      this.yfjg = yfjg
      this.dcjg = dcjg
      this.fkfs = fkfs
      this.jssf = jssf
      this.mad = mad
      this.sjgtdh = sjgtdh
      this.updateshow = true;
      this.upid = id;
    },
    //取消修改按钮
    qxupbut() {
      this.updateshow = false;
      //初始化物料名称
      this.wlmc = this.selectbuts[2][0];
      //初始化供应商名称
      this.gysmc = this.selectbuts[1][0];
      //初始化料种
      this.lzmc = this.selectbuts[0][0];
      this.htjg = "";
      this.yjhl = "";
    },
    // 初始化查询固体燃耗
    cugtrhal() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/cshgtrh",
        params: {},
      }).then((res) => {
        this.wymrh = res.data.wymgtyh;
        this.jfrh = res.data.jfgtyh;
      });
    },
    // 确定修改
    quedingupdate() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/brakeli",
        params: {
          mby: this.mby,
          jtyxrl: this.jtyxrl,
          jtjg: this.jtjg,
          zhxs: this.zhxs,
        },
      }).then((res) => {
        this.mby = res.data.mby
        this.jtyxrl = res.data.jtyxrl
        this.jtjg = res.data.jtjg
        this.zhxs = res.data.zhxs
        this.$message("修改成功");
      });
    },
    fhtursec() {
      this.$router.push({path: "/cgjcdccs", query: {}});
    },
    xpwhtur() {
      this.$router.push({path: "/secound", query: {}});
    },
    //合同价格同加同减
    htjgtjtj() {
      if (this.htjgzj != "" && this.htjgjs != "") {
        this.$message("不能同时增加和减少合同价格");
        return;
      }
      if (this.htjgzj != "") {
        axios({
          method: "post",
          url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/updatewymdcwhprice",
          params: {
            tabli: JSON.stringify(this.tablelists),
            htjgzj: this.htjgzj,
          },
        }).then((res) => {
          this.tablelists = res.data;
          this.$message("修改成功");
          this.htjgzj = "";
        });
      }
      if (this.htjgjs != "") {
        axios({
          method: "post",
          url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/updatetjwym",
          params: {
            tabli: JSON.stringify(this.tablelists),
            htjgjs: this.htjgjs,
          },
        }).then((res) => {
          this.tablelists = res.data;
          this.$message("修改成功");
          this.htjgjs = "";
        });
      }
      if (this.htjgzj == "" && this.htjgjs == "") {
        this.$message("请输入要增加或修改的合同价格");
        return;
      }
    },
    //全选
    quanxuanbut() {
      if (this.qxxbuts % 2 == 0) {
        for (let i = 0; i < this.tablelists.length; i++) {
          this.turnbuts.push(this.tablelists[i].id);
        }
        this.qxxbuts = this.qxxbuts + 1;
      } else {
        this.turnbuts = [];
        this.qxxbuts = this.qxxbuts - 1;
      }
    },
    //选品维护
    bzwhxxy() {
      //标准维护弹窗
      this.redrscbs = true;
    },
    // 标准信息查询
    bzxxcx() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/bzzxxgls",
        params: {},
      }).then((res) => {
        this.bbbsz = res.data;
      });
    },
    //基本表维护页面
    jcwhbut() {
      this.$router.push({path: "/jtjcwh", query: {}});
    },
    /**
     * 删除供应商
     */
    deletegysmc() {
      if (this.quanxiancard != "220570" && this.quanxiancard != "220589") {
        this.$message("无权限")
        return
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/deletewymgysmc",
        params: {
          gysmc: this.gysmc
        },
      }).then((res) => {
        this.$message("删除成功");
        this.selectattributevalue();
      });
    },
    /**
     * 删除数据列表
     */
    deletewymdcwhxxy(id) {
      if (this.quanxiancard != "220570" && this.quanxiancard != "220589") {
        this.$message("无权限")
        return
      }
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/luruf/deletewymdcwhxxy",
        params: {
          id: id
        },
      }).then((res) => {
        this.tablelists = res.data;
        this.$message("删除成功");
      });

    }
  },
};
</script>

<style scoped>

.xubut option {
  background-color: #3E4559;
  /*  background-color: #1D3466; */
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
}

.turnaongn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.whcuia {
  background-color: #2A354B;
  width: 30vw;
  height: 70vh;
}

.firgui {
  display: flex;
  width: 28vw;
  margin-left: 1vw;
  margin-top: 2.5vh;
  color: #FFFFFF;
  font-size: 1vw;
  /*超出自动换行*/
  flex-wrap: wrap;
  justify-content: space-between;
}


.bbwhtcs {
  width: 29vw;
  height: 30vh;
  background-color: #2c3b4e;
}

.outils {
  font-size: 0.8vw;
  width: 12vw;
  color: #BDE5F7;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  justify-content: space-between;
}

.uhb {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.bzfyh {
  width: 25vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 1.5vh;
}

.udbuibiu {
  width: 11.5vw;
  display: flex;
  justify-content: space-between;
  height: 4vh;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1vh;
}

.textsb {
  color: #fff;
  font-size: 0.7vw;
  width: 2vw;
  text-align: right;
}

.inputindex {
  background-color: #29405f;
  color: #fff;
  border: none;
  width: 4vw;
  height: 2.5vh;
  margin-left: 0.1vw;
}

.buttuo {
  display: flex;
  justify-content: flex-start;
  margin-top: 1vh;
  margin-left: 9.4vw;
  margin-top: 2vh;
}

.buts {
  height: 3.5vh;
  width: 4vw;
  background-color: #0058ce;
  font-size: 0.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 0.2vw;
}

.btbzwh {
  width: 4vw;
  font-size: 1vw;
  color: #fff;
  margin-left: 1vw;
  margin-top: 2.5vh;
  border-left: #e0b564 3px solid;
  padding-left: 0.5vw;
  display: flex;
  align-items: center;
}

.fonts {
  color: #fff;
  font-size: 0.8vw;
  margin-top: 0.5vw;
  margin-left: 1vw;
  display: flex;
  /* justify-content: center; */
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
  font-size: 0.8vw;
}

.qhbb2 {
  background-color: #2f60d2;
  color: #fff;
  font-size: 0.5vw;
  display: flex;
  align-items: center;
  margin-right: 0.3vw;
  cursor: pointer;
  height: 3.5vh;
}

.qhbb4 {
  width: 4vw;
  text-align: center;
  cursor: pointer;
}

.fh {
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
  align-items: center;

}

.ti1 {
  background-color: #192633;
  width: 26.5vw;
  height: 4vh;
  margin-left: 0.3vw;
  border-radius: 0.3vw;
  display: flex;
  justify-content: flex-start;
}

.yica {
  width: 23vw;
  height: 4vh;
  background-color: #2A354B;
  margin-left: 0.5vw;
  display: flex;
  justify-content: flex-start;
}

.spoir {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8vw;
  color: #FFFFFF;
  margin-left: 0.8vw;
}

.airtoi {
  display: flex;
  justify-content: flex-start;
  width: 60vw;
}

.ery {
  display: flex;
  justify-content: flex-end;
}

.xdxx {
  color: #fff;
  margin-top: 1vh;
  margin-left: 0.5vw;
  font-size: 0.8vw;
}

.thres {
  width: 99.4vw;
  height: 5vh;
  background-color: #192633;
  margin-left: 0.3vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.inputs {
  background-color: #3E4559;
  border: none;
  color: #ffffff;
  height: 3vh;
  width: 6vw;
  border-radius: 0.3vw;
  margin-left: 0.5vw;
  cursor: pointer;
  font-size: 0.7vw;
  outline: none;
}

.texts {
  color: #bde5f7;
  margin-left: 0.5vw;
  font-size: 0.7vw;
}

.xbutt {
  background-color: #0058ce;
  color: #fff;
  height: 3vh;
  width: 4vw;
  margin-left: 1.5vw;
  font-size: 0.8vw;
  border-radius: 0.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.imgp {
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

.xiugai {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.xiugaiyemian {
  background-color: #2c3b4e;
  width: 30vw;
  height: 36.5vh;
}

.xiugaimingxi {
  color: #fff;
  font-size: 1.2vw;
  border-left: #e0b564 4px solid;
  padding-left: 0.5vw;
  margin-top: 2vh;
  margin-left: 1.8vw;
}

.tfh {
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5vh;
  padding-left: 2vw;
}

.fanh {
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  margin-right: 2.5vw;
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
</style>
// 表格
<style scoped>
/* table背景 */
.tablebackground {
  background-color: #353d52;
  width: 99.4vw;
  height: 38.5vh;
  margin-left: 0.3vw;
  margin-top: 0.5vh;
}

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
  height: 32.7vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.7%;
  scrollbar-width: none;
  border-collapse: collapse;
}

.table tbody tr td {
  background-color: #1e2d42;
  font-size: 0.7vw;
  /* border-right: red 1px solid;
    border-bottom: red 1px solid; */
}

.table thead tr td {
  font-size: 0.8vw;
  font-weight: normal;
}

.table tbody tr {
  color: #fff;
}

.table td {
  height: 2.7vh;
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
  box-sizing: border-box;
}

.table thead tr td {
  background-color: #142752;
  text-align: center;
}

.table {
  height: 34vh;
  margin-left: 0.15vw;
}

.table thead {
  height: 2.7vh;
  width: 99.7%;
  color: #fff;
  border-collapse: collapse;
  font-size: 0.6vw;
  margin-top: 0.5vh;
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
  width: 4.5vw !important;
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
  color: #809dd2;
}

.el-date-editor .el-icon-circle-close {
  display: none;
}

.el-input__inner {
  height: 2vh !important;
  padding-right: 0vw !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 0.8vw;
  padding: 1vw 0 1vw 0;
  /* 取消颜色,颜色跟随背景色 */
  background-color: rgba(0, 0, 0, 0) !important;
}

</style>
