<template>
  <div>
    <!-- 第一行 -->
    <div class="fh">
      <div class="xdxx" style="width: 8vw">选单信息添加</div>
      <!-- 按钮 -->
      <div class="ery">
        <div class="qhbb2" style="border-radius: 0.2vw; margin-left: 1vw">
          <div class="qhbb4" style="font-size: 0.8vw" @click="bzwhxxy()">
            标准维护
          </div>
        </div>
        <div class="qhbb2" style="border-radius: 0.2vw">
          <div class="qhbb4" style="font-size: 0.8vw" @click="xpwhtur()">
            选品维护
          </div>
        </div>
        <div class="qhbb2" style="border-radius: 0.2vw">
          <div class="qhbb4" style="font-size: 0.8vw" @click="insertversons()">
            保存
          </div>
        </div>
        <div class="qhbb2" style="border-radius: 0.2vw">
          <div class="qhbb4" style="font-size: 0.8vw" @click="fhtursec">
            返回
          </div>
        </div>
      </div>
    </div>

    <!-- 第三行 -->
    <div class="thres">
      <div>
        <select
          class="inputs"
          style="border: none; width: 6.2vw"
          v-model="butf"
        >
          <option v-for="(item, index) in butlist" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div style="margin-left: 1.5vw">
        <input type="text" class="inputs" v-model="ifbut" />
      </div>
      <div class="xbutt" @click="insertattribute()">新增</div>
    </div>
    <!-- 第四行 -->
    <div class="xdxx">录入明细添加</div>
    <div class="thres">
      <div>
        <span class="texts"> 物料名称: </span>
        <select
          class="inputs"
          style="border: none; width: 6.2vw"
          v-model="wlmc"
        >
          <option v-for="(item, index) in selectbuts.wlmc" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div style="margin-left: 1.5vw">
        <span class="texts"> 供应商名称: </span>
        <select
          class="inputs"
          style="border: none; width: 6.2vw"
          v-model="gysmc"
        >
          <option v-for="(item, index) in selectbuts.gysmc" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div style="margin-left: 1.5vw">
        <span class="texts"> 料种: </span>
        <select
          class="inputs"
          style="border: none; width: 6.2vw"
          v-model="lzmc"
        >
          <option v-for="(item, index) in selectbuts.lzmc" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <span class="texts" style="margin-left: 1.5vw"> 合同价格: </span>
        <input type="text" class="inputs" v-model="htjg" />
      </div>
      <div>
        <span class="texts" style="margin-left: 1.5vw"> 月计划量: </span>
        <input type="text" class="inputs" v-model="yjhl" />
      </div>
      <div class="xbutt" @click="insertallofluruf()">新增</div>
      <!-- 合同价格同加同减 -->
      <div>
        <span class="texts" style="margin-left: 1.5vw"> 合同价格+: </span>
        <input type="text" class="inputs" v-model="htjgzj" />
      </div>
      <div>
        <span class="texts" style="margin-left: 1.5vw"> 合同价格-: </span>
        <input type="text" class="inputs" v-model="htjgjs" />
      </div>
      <div class="xbutt" @click="htjgtjtj()">修改</div>
      <div class="xbutt" @click="quanxuanbut()">全选/取消</div>
    </div>
    <!-- 第五行 -->
    <div class="xdxx">数据列表</div>
    <!-- 第六行 table -->
    <div class="tablebackground">
      <table class="table">
        <thead>
          <tr>
            <td style="width: 4vw">序号</td>
            <td style="width: 15.8vw">物料名称</td>
            <td style="width: 18vw">供应商名称</td>
            <td style="width: 15vw">料种</td>
            <td style="width: 14vw">月计划量</td>
            <td style="width: 20.8vw">合同价格</td>
            <td style="width: 5.5vw">选型</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tablelists" :key="index">
            <td style="width: 4vw">{{ index + 1 }}</td>
            <td style="width: 15.8vw; text-align: left">
              {{ item.materialName }}
            </td>
            <td style="width: 18vw; text-align: left">
              {{ item.distributorName }}
            </td>
            <td style="width: 15vw; text-align: left">{{ item.sterilise }}</td>
            <td style="width: 14vw; text-align: right; font-weight: lighter">
              {{ item.monthAmount }}
            </td>
            <td style="width: 20.8vw; text-align: right; font-weight: lighter">
              {{ item.contractPrice }}
            </td>
            <td style="width: 5.5vw">
              <div>
                <span
                  @click="rebuts(item.id)"
                  v-if="turnbuts.indexOf(item.id) == -1"
                  style="cursor: pointer; font-size: 0.85vw"
                  ><i class="el-icon-circle-check"></i
                ></span>
                <span v-else @click="rebuts1(item.id)" style="cursor: pointer"
                  ><i class="el-icon-success"></i
                ></span>
              </div>
            </td>
            <td class="imgp">
              <div
                style="cursor: pointer; display: flex; justify-content: center"
                @click="
                  updatecontext(
                    item.materialName,
                    item.distributorName,
                    item.sterilise,
                    item.monthAmount,
                    item.contractPrice,
                    item.id
                  )
                "
              >
                <img
                  src="../assets/b1.png"
                  style="width: 0.9vw; height: 1.8vh"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 修改弹窗 -->
    <div class="xiugai" v-if="updateshow == true">
      <div class="xiugaiyemian">
        <div class="xiugaimingxi">修改明细</div>
        <!-- 第一行 -->
        <div class="tfh">
          <div>
            <span class="texts"> 物料名称 </span>
            <select
              class="inputs"
              style="border: none; width: 6.2vw"
              v-model="wlmc"
            >
              <option v-for="(item, index) in selectbuts.wlmc" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
          <div style="margin-left: 1.5vw">
            <span class="texts"> 供应商名称 </span>
            <select
              class="inputs"
              style="border: none; width: 6.2vw"
              v-model="gysmc"
            >
              <option v-for="(item, index) in selectbuts.gysmc" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <!-- 第二行 -->
        <div class="tfh">
          <div style="margin-left: 1.8vw">
            <span class="texts"> 料种 </span>
            <select
              class="inputs"
              style="border: none; width: 6.2vw"
              v-model="lzmc"
            >
              <option v-for="(item, index) in selectbuts.lzmc" :key="index">
                {{ item }}
              </option>
              <option>1231231</option>
            </select>
          </div>
          <div style="margin-left: 0.9vw">
            <span class="texts" style="margin-left: 1.9vw"> 合同价格 </span>
            <input type="text" class="inputs" v-model="htjg" />
          </div>
        </div>
        <!-- 第三行 -->
        <div style="margin-top: 2vh">
          <span class="texts" style="margin-left: 2.5vw"> 月计划量 </span>
          <input type="text" class="inputs" v-model="yjhl" />
        </div>
        <!-- 第四行按钮行 -->
        <div class="fanh">
          <div
            class="xbutt"
            style="background-color: #abbbce"
            @click="qxupbut()"
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
              style="margin-left: 0.3vw"
            />
            <span>-</span>
            <input type="text" class="inputindex" v-model="item.price2" />
          </div>
        </div>
        <div class="buttuo">
          <div
            class="buts"
            style="background-color: #abbbce"
            @click="qubzwhtc()"
          >
            取消
          </div>
          <div class="buts" style="margin-left: 2vw" @click="updatewhbztc()">
            确定
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
      value1: "",
      value2: "",
      qubban: "",
      // 选单信息添加
      butlist: ["物料名称", "供应商名称", "料种"],
      //选单信息添加下拉
      butf: "",
      //选单信息添加input
      ifbut: "",
      // 按钮分配属性值
      selectbuts: [],
      //物料名称
      wlmc: "",
      //供应商名称
      gysmc: "",
      //料种
      lzmc: "",
      //合同价格
      htjg: "",
      //月计划量
      yjhl: "",
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
    };
  },
  mounted() {
    //下拉按钮初始化
    this.selectofluruf();
    (this.butf = this.butlist[0]), this.selectattributevalue();
    // axios({
    //   method: "post",
    //   url: "http://localhost:40013/mpd/ylxjb/luruf/insertallofluruf",
    //   params: {
    //     materialname: this.wlmc,
    //     distributorname: this.gysmc,
    //     sterilise: this.lzmc,
    //     contractprice: this.htjg,
    //     monthamount: this.yjhl,
    //   },
    // }).then((res) => {
    //   this.tablelists = res.data;
    // });
    this.bzxxcx();
  },
  methods: {
    //修改维护标准弹窗
    updatewhbztc() {
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/tastedupdate",
        params: {},
      }).then((res) => {
        bzlist: JSON.stringify(this.bbbsz);
      });
    },
    //取消标准维护按钮弹窗
    qubzwhtc() {
      this.bzwhtc = false;
    },
    // 下拉列框添加按钮
    insertattribute() {
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/insertattribute",
        params: {
          attributename: this.butf,
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
        url: "http://localhost:40013/mpd/ylxjb/luruf/selectattributevalue",
        params: {},
      }).then((res) => {
        this.selectbuts = res.data;
        this.wlmc = this.selectbuts.wlmc[0];
        this.gysmc = this.selectbuts.gysmc[0];
        this.lzmc = this.selectbuts.lzmc[0];
      });
    },
    //信息添加至表格中
    insertallofluruf() {
      if (this.htjg == "") {
        this.$message("请填写完整的信息");
        return;
      }
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/insertallofluruf",
        params: {
          materialname: this.wlmc,
          distributorname: this.gysmc,
          sterilise: this.lzmc,
          contractprice: this.htjg,
          monthamount: this.yjhl,
        },
      }).then((res) => {
        this.tablelists = res.data;
        this.selectattributevalue();
        this.$message("添加成功");
        (this.htjg = ""), (this.yjhl = "");
      });
    },
    //初始化查询表格信息
    selectofluruf() {
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/selectofluruf",
        params: {},
      }).then((res) => {
        this.tablelists = res.data;
      });
    },
    //切换按钮
    rebuts(id) {
      this.turnbuts.push(id);
    },
    //切换按钮
    rebuts1(id) {
      let haha = this.turnbuts.indexOf(id);
      // 删除数组中的元素,1代表删除一个
      this.turnbuts.splice(haha, 1);
    },
    //添加版本号
    insertversons() {
      if (this.turnbuts.length == 0) {
        this.$message("请勾选需要添加的信息");
        return;
      }
      for (let i = 0; i < this.turnbuts.length; i++) {
        axios({
          method: "post",
          url: "http://localhost:40013/mpd/ylxjb/luruf/insertversons",
          params: {
            //jas:JSON.stringify(this.turnbuts),
            id: this.turnbuts[i],
          },
        }).then((res) => {});
      }
      this.$message("添加成功");
      this.turnbuts = [];
    },
    //修改信息
    updatecontext(
      materialName,
      distributorName,
      sterilise,
      monthAmount,
      contractPrice,
      id
    ) {
      this.wlmc = materialName;
      this.gysmc = distributorName;
      this.lzmc = sterilise;
      this.htjg = contractPrice;
      this.yjhl = monthAmount;
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
    //确定修改
    quedingupdate() {
      if (this.htjg == "" || this.yjhl == "") {
        this.$message("请输入完整信息");
        return;
      }
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/updatecontext",
        params: {
          materialname: this.wlmc,
          distributorname: this.gysmc,
          sterilise: this.lzmc,
          contractprice: this.htjg,
          monthamount: this.yjhl,
          id: this.upid,
        },
      }).then((res) => {
        //修改之后查询表格信息
        this.updateshow = false;
        //初始化物料名称
        this.wlmc = this.selectbuts.wlmc[0];
        //初始化供应商名称
        this.gysmc = this.selectbuts.gysmc[0];
        //初始化料种
        this.lzmc = this.selectbuts.lzmc[0];
        this.htjg = "";
        this.yjhl = "";
        this.selectofluruf();
        this.$message("修改成功");
      });
    },
    fhtursec() {
      this.$router.push({ path: "/first", query: {} });
    },
    xpwhtur() {
      this.$router.push({ path: "/secound", query: {} });
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
          url: "http://localhost:40013/mpd/ylxjb/luruf/inserthtjgtjia",
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
          url: "http://localhost:40013/mpd/ylxjb/luruf/inserthtjgjian",
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
      this.bzwhtc = true;
    },
    // 标准信息查询
    bzxxcx() {
      axios({
        method: "post",
        url: "http://localhost:40013/mpd/ylxjb/luruf/selectbzzxx",
        params: {},
      }).then((res) => {
        this.bbbsz = res.data;
      });
    },
  },
};
</script>

