<template>
    <div id="Activity">
        <el-row class="tac">
            <div style="text-align: center">
            <el-col :span="4">
                <h3>&emsp; 活动信息</h3>
                <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="0">
                            <i class="el-icon-time"></i>
                            <span slot="title" @click="handleClick('Nervos')">所有活动</span>
                    </el-menu-item>
                    <el-menu-item index="1">
                            <i class="el-icon-time"></i>
                            <span slot="title" @click="handleClick('本周')">近期活动</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>活动地点</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">国内</template>
                            <!--<el-menu-item index="2-1" @click="handleClick('北京')">北京</el-menu-item>
                            <el-menu-item index="2-2" @click="handleClick('上海')">上海</el-menu-item>-->
                            <el-menu-item index="2-3" @click="handleClick('杭州')">杭州</el-menu-item>
                            <el-menu-item index="2-4" @click="handleClick('深圳')">深圳</el-menu-item>
                            <el-menu-item index="2-5" @click="handleClick('成都')">成都</el-menu-item>
                            <el-menu-item index="2-6" @click="handleClick('武汉')">武汉</el-menu-item>
                            <el-menu-item index="2-7" @click="handleClick('厦门')">厦门</el-menu-item>
                            <el-menu-item index="2-8" @click="handleClick('邯郸')">邯郸</el-menu-item>
                            <el-menu-item index="2-9" @click="handleClick('台北')">台北</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">海外</template>
                            <el-menu-item index="2-21" @click="handleClick('Berlin')">Berlin</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>活动日期</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1" @click="handleClick('八月')">八月</el-menu-item>
                            <el-menu-item index="3-2" @click="handleClick('九月')" disabled="">九月</el-menu-item>
                            <el-menu-item index="3-3" @click="handleClick('十月')" disabled="">十月</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>参会嘉宾</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1" @click="handleClick('Daniel')">Daniel</el-menu-item>
                            <!--<el-menu-item index="4-2" @click="handleClick('Jan')">Jan</el-menu-item>
                            <el-menu-item index="4-3" @click="handleClick('Kevin')">Kevin</el-menu-item>
                            <el-menu-item index="4-4" @click="handleClick('Terry')">Terry</el-menu-item>-->
                            <el-menu-item index="4-5" @click="handleClick('Ryan')">Ryan</el-menu-item>
                            <el-menu-item index="4-6" @click="handleClick('DC')">DC</el-menu-item>
                            <el-menu-item index="4-7" @click="handleClick('Xuejie')">Xuejie</el-menu-item>
                            <el-menu-item index="4-8" @click="handleClick('Williams')">Williams</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>活动性质</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">线下活动</template>
                            <el-menu-item index="5-1" @click="handleClick('路演')">路演</el-menu-item>
                            <el-menu-item index="5-2" @click="handleClick('沙龙')">沙龙</el-menu-item>
                            <el-menu-item index="5-3"  @click="handleClick('CW')" disabled="">CW</el-menu-item>
                            <el-menu-item index="5-3"  @click="handleClick('会议')" disabled="">会议</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">线上活动</template>
                            <el-menu-item index="5-10"  @click="handleClick('线上分享')" disabled="">线上</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
            </div>
            <div>
            <el-col :span="16" :offset="2">
                <h1>活动详情</h1>
                <br>
                <div class="filter-tag">
                    <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleCloseTag(tag)">
                        {{tag}}
                    </el-tag>
                </div>
                <br>

                <el-card class="box-card" v-for="(item, index) in showList" :key="index">
                  <div slot="header" class="clearfix">
                    <span><h2>{{item.date}} &emsp; {{item.location}} &emsp; {{item.name}}</h2></span>
                    <el-tag size="mini" :type="randType(index)" class="ct-tag"  v-for="(tag, index) in item.tags" :key="index">{{tag}}</el-tag>
                    </div>
                  <div>
                    <el-row class="tac">
                        <el-col :span="4">
                            <br>
                            <div :class="item.guest"></div>
                        </el-col>
                        <el-col :span="18">
                          <p><b>活动时间</b>：<span v-html="item.time"></span></p>
                          <p><b>活动地点</b>：{{item.address}}&emsp;<a :href="item.bmap_link" target="_blank">百度地图</a>&emsp;
                        <a :href="item.amap_link" target="_blanl">高德地图</a></p>
                          <p><b>主办方</b>：{{item.sponsor}}</p>
                        <a :href="item.join_link" target="_blank"><el-button type="primary" plain>报名参加</el-button></a>
                        </el-col>
                    </el-row>
                  </div>
                </el-card>
            </el-col>
            </div>
            </el-row>
    </div>
