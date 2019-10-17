<template>
  <div>
    <!-- 栅格布局 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 面包屑 -->
          <!-- <span id="toreturn">◀返回</span> -->
          <span>预约</span>
        </div>
      </el-col>
    </el-row>

    <!-- <el-Steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-Steps>-->

    <!-- <el-steps :space="200" :active="active" finish-status="success">
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
    </el-steps>-->
    <div class="navbox">
      <el-tabs :tab-position="tabPosition" style="height:600px;" v-model="active1">
        <el-tab-pane label="查询" name="1">
          <!-- 点击显示抽屉栏 -->
          <div class="queryChoose">选择查询方式</div>
          <div class="queryButton">
            <el-button type="success" @click="queryExaTable = true" size="small">精确查询</el-button>
            <el-button type="success" @click="querytable = true" size="small">选择查询</el-button>
          </div>
          <!-- 1.输入姓名查找 -->
          <el-drawer title="精确查询" :visible.sync="queryExaTable" direction="rtl" size="100%">
            <div class="accurateQueryBox">
              <div class="inputQueryBOx">
                <el-input
                  placeholder="请输入名字"
                  v-model.trim="accurateInputValue"
                  clearable
                  style="width:60%"
                  @clear="resetinput"
                ></el-input>
                <el-button icon="el-icon-search" @click="findByNanme" >查找</el-button>
                
              </div>
              <div class="tableContent">
                <!-- 表格显示 -->
                <el-table :data="QueryRuesult" border style="width: 100%"  v-loading="loading">
                  <el-table-column prop="name" label="姓名"></el-table-column>

                  <el-table-column prop="school" label="学校"></el-table-column>
                  <el-table-column prop="class" label="班级"></el-table-column>
                </el-table>
              </div>
            </div>
          </el-drawer>

          <!--2. 按条件查找 -->
          <el-drawer title="选择查询" :visible.sync="querytable" direction="rtl" size="100%">
            <div class="queryByCondition">
              <p class="atips">请从上而下选择查询：</p>
              <div class="chioeseQuery">
                <el-select v-model="choeseprovince" placeholder="请选择省份"  @change="gethttpProvince(choeseprovince)" size="small">
                  <el-option
                    v-for="item in provinces"
                    :key="item.ask_data"
                    :label="item.ask_data"
                    :value="item.ask_data"
                   
                  ></el-option>
                </el-select>
              </div>
              <!-- <p class="atips">2.选择市</p> -->
              <div class="chioeseQuery">
                <el-select v-model="choesecities" placeholder="请选择市"  @change="gethttpCities(choesecities)" size="small">
                  <el-option
                    v-for="item in cities"
                    :key="item.ask_data"
                    :label="item.ask_data"
                    :value="item.ask_data"
                  ></el-option>
                </el-select>
              </div>
              <!-- <p class="atips">3.选择区</p> -->
              <div class="chioeseQuery">
                <el-select v-model="choeseArea" placeholder="请选择市区" @change="gethttpAreas(choeseArea)" size="small">
                  <el-option
                    v-for="item in areas"
                     :key="item.ask_data"
                     :label="item.ask_data"
                     :value="item.ask_data"
                  ></el-option>
                </el-select>
              </div>
              <!-- <p class="atips">4.选择学校</p> -->
              <div class="chioeseQuery">
                <el-select v-model="choeseSchool" placeholder="请选择学校" @change="gethttpSchool(choeseSchool)" size="small">
                  <el-option
                    v-for="item in schools"
                     :key="item.ask_data"
                     :label="item.ask_data"
                     :value="item.ask_data"
                  ></el-option>
                </el-select>
              </div>
              <!-- <p class="atips">5.选择班级</p> -->
              <div class="chioeseQuery">
                <el-select v-model="choeseClass" placeholder="请选择班级" size="small">
                  <el-option
                    v-for="item in classes"
                     :key="item.ask_data"
                     :label="item.ask_data"
                     :value="item.ask_data"
                  ></el-option>
                </el-select>
                <!-- <p class="atips">6.选择姓名</p> -->
                <div class="chioeseQuery">
                  <el-select v-model="choeseName" placeholder="请选择姓名" size="small">
                    <el-option
                      v-for="item in names"
                     :key="item.ask_data"
                     :label="item.ask_data"
                     :value="item.ask_data"
                    ></el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </el-drawer>

          <div class="nextStep">
            <el-button size="small" @click="next">下一步</el-button>
          </div>
        </el-tab-pane>

        <!-- 预约table栏 -->
        <el-tab-pane label="预约" name="2">
          <div class="orderPhone">
            <div class="phoneNumber">
              <!-- input手机号码输入框 -->           
              <el-input
                v-model.trim="inputphoneNumber"
                maxlength="11"
                placeholder="请输入手机号"
                style="width:60%"
                  suffix-icon="el-icon-phone"
              ></el-input>              
            </div>
            <div class="checkNumber">             
              <el-input
                v-model="inputcheckNumber"
                maxlength="4"
                placeholder="请输入验证码"
                style="width:50%"
              ></el-input>                        
              <img src="../assets/yzm.jpg" alt width="82px" height="32px" />
              
            </div>
            
            <!-- <el-button type="success" round size="small">确认</el-button> -->

            <!-- 点击弹出框 -->
            <!-- <el-button type="text" @click="dialogVisible = true" id="caluse">相关条款</el-button> -->

            <!-- 单选框 -->

            <el-checkbox v-model="checked" @click.native="cliscksure">同意相关条款</el-checkbox>
            <!-- 确认按钮 -->

            <div class="agreeButton">
              <el-button :type="buttonType" size="small" @click="checkPhone">确认</el-button>
            </div>
            <div class="ordersteps">
              <el-button size="small" @click="top">上一步</el-button>
              <el-button size="small" @click="next">下一步</el-button>
            </div>
          </div>
        </el-tab-pane>

        <!-- 三、选择时间 -->
        <el-tab-pane label="时间选择" name="3">
          <div class="timeChoese">
               <!-- 卡片区域 -->
              <!-- （1）上午卡片区域 -->

             <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="cardMoring">预约上午</span>
              </div>
              <!-- 上午时间选择卡片区域 -->
              <div class="switchs-left">
                <div v-for="(item,i) in switchioes" :key="item.value" class="text item">
                
                  <el-button
                    :type="item.type"
                    round
                    size="mini"
                    @click="timechoese(item,i)"
                    icon="el-icon-time"
                  >{{item.value}}</el-button>
                </div>
              </div>
             </el-card>

            <!-- （2）下午卡片区域 -->
            <div class="timeChoeseAfernoon">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span class="cardafternoom">预约下午</span>
                </div>
                  <!-- 下午时间选择区域 -->
                  <div class="card-afternoon">
                <div v-for="(item,j) in switchioesTwo" :key="item.value" class="text item">
                  <!-- {{item.value}} -->
                  <el-button
                    :type="item.type"
                    round
                    size="mini"
                    @click="timechoeseAfernoon(item,j)"
                     icon="el-icon-time"
                  >{{item.value}}</el-button>
                </div>
                </div>
              </el-card>
            </div>
            <!-- （3）晚上卡片区域 -->
               <div class="timeChoeseAfernoon">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span class="cardafternoom">预约晚上</span>
                </div>
                  <!-- 下午时间选择区域 -->
                  <div class="card-afternoon">
                <div v-for="(item,f) in switchioesThree" :key="item.value" class="text item">
                  <!-- {{item.value}} -->
                  <el-button
                    :type="item.type"
                    round
                    size="mini"
                    @click="timechoeseNeight(item,f)"
                     icon="el-icon-time"
                  >{{item.value}}</el-button>
                </div>
                </div>
              </el-card>
            </div>
             <div class="totalprice">
               <el-divider content-position="center">价格：<span class="price">{{totalprice}}</span> 元</el-divider>
               </div> 
            <el-button size="small" @click="top">上一步</el-button>
            <el-button size="small" @click="next">下一步</el-button>
          </div>
        </el-tab-pane>

        <!-- 五、预订单 -->
        <el-tab-pane label="预订单" name="4">
        <div class="beforehandOrder"> 
          预订单
          <div class="tableIfo">
             
            <!-- 预订单处表格 -->
                <el-table
                 :data="beforehandTable"
                 border
                 size="mini"
                 >
                 <el-table-column
                   prop="name"
                   label="姓名"
                     width="60px"
                      fixed
                    >
                 </el-table-column>
                 <el-table-column
                   prop="class"
                   label="班级"
                   >
                 </el-table-column>
                 <el-table-column
                   prop="school"
                   label="学校">
                 </el-table-column>
                 <el-table-column
                   prop="time"
                   label="预约时段"
                   width="120px">
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                 </el-table-column>
                 <el-table-column
                   prop="price"
                   label="总费用(单位/元)">
                 </el-table-column>
               </el-table>
              </div>
              <div class="payWays">
                请选择支付方式：
                  
                 <el-button type="success" plain size="mini"><i class="iconfont icon-weixin"></i> 微 信</el-button>
                 <el-button type="primary" plain size="mini"><i class="iconfont icon-zhifubao"></i>支付宝</el-button>
                  <el-button plain size="small" icon="el-icon-more">其他</el-button>
              </div>
          <el-button size="small" @click="top">上一步</el-button>
          <el-button size="small" @click="next">下一步</el-button>
        </div> 
        </el-tab-pane>
        <!-- 六、订单回执 -->
        <el-tab-pane label="预约回执" name="5">          
            <div class="orderSuccess">
                <!-- <p class="orderTitle">预约回执</p> -->
              <el-collapse
                 v-model="activeNames"
                  >
                 <el-collapse-item title="个人信息" name="1">
                 <el-table
                    :data="beforehandTable"
                    border
                    size="mini"
                    >
                  <el-table-column
                   prop="name"
                   label="姓名"
                     width="60px"
                      fixed
                    >
                 </el-table-column>
                 <el-table-column
                   prop="class"
                   label="班级"
                   >
                 </el-table-column>
                 <el-table-column
                   prop="school"
                   label="学校">
                 </el-table-column>
                 <el-table-column
                   prop="time"
                   label="预约手机"
                   width="120px">
                   <el-tag type="success" size="mini">15179175376</el-tag>
                  
                 </el-table-column>
                 <el-table-column
                   prop="price"
                   label="订单号">
                 </el-table-column>
               </el-table> 
                    </el-collapse-item>
                <el-collapse-item title="时段信息" name="2">
                     <div class="orderTag">
                    <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   <el-tag type="warning" size="mini">11:00-11:30</el-tag>
                   </div>
                  </el-collapse-item>   
                <el-collapse-item title="二维码及观看密码" name="3">
                      <el-table
                    :data="returnImg"
                    border
                    size="mini"
                    >
                  <el-table-column
                   
                   label="二维码"
                    prop="url"     
                    >
                     <div class="thatcode" @click="showDrawer">
                       <img :src=returnImg[0].url alt="" width="130" height="130">  
                       <p>点击放大</p>
                     </div>
                   
                 </el-table-column>
                 <el-table-column
                   prop="passworld"
                   label="密码"
                   >
                 </el-table-column>                                          
               </el-table> 
                  </el-collapse-item>  
              </el-collapse>               
             </div>     
          <el-button size="small" @click="top">上一步</el-button>
        </el-tab-pane>
      </el-tabs>
      <!-- 弹出条框内容 -->
      <el-dialog title="条款内容" :visible.sync="dialogVisible" width="95%">
        <span>
          正文与附件作为合同文本的整体结构内容时，它们共同表现出了以下三个特征：结构均衡、适从交易、贯通全文。
          结构均衡特征是指不论合同文本使用于何种交易，它的整体结构应是相互衔接，并且是相互补充的。相互衔接是指正文与附件之间存在的依据是有机相连，不是无故而生。其内容是互补性的，而不是重复的。通过互补对交易的权利与义务进行完善与明确。
          适从交易特征是指合同结构的简繁不是依形式而定，而是依交易实际特征而定的。换句话说，合同结构服从交易的需要。交易要求复杂时，合同结构就复杂；反之，则简单。 贯通全文特征是指合同正文与附件的文字用词要语意一致，绝无丝毫异议。同时描述的当事人权利与义务在正文与附件中具有严格的一致性。该特征决定了撰稿人或多个撰稿人的工作规范，尤其多个撰稿人存在时，对总审校人提出了明确的要求。该项特征提出的问题若不能保证，谈判就会失去目标或完成不了谈判任务。即便表面上完成了谈判，执行中也会重燃战火。
        </span>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <div>
            <el-button type="primary" @click="dialogVisible = false">同 意</el-button>
          </div>
        </span>
      </el-dialog>
    </div>
     <!-- 二维码抽屉 -->
      <el-drawer
         title="二维码"
         :visible.sync="QRcode"
         direction="rtl"
         size="100%"
       >
        <div class="drawerImg">
         <img :src=returnImg[0].url alt="" width="250" height="250">
         <div class="btnClose"><el-button @click="showDrawer">关 闭</el-button> </div>
        </div>
      </el-drawer>
  </div>