<style scoped>
.bbwhtcs {
  width: 27vw;
  height: 25vh;
  background-color: #2c3b4e;
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
  margin-top: 1vh;
}
.udbuibiu {
  width: 11.5vw;
  display: flex;
  justify-content: space-between;
  height: 4vh;
  flex-wrap: wrap;
  align-items: center;
}
.textsb {
  color: #bde5f7;
  font-size: 0.7vw;
  width: 2vw;
  text-align: right;
}
.inputindex {
  background-color: #1d3466;
  color: #c8dbff;
  border: none;
  width: 4vw;
  height: 2.5vh;
  margin-left: 0.1vw;
}
.buttuo {
  display: flex;
  justify-content: flex-start;
  margin-top: 1vh;
  margin-left: 8.6vw;
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
  font-size: 0.8vw;
  color: #fff;
  margin-left: 1vw;
  margin-top: 1.5vh;
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
  margin-top: 1vh;
  margin-left: 0.3vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inputs {
  background-color: #1d3466;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 31vh;
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
</style>
// 表格
<style scoped>
/* table背景 */
.tablebackground {
  background-color: #353d52;
  width: 99.4vw;
  height: 68vh;
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
  background-color: #0061d1;
}

tr:hover {
  background-color: #0061d1;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 64vh;
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