</template>

<script>

export default {
    //默认的数据，打开页面时候加载
    data() {
        return {
          dynamicTags: ['Nervos'],
          inputVisible: false,
          inputValue: '',
          list: [
            {
              tags: ["杭州","八月","Williams","沙龙","Nervos","本周"],
              date: "2019.08.8",
              location: "杭州",
              name: "做区块链落地——你必须懂得密码隐私",
              guest: "williams",
              time: "2019.8.8 18:30-21:30&emsp;[ William's Show Time: <b>19:55-20:15</b> ]",
              address: "杭州市西湖区文一西路 83 号浙江财经大学文华校区学博楼7F",
              bmap_link: "https://j.map.baidu.com/58/v6f",
              amap_link: "https://surl.amap.com/3bzCIL1o4Ze",
              join_link: "https://m.chainnode.com/event/360663",
              sponsor: "巴比特加速器、Dimension、Nervos、创立方"
            },
            {
              tags: ["厦门","八月","Ryan","沙龙","Nervos"],
              date: "2019.08.13",
              location: "厦门",
              name: "\“星火集结号\” 2019全国行",
              guest: "ryan",
              time: "2019.8.13 13:30-17:00&emsp;[ Ryan's Show Time: <b>14:30-15:00</b> ]",
              address: "厦门市软件园二期望海路57号楼之二8楼Lisk Elite Center",
              bmap_link: "https://j.map.baidu.com/21/Y2d",
              amap_link: "https://surl.amap.com/7HJL6L1f7E8",
              join_link: "http://www.huodongxing.com/event/6501924739200",
              sponsor: "星火矿池、Nervos、imKey"
            },
            {
              tags: ["深圳","八月","Daniel","沙龙","Nervos"],
              date: "2019.08.17",
              location: "深圳",
              name: "\“星火集结号\” 2019全国行",
              guest: "daniel",
              time: "2019.8.17 13:30-17:00&emsp;[ Daniel's Show Time: <b>14:30-15:00</b> ]",
              address: "南山区软件产业基地 创展谷",
              bmap_link: "https://j.map.baidu.com/0f/oZd",
              amap_link: "https://surl.amap.com/7HAZp5H1Qy",
              join_link: "http://www.huodongxing.com/event/2501938032600",
              sponsor: "星火矿池、Nervos、imKey"
            },
            {
              tags: ["台北","八月","Nervos","路演","Nervos"],
              date: "2019.08.17",
              location: "台北",
              name: "Beyond Consensus —— Nervos Meetup",
              guest: "nervos",
              time: "2019.8.17 14:00-17:00",
              address: "MaiCoin HQ - 现代财富科技总部加密货币实体店",
              bmap_link: "",
              amap_link: "",
              join_link: "https://www.huodongxing.com/event/5500646013200",
              sponsor: "Nervos"
            },
            {
              tags: ["Berlin","八月","Xuejie","沙龙","Nervos"],
              date: "2019.08.19",
              location: "Berlin",
              name: "In Rust We Trust —— Berlin Meetup",
              guest: "xuejie",
              time: "2019.8.19 19:00-21:00",
              address: "Glogauer Str. 6 · Berlin",
              bmap_link: "https://j.map.baidu.com/ce/OGd",
              amap_link: "",
              join_link: "https://www.meetup.com/Rust-in-Blockchain-Berlin/events/263431591",
              sponsor: "Fluence、Nervos"
            },
            {
              tags: ["武汉","八月","DC","沙龙","Nervos"],
              date: "2019.08.20",
              location: "武汉",
              name: "\“星火集结号\” 2019全国行",
              guest: "dc",
              time: "2019.8.20 13:30-17:00&emsp;[ DC's Show Time: <b>14:30-15:00</b> ]",
              address: "江汉区常青路43号居然之家汉口店5楼顶层设计中心",
              bmap_link: "https://j.map.baidu.com/9f/XNd",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://surl.amap.com/7HuwMnq3wj",
              sponsor: "星火矿池、Nervos、imKey"
            },
            {
              tags: ["成都","八月","Daniel","沙龙","Nervos"],
              date: "2019.08.24",
              location: "成都",
              name: "\“星火集结号\” 2019全国行",
              guest: "daniel",
              time: "2019.8.24 13:30-17:00&emsp;[ Daniel's Show Time: <b>14:30-15:00</b> ]",
              address: "锦江区航天科技大厦43楼 侠客岛",
              bmap_link: "https://j.map.baidu.com/9b/N-d",
              amap_link: "https://surl.amap.com/7Hl83l6lP",
              join_link: "http://www.huodongxing.com/event/4501939149600",
              sponsor: "星火矿池、Nervos、imKey"
            },
             {
              tags: ["邯郸","八月","DC","沙龙","Nervos"],
              date: "2019.08.27",
              location: "邯郸",
              name: "\“星火集结号\” 2019全国行",
              guest: "dc",
              time: "2019.8.27 13:30-17:00&emsp;[ DC's Show Time: <b>14:30-15:00</b> ]",
              address: "待定",
              bmap_link: "https://j.map.baidu.com/fe/RPd",
              amap_link: "https://surl.amap.com/7Hhe7l1xb71",
              join_link: "http://www.huodongxing.com/event/9501939558300",
              sponsor: "星火矿池、Nervos、imKey"
            },
          ],
          showList: []
      };
    },
    // 检测更新
    watch: {
      dynamicTags(newTags) {
        console.log(newTags)
        this.showList = this.list.filter((item) => {
          for(let i = 0; i < newTags.length; i++) {
            let tag = newTags[i]
            if(item.tags.indexOf(tag) > -1)
              return true
          }
          return false
        })
        this.showList = this.showList.sort((a, b) => new Date(a.date) - new Date(b.date))
      }
    },
    // 打开页面自动激活的方法
    mounted() {
      this.showList = this.list.filter((item) => {
        for(let i = 0; i < this.dynamicTags.length; i++) {
          let tag = this.dynamicTags[i]
          if(item.tags.indexOf(tag) > -1)
            return true
        }
        return false
      })
      this.showList = this.showList.sort((a, b) => new Date(a.date) -new Date(b.date))
      console.log(this.showList)
    },
    //自定义的方法，点击时候调用
    methods: {
      randType(index) {
        var tps = ["primary","success", "danger", "warning","info"]
        // return tps[Math.floor(Math.random() * tps.length)]
        return tps[index]
      },
      handleClick(tag) {
        if (this.dynamicTags.indexOf(tag) == -1)
          this.dynamicTags.push(tag)
      },
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
          console.log(key, keyPath);
      },
      handleCloseTag(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
}

</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .nervos{
    background: url(images/nervos.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    align-items: center;
    display: inline-block;
}

.nc{
    background: url(images/nc.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    align-items: center;
    display: inline-block;
}

.daniel{
    background: url(images/daniel.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.jan{
    background: url(images/jan.jpeg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.terry{
    background: url(images/terry.jpeg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.wangbo{
    background: url(images/wangbo.jpeg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.xiaoliang{
    background: url(images/xiaoliang.jpeg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.yaning{
    background: url(images/yaning.jpeg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.ryan{
    background: url(images/ryan.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.dc{
    background: url(images/dc.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.xuejie{
    background: url(images/xuejie.png);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.williams{
    background: url(images/williams.jpg);
    background-size: 80px;
    height: 80px;
    width: 80px;
    border-radius:50%;
    text-align: center;
    display: inline-block;
}

.filter-tag .el-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

.ct-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

.box-card {
  margin-bottom: 15px;
}
</style>
