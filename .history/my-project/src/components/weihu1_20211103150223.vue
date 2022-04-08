<template>
  <!-- 头部 -->
  <div style="height:87vh;width:100%;">
    <div id="timek2" class="ic" style="width:100%;height:11%;">
      <div style="width:69%;height:100%;float:left;">
         <div style="height:40%;width:100%;">
          <div style="line-height:3;padding-left:0.5vw;width:69%;float:left;height:100%;font-size:0.9vw;color:#fff;">
            <i class="el-icon-tickets"></i><span style="margin-left:0.2%;">选单信息添加</span>
          </div>
        </div>
        <div style="height:5%;width:100%;"></div>
        <div style="height:50%;width:100%;">
        <div class="ic" style="width:6%;float:left;height:100%;">
          <div class="ir" style="color:#bde5f7;font-size:0.8vw;border-radius:5%;width:100%;height:70%;">物料名称:</div>
        </div>
        <div style="width:0.5%;float:left;height:100%;"></div>
        <div class="ic" style="width:10%;float:left;height:100%;">
          <input type="text" v-model="v1" style="color:#7A91BB;border-radius:5%;background:#1D3466;border:none;width:100%;height:calc(70% - 0.2vw);">
        </div>

        <div style="width:0.5%;float:left;height:100%;"></div>
        <div class="ic" style="width:8%;float:left;height:100%;">
          <div class="ir" style="color:#bde5f7;font-size:0.8vw;border-radius:5%;width:100%;height:70%;">供应商名称:</div>
        </div>
        <div style="width:0.5%;float:left;height:100%;"></div>
        <div class="ic" style="width:10%;float:left;height:100%;">
          <input type="text" v-model="v2" style="color:#7A91BB;border-radius:5%;background:#1D3466;border:none;width:100%;height:calc(70% - 0.2vw);">
        </div>
        <div style="width:1.5%;float:left;height:100%;"></div>
        <div class="ic" style="width:5%;float:left;height:100%;">
          <div class="ir" v-html="'料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:'" style="color:#bde5f7;font-size:0.8vw;border-radius:5%;width:100%;height:70%;"></div>
        </div>
        <div style="width:0.5%;float:left;height:100%;"></div>
        <div class="ic" style="width:10%;float:left;height:100%;">
          <input type="text" v-model="v3" style="color:#7A91BB;border-radius:5%;background:#1D3466;border:none;width:100%;height:calc(70% - 0.2vw);">
        </div>

        <div style="width:2%;float:left;height:100%;"></div>
        <div class="ic" style="width:5%;float:left;height:100%;">
          <div class="ic" @click="add_option()" style="cursor:pointer;color:#fff;font-size:0.8vw;border-radius:5%;width:100%;height:70%;background:#0058CD;">新增</div>
        </div>
        </div>
       <div style="height:5%;width:100%;"></div>
      </div>
       
      <div class="ic" style="width:30%;height:45%;float:left;background:#22396B;">
        <div style="color:#7691C0;width:58%;float:left;height:90%;">
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <div class="ic" style="font-size:0.8vw;cursor:pointer;border-radius:5%;color:#fff;float:left;width:18%;height:80%;background:#0256CB;">保存</div>
        <div class="ic" style="float:left;width:1%;height:80%;background-color: #22396B;"></div>
        <div class="ic" style="cursor:pointer;border-radius:5%;color:#fff;float:left;width:18%;height:80%;">
          <select style="border:none;font-size:0.8vw;padding-left:1.4vw;background:#5E45A9;width:100%;height:100%;">
            <option value="版本">版本</option>
            <option value="版本">版本</option>
            <option value="版本">版本</option>
            <option value="版本">版本</option>
          </select>
        </div>
      </div>
    </div>
      <div class="ic" style="width:100%;height:5%;">
       <div style="line-height:2;padding-left:0.5vw;width:69%;float:left;height:100%;font-size:0.9vw;color:#fff;">
         <i class="el-icon-tickets"></i><span style="margin-left:0.2%;">录入明细添加</span></div>
        <div class="ic" style="width:30%;height:90%;float:left;"></div>
      </div>
      <div style="border-radius:1%;color:#bde5f7;font-size:0.8vw;width:99%;margin:0 auto;height:5%;background:#353D52;">
          <div style="width:100%;height:100%;">
            <div class="il" style="float:left;width:12%;height:100%;">
              <div class="il" style="float:left;padding-left:0.8vw;width:35%;height:100%;">物料名称:</div>
              <div class="il" style="float:left;width:60%;height:80%;">
                <select class="nobody" v-model="formr.v1" style="border:0.1vw solid #29405F;font-size:0.8vw;width:100%;height:100%;background:#29405F;color:#bde5f7;border:none;">
                  <option v-for="(item,index) in option1" :key="index" :value="item.texts">{{item.texts}}</option>
                </select>
              </div>
            </div>
            <div class="il" style="float:left;width:13%;height:100%;">
              <div class="il" style="float:left;padding-left:1.2vw;width:40%;height:100%;">供应商名称:</div>
              <div class="il" style="float:left;width:60%;height:80%;">
                <select class="nobody" v-model="formr.v2" style="border:0.1vw solid #29405F;font-size:0.8vw;width:100%;height:100%;background:#29405F;color:#bde5f7;border:none;">
                    <option v-for="(item,index) in option2" :key="index" :value="item.texts">{{item.texts}}</option>
                </select>
              </div>
            </div>
             <div class="il" style="float:left;width:12%;height:100%;">
              <div class="il" v-html="'料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:'" style="float:left;padding-left:1.3vw;width:35%;height:100%;"></div>
              <div class="il" style="float:left;width:60%;height:80%;">
                <select class="nobody" v-model="formr.v3" style="border:0.1vw solid #29405F;font-size:0.8vw;width:100%;height:100%;background:#29405F;color:#bde5f7;border:none;">
                    <option v-for="(item,index) in option3" :key="index" :value="item.texts">{{item.texts}}</option>
                </select>
              </div>
            </div>
            <div class="il" style="float:left;width:12%;height:100%;">
              <div class="il" style="float:left;padding-left:1.2vw;width:35%;height:100%;">合同价格:</div>
              <div class="il" style="float:left;width:60%;height:75%;">
                <input type="text" v-model="formr.v4" style="border:0.05vw solid #434D64;font-size:0.8vw;width:100%;height:100%;background:#29405F;color:#bde5f7;">
              </div>
            </div>
            <div class="il" style="float:left;width:13%;height:100%;">
              <div class="il" style="float:left;padding-left:1.5vw;width:35%;height:100%;">月计划量:</div>
              <div class="il" style="float:left;width:60%;height:75%;">
                <input type="text" v-model="formr.v5" style="border:0.05vw solid #434D64;font-size:0.8vw;width:100%;height:100%;background:#29405F;color:#bde5f7;">
              </div>
            </div>
            <div class="ic" style="width:1%;float:left;height:100%;"></div>
            <div class="ic" style="width:4%;float:left;height:100%;">
              <div class="ic" @click="add_list()" style="cursor:pointer;color:#fff;font-size:0.8vw;border-radius:5%;width:100%;height:80%;background:#0058CD;">新增</div>
            </div>
          </div>
      </div>
      <div style="height:4%;width:100%;">
          <div style="line-height:2;padding-left:0.8vw;width:69%;float:left;height:100%;font-size:0.9vw;color:#fff;">
            <i class="el-icon-tickets"></i><span style="margin-left:0.2%;">数据列表</span>
          </div>
        </div>
      <div style="height:75%;width:99%;margin:0 auto;background:#353D52;">
        <div style="width:100%;height:1%;"></div>
          <div class="nobody" style="border-bottom:0.1vw solid #2A354B;width:99%;margin:0 auto;height:6%;background:#142752;">
            <div class="td1 ic nobody" style="width:4%;border-right:0.1vw solid #2A354B;">序号</div>
            <div class="td1 ic nobody" style="width:10%;border-right:0.1vw solid #2A354B;">物料名称</div>
            <div class="td1 ic nobody" style="width:25%;border-right:0.1vw solid #2A354B;">供应商名称</div>
            <div class="td1 ic nobody" style="width:10%;border-right:0.1vw solid #2A354B;">料种</div>
            <div class="td1 ic nobody" style="width:15%;border-right:0.1vw solid #2A354B;">月计划量</div>
            <div class="td1 ic nobody" style="width:6%;border-right:0.1vw solid #2A354B;">选型</div>
            <div class="td1 ic nobody" style="width:15%;border-right:0.1vw solid #2A354B;">合同单价</div>
            <div class="td1 ic nobody" style="width:15%;border-right:0.1vw solid #2A354B;">操作</div>
          </div>
          <div class="card" id="left1" style="width:100%;height:93%;overflow-y:scroll;overflow-x:hidden;scrollbar-width: none;">
            <div v-for="(item,index) in xmldata" :key="index" class="nobody powa" style="cursor:pointer;border-bottom:0.1vw solid #2A354B;width:99%;margin:0 auto;height:8%;background:#1E2D42;">
              <div class="td2 il nobody" style="padding-left:1.2vw;width:4%;border-right:0.1vw solid #2A354B;">{{index+1}}</div>
              <div class="td2 il nobody" style="padding-left:1.5vw;width:10%;border-right:0.1vw solid #2A354B;">{{item.name}}</div>
              <div class="td2 il nobody" style="padding-left:1.5vw;width:25%;border-right:0.1vw solid #2A354B;">{{item.company}}</div>
              <div class="td2 il nobody" style="padding-left:1vw;width:10%;border-right:0.1vw solid #2A354B;">{{item.type}}</div>
              <div v-show="indata.indexOf(item.id)==-1" class="td2 il nobody" style="padding-left:2vw;width:15%;border-right:0.1vw solid #2A354B;">
                {{item.month_num}}
              </div>
              <div v-show="indata.indexOf(item.id)>-1" class="td2 ic nobody" style="width:15%;border-right:0.1vw solid #2A354B;">
                <input type="text" v-model="xmldata[index].month_num" style="padding-left:1vw;color:#7A91BB;border-radius:5%;background:#29405F;border:none;width:80%;height:calc(70% - 0.2vw);">
              </div>
              <div class="td2 ic nobody" style="width:6%;border-right:0.1vw solid #2A354B;">
                <img src="../assets/c1.png" @click="xmldata[index]['selected']=1" v-if="item.selected==0" style="width:20%;height:auto;" alt="">
                <img src="../assets/c2.png" @click="xmldata[index]['selected']=0" v-else style="width:20%;height:auto;" alt="">
              </div>
              <div v-show="indata.indexOf(item.id)==-1" class="td2 il nobody" style="padding-left:2vw;width:15%;border-right:0.1vw solid #2A354B;">
                {{item.price}}
              </div>
              <div v-show="indata.indexOf(item.id)>-1" class="td2 ic nobody" style="width:15%;border-right:0.1vw solid #2A354B;">
                <input type="text" v-model="xmldata[index].price" style="padding-left:1vw;color:#7A91BB;border-radius:5%;background:#29405F;border:none;width:80%;height:calc(70% - 0.2vw);">
              </div>
              <div class="td2 il nobody" style="padding-left:1vw;width:15%;border-right:0.1vw solid #2A354B;">
                <div class="ir" style="width:33%;height:100%;float:left;">
                  <img @click="inserts(item.id)" src="../assets/b1.png" style="width:25%;height:auto;" alt="">
                </div>
                <div class="ic" style="width:33%;height:100%;float:left;">
                  <img @click="remos(item.id,index)" src="../assets/b2.png" style="width:25%;height:auto;" alt="">
                </div>
                <div class="il" style="width:33%;height:100%;float:left;">
                  <img src="../assets/b3.png" style="width:25%;height:auto;" alt="">
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery'
import * as echarts from 'echarts'
export default {
  data() {
    return {
      xmldata:[],
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
      },
      value1: '',
      v1:'',
      v2:'',
      v3:'',
      formr:{
        v1:'',
        v2:'',
        v3:'',
        v4:'',
        v5:''
      },
      
      option1:[],
      option2:[],
      option3:[],
      indata:[],
    };
  },
  methods: { 
      getdata(){
          axios.get('http://10.6.1.129/yuan_api/option.php?type=data').then((res)=> {
              this.xmldata=res.data; 
          })
      },
      inserts(id){
        this.indata.push(id);
      },
      add_list(){
          if(this.formr.v1=='' && this.formr.v2=='' &&this.formr.v3=='' &&this.formr.v4=='' &&this.formr.v5==''){
            this.$message.error("空值请勿添加!");
          }else{
              var params = new URLSearchParams();
              params.append('data', JSON.stringify(this.formr));
              axios.post("http://10.6.1.129/yuan_api/add_list.php",params).then((res)=>{
                  if(res.data>0){
                    this.$message.success("添加成功!")
                    this.getdata();
                  }
              })
          }
             
      },
      getoption(){
          axios.get('http://10.6.1.129/yuan_api/option.php?type=option').then((res)=> {
              this.option1=res.data.v1;
              this.option2=res.data.v2;
              this.option3=res.data.v3;
          })
      },
      add_option(){
          var params = new URLSearchParams();
              params.append('v1', this.v1);
              params.append('v2', this.v2);
              params.append('v3', this.v3);
              axios.post("http://10.6.1.129/yuan_api/insert.php",params).then((res)=>{
                  if(res.data>0){
                    this.$message.success("添加成功!")
                  }
              })
      },
      remos(id,index){
        this.indata.forEach((item,index)=>{
            if(item==id){
                this.indata.splice(index);
            }
        })
        var params = new URLSearchParams();
              params.append('data', JSON.stringify(this.xmldata[index]));
              axios.post("http://10.6.1.129/yuan_api/option.php?type=update",params).then((res)=>{
                  if(res.data>0){
                    this.$message.success("修改成功!")
                  }
              })
      }
  },
  created() {},
  mounted() {
    this.getdata();
    this.getoption();
  },
};
</script>
<style>
body::-webkit-scrollbar {display: none;}
body{
  margin: 0px;
  padding: 0px;
  background-color: #091022;
  overflow: hidden;
}
.nobody{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing:border-box;
}
.ic {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
.ir {
  display: flex;
  display: -webkit-flex;
  align-items:center ;
  justify-content: flex-end;
}
.el-date-editor .el-range-separator{
  color:#7A91BB !important;
  line-height: 1.8;
}
#timek2 .el-input__inner{
  background-color: #22396B;
  border:none;
  height:100% !important;
  color:#7691C0 !important;
}
#timek2 .el-date-editor.el-input, .el-date-editor.el-input__inner{
  width:100% !important;
  height:100% !important;
}
#timek2 .el-input--prefix .el-input__inner{
  padding-left: 1.7vw;
}
#timek2 .el-input--suffix .el-input__inner {
  padding-right: 1vw;
}
#timek2 .el-input__icon{
  line-height:1.8;
}
#timek2 .el-range-input{
  background-color: #22396B;
  color:#7A91BB !important;
}
#timek2 .el-input__prefix{
  left:0 !important;
}
#timek2 .el-icon-date{
  color:#0956C8 !important;
}
</style>
<style scoped>
 #timek2 select{
   color:#fff;
 }
 .td2{
  color:#8DB6C9;
  height:100%;
  float:left;
  font-size:0.8vw;
}
.td1{
  height:100%;
  float:left;
  color:#fff;
  font-size:0.8vw;
}
.card::-webkit-scrollbar {display: none;}
</style>