</template>

<script>
import { log } from 'util';
import {http} from '../http/http.js'
import {getsixstring} from '../api/randomstr'
export default {
  name: "HelloWorld",
  
  data() {
    return {
    
      
      // active: 0,
      active1: "1",
      checked: false,
      value2: false,
      loading:false,
      switchioes: [
         {
          checked: false,
          value: "09:00-09:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "09:30-10:00",
          type: "info",
          price:0.01
        },
        {
          checked: false,
          value: "10:00-10:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "10:30-11:00",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "11:00-11:30",
          type: "info",
          price:0.01
        },
       {
          checked: false,
          value: "11:30-12:00",
          type: "info",
          price:0.01
        },
      ],
      switchioesTwo:[
           {
          checked: false,
          value: "14:00-14:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "14:30-15:00",
          type: "info",
          price:0.01
        },
        {
          checked: false,
          value: "15:00-15:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "15:30-16:00",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "16:00-16:30",
          type: "info",
          price:0.01
        },
       {
          checked: false,
          value: "16:30-14:00",
          type: "info",
          price:0.01
        },
      ],
      switchioesThree:[
           {
          checked: false,
          value: "18:00-18:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "18:30-19:00",
          type: "info",
          price:0.01
        },
        {
          checked: false,
          value: "19:00-19:30",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "19:30-20:00",
          type: "info",
          price:0.01
        },
         {
          checked: false,
          value: "21:00-21:30",
          type: "info",
          price:0.01
        },
       {
          checked: false,
          value: "21:30-22:00",
          type: "info",
          price:0.01
        },
      ],
      tabPosition: "top",
      dialogVisible: false,
      inputphoneNumber: "",
      inputcheckNumber: "",
      queryExaTable: false,
      querytable: false,
      accurateInputValue: "",
      activeNames:['1','2','3'],
      QueryRuesult: [
      
      ],
      choeseprovince: "",
      choesecities: "",
      choeseArea: "",
      choeseSchool: "",
      choeseClass: "",
      choeseName: "",
      buttonType: "",
      provinces: [],
      cities: [],
      areas:[],
      schools:[],
      classes:[],
      names:[],
      totalprice:0.00,
      beforehandTable:[{
        name:'小明明',
        class:'初三（2）班',
        school:'实验中学',
        price:0.01,
        time:"11:00-12:00"

      }],
      returnImg:[{
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571219823125&di=c59af7041a911b6bdb8b26dd892c41be&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2013%2F11%2F26%2F20131126143638f53f4.png',
        passworld:'15fsf5163515ad'
      }],
      QRcode:false,//二维码抽屉
  
    };
  },

  methods: {
    next() {
      //点击上下页
      // if (this.active++ > 2) this.active = 0;
      //先转为数字类型然后再转为字符串类型赋值
      let nextNumber = +this.active1;
      this.active1 = nextNumber + 1 + "";
      document.documentElement.scrollTop=0;
    },
    top() {
      let topNumber = +this.active1;
      this.active1 = topNumber - 1 + "";
      document.documentElement.scrollTop=0;
    },
     //输入电话号码的核实
     checkPhone(){
        if(this.inputphoneNumber==""){
           this.$message({
          showClose: true,
          message: '手机号码不能为空!',
          duration:1000
        });
        }else{
        let regExp =/^(\+?0?86\-?)?1[345789]\d{9}$/
        // console.log(regExp.test(this.inputphoneNumber));
        if(!regExp.test(this.inputphoneNumber)){
             this.$message({
          showClose: true,
          message: '请输入正确的手机号码！',
          type: 'error',
          duration:1000
        });
        }
       }
     },
    cliscksure() {
      // console.log(111);

      this.dialogVisible = true;
      this.buttonType = this.checked ? "" : "success";
    },
    timechoese(value,i) {
      this.changrColor(value)
      this.changeRules(i,this.switchioes);
    },
    timechoeseAfernoon(value,i){
      this.changrColor(value)
      this.changeRules(i,this.switchioesTwo);
    },
      timechoeseNeight(value,i){    
      this.changrColor(value)
      this.changeRules(i,this.switchioesThree);
      },
        //时间选中状态的改变的规则
         changeRules(i,timegrop){
              let storearr=[]
          // timegrop.forEach(item=>storearr.push(item.type)
          //  )
          
           let choeseindex=  timegrop.findIndex((value, index, arr)=>{
             return value.type=='primary'
           }) 
            // console.log(choeseindex);
            
          //  let unchoeseindex=  storearr.findIndex((value, index, arr)=>{
          //    return value=="info"
          //  })
            if(choeseindex==-1){
              //  let choeseindex = i
              timegrop[i].type="info"
            }else{  
              
          //  console.log("选中的第一个下标为----"+choeseindex,'第多次选中的下标为---'+i,'第一个没有选中的下标为---'+unchoeseindex,this.switchioes.length);
           for(let k=0;k<timegrop.length;k++){
              if(k!=choeseindex){
                 timegrop[k].type="info"
              }
           }
           for(let j=choeseindex;j<=i;j++){
            timegrop[j].type="primary"
           }
            }
              //总价的计算
                  let priceArr=[]
                  let priceAll=0
               this.switchioes.forEach(item=> {
               if(item.type=="primary"){
                 priceArr.push(item)
               }
               })
               this.switchioesTwo.forEach(item=> {
               if(item.type=="primary"){
                 priceArr.push(item)
               }
               }) 
                 this.switchioesThree.forEach(item=> {
               if(item.type=="primary"){
                 priceArr.push(item)
               }
               })  
            priceArr.forEach(item=>{
              priceAll+=(item.price*100)
              
            })
          //  priceAll= priceArr[0].price*(priceArr.length)
            // console.log(priceAll/100);
            this.totalprice=priceAll/100
            this.beforehandTable[0].price=this.totalprice
         },
          //改变的选中颜色
         changrColor(value){
       if (value.type == "info") {
        value.type = "primary";
        } else {
        value.type = "info";
       }
        
       },

    //人名选择查找
    findByNanme(){
      if(this.accurateInputValue==''){
         this.$message({
          message: '输入名字不能为空哦~',
          type: 'warning',
          duration:1000,
          showClose: true,
        });
      }else{
        this.loading=true;
        let param = {
      ask:1,
      ask_word:"name",
      ask_content:this.accurateInputValue
      }     
       http.findName(param).then(res=>{
        //  console.log(res);
         
        let findres=res.data[0].infos 
        if(findres==null){
            this.$message({
          message: '暂无数据！',
          duration:1000,       
        });
        this.loading=false
        }else{
              this.QueryRuesult=findres
            this.loading=false;
          // console.log(res);  
           this.$message({
          message: '查询成功！',
          type: 'success',
          duration:1000,       
        }); 
        }       
      })
      }    
    },
    resetinput(){
        // console.log('你输入了名字！');
          this.QueryRuesult=[]
    },
      // 条件选择查找省后返回市区
    gethttpProvince(thisvalue){
         //选择中的市返回查询
       var choisecity={
         ask:2,
         ask_word:"province",
         ask_content:thisvalue
       }
        //初始化其子选项
          this.choesecities=""
          this.choeseArea=""
          this.choeseSchool=""
          this.choeseClass=""
          this.choeseName=""
           http.findcitys(choisecity).then(res=>{         
            this.cities=res.data[0].infos 
        })              
    },
    //条件选择查找市后返回区域
    gethttpCities(value){
      // console.log(value);
      //按条件查找区域的返回
       var choioseareas={
              ask:2,
              ask_word:"city",
              ask_content:value,
              province:this.choeseprovince
       }
       //初始化其子选项
          this.choeseArea=""
          this.choeseSchool=""
          this.choeseClass=""
          this.choeseName=""
        http.findareas(choioseareas).then(res=>{
          // console.log(res);
          this.areas=res.data[0].infos          
        })     
    },
     //按条件查找区域后返回学校
    gethttpAreas(value){
        // console.log(value);
        //按条件查找学校返回值
           var schoolFind={
             ask:2,
             ask_word:"district",
             ask_content:value,
             city:this.choesecities,
              province:this.choeseprovince
           }
           //初始化其子选项
           this.choeseSchool=""
          this.choeseClass=""
          this.choeseName=""
           http.findSchool(schoolFind).then(res=>{
            //  console.log(res);
               this.schools=res.data[0].infos 
           })       
    },
    //按条件查询学校后返回班级
      gethttpSchool(value){
        // console.log(value);
         //按条件查找班级返回值
        var classFind={
             ask:2,
             ask_word:"school",
             ask_content:value,
             city:this.choesecities,
             province:this.choeseprovince ,
             district:this.choeseArea
        }
        //初始化其子选项
          this.choeseClass=""
          this.choeseName=""
        http.findClass(classFind).then(res=>{
          this.classes=res.data[0].infos           
        })
      },
      showDrawer(){
        this.QRcode=! this.QRcode
        // console.log(1111111111111111);       
      }


  },
  created(){
   //选择中的省份返回查询
   var choiseFind={
     ask:2,
     ask_word:"all"
   }
     http.findprocince(choiseFind).then(res=>{
      //  console.log(res);
       this.provinces=res.data[0].infos      
     })
      // 生成6为随机码
      // window.console.log(getsixstring());
      
  //选择中的市返回查询
      //  var choisecity={
      //    ask:2,
      //    ask_word:"province",
      //    ask_content:"广东省"
      //  }
      //      http.findcitys(choisecity).then(res=>{
      //     console.log(res);

      //   })

  //按条件查找区域的返回
      //  var choioseareas={
      //        ask:2,
      //         ask_word:"city",
      //         ask_content:"深圳市",
      //         province:"广东省"
      //  }
      //   http.findareas(choioseareas).then(res=>{
      //     console.log(res);
          
      //   })

               //按条件查找学校返回值
          //  var schoolFind={
          //    ask:2,
          //    ask_word:"district",
          //    ask_content:"龙岗区",
          //    city:'深圳市',
          //     province:"广东省"
          //  }
          //  http.findSchool(schoolFind).then(res=>{
          //    console.log(res);

          //  })
                     //按条件查找班级返回值
        // var classFind={
        //       ask:2,
        //      ask_word:"school",
        //      ask_content:"某某实验中学",
        //      city:'深圳市',
        //       province:"广东省" ,
        //      district:"龙岗区"
        // }
        // http.findClass(classFind).then(res=>{
        //   console.log(res);
          
        // })

                  //按条件查找人名返回
          // var personFind = {
          //        ask:2,
          //        ask_word:"class1",
          //        ask_content:"初三（1）班",
          //        city:"深圳市",
          //        province:"广东省" ,
          //        district:"龙岗区",
          //        school:"某某实验中学",       
          // }
          // http.findPerson(personFind).then(res=>{
          //   console.log(res);          
          // })

  },
  watch:{
    queryExaTable:{
      //关闭详细查询时初始化相关数值
      handler(newName, oldName){
        // console.log(newName);
        if(!newName){
           this.accurateInputValue='';
           this.QueryRuesult=[];
           this.loading=false;
        }       
      },    
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >
  
.navbox {
  padding: 0 0 5px 5px;
}
.queryChoose {
  line-height: 50px;
}
.queryButton {
  padding-left: 100px;
}
.nextStep {
  margin-left: 140px;
  margin-top: 30px;
}
.accurateQueryBox {
  padding: 10px;
}
/* .accurateQueryBox .inputQueryBOx {
} */
.accurateQueryBox .tableContent {
  margin-top: 10px;
}

.queryByCondition {
  padding-left: 20px;
  /* height: 600px; */
}
.queryByCondition .chioeseQuery {
  margin-top: 10px;
}
.queryByCondition .atips {
  line-height: 30px;
}
.orderPhone {
  padding-left: 20px;
}
.orderPhone .checkNumber {
  margin-top: 20px;
}
.orderPhone .checkNumber img {
  margin-left: 10px;
  margin-bottom: 20px;
}
.orderPhone .agreeButton {
  margin-left: 20px;
  display: inline-block;
}
.orderPhone .ordersteps {
  margin-top: 20px;
}
/* 卡片区域 */
.timeChoese {
  padding: 10px;
}
.box-card .timeChoeseMoring {
  float: left;
  margin-left: 150px;
}
.switchs-left {
  width: 95%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.switchs-left div {
  margin-bottom: 10px;
}
/* 下午时间选择卡片区域 */
.timeChoeseAfernoon {
  margin-top: 10px;
  margin-bottom:10px;
}
.timeChoeseAfernoon .card-afternoon{
   width: 95%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.timeChoeseAfernoon .card-afternoon div {
    margin-bottom: 10px;
}
#toreturn {
  margin-left: 5px;
}
.el-switch__label.is-active span {
  color: #ccc;
}
/* 精确查找处表格字体大小 */
.el-table div {
  font-size: 12px;
}
/* 价格颜色 */
.timeChoese .price {
  color: #f92658;
  font-weight: 600;
}

/* 预支付订单表格 */
  .beforehandOrder .tableIfo{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .beforehandOrder .payWays{
    margin: 0 0 10px 10px;
  }
  /* 订单回执处时间排列 */
  .orderSuccess {
    margin-bottom: 10px;
  }
  .orderSuccess .orderTag{
      display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
  }
  .orderSuccess .orderTitle {
    line-height: 20px;
  }
  .orderSuccess .orderTag span {
     margin-bottom: 10px;
  }
  .orderSuccess .thatcode img {
    display: block;
    margin: 0 auto;
  }
   .orderSuccess .thatcode p {
     text-align: center;
   }
  /* 抽屉二维码定位 */
   .drawerImg img{
      margin: 0 auto;
      display: block;
   }
   .drawerImg .btnClose{
     margin-top: 10%;
     margin-left: 40%;
    
   }
.el-row {
  margin-bottom: 20px;
  line-height: 33px;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fbfbfb;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
