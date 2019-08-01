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
                            <el-menu-item index="2-1" @click="handleClick('北京')">北京</el-menu-item>
                            <el-menu-item index="2-2" @click="handleClick('上海')">上海</el-menu-item>
                            <el-menu-item index="2-3" @click="handleClick('杭州')">杭州</el-menu-item>
                            <el-menu-item index="2-4" @click="handleClick('深圳')">深圳</el-menu-item>
                            <el-menu-item index="2-5" @click="handleClick('成都')">成都</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">海外</template>
                            <el-menu-item index="2-20" @click="handleClick('Taibei')">Taibei</el-menu-item>
                            <el-menu-item index="2-21" @click="handleClick('Los Angeles')">Los Angeles</el-menu-item>
                            <el-menu-item index="2-22" @click="handleClick('San Francisco')">San Francisco</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>活动日期</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1" @click="handleClick('7月')">七月</el-menu-item>
                            <el-menu-item index="3-2" @click="handleClick('8月')">八月</el-menu-item>
                            <el-menu-item index="3-3" @click="handleClick('9月')">九月</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>参会嘉宾</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1" @click="handleClick('Daniel')">Daniel</el-menu-item>
                            <el-menu-item index="4-2" @click="handleClick('Jan')">Jan</el-menu-item>
                            <el-menu-item index="4-3" @click="handleClick('Kevin')">Kevin</el-menu-item>
                            <el-menu-item index="4-3" @click="handleClick('Terry')">Terry</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>活动性质</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">线下活动</template>
                            <el-menu-item index="4-1">路演</el-menu-item>
                            <el-menu-item index="4-2">沙龙</el-menu-item>
                            <el-menu-item index="4-3">CW</el-menu-item>
                            <el-menu-item index="4-3">会议</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">线上活动</template>
                            <el-menu-item index="4-1">线上分享</el-menu-item>
                            <el-menu-item index="4-2">线上会议</el-menu-item>
                            <el-menu-item index="4-3">在线直播</el-menu-item>
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
                    <span><h2>{{item.date}} &emsp; Shanghai &emsp; Chainge 区块链技术沙龙</h2></span>
                    <el-tag size="mini" :type="randType()" class="ct-tag"  v-for="(tag, index) in item.tags" :key="index">{{tag}}</el-tag>
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
              tags: ["本周", "上海","6月","Daniel","沙龙","Nervos"],
              date: "2019.06.30",
              guest: "daniel",
              time: "2019.6.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周", "北京","7月","Terry","路演","Nervos"],
              date: "2019.7.30",
              guest: "terry",
              time: "2019.7.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周", "杭州","8月","Jan","CW","Nervos"],
              date: "2019.8.30",
              guest: "jan",
              time: "2019.8.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周", "深圳","9月","Nervos","会议"],
              date: "2019.9.30",
              guest: "nervos",
              time: "2019.9.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周","1月","Jan","线上直播","Nervos"],
              date: "2019.1.30",
              guest: "jan",
              time: "2019.1.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周","3月","Terry","线上会议","Nervos"],
              date: "2019.3.30",
              guest: "terry",
              time: "2019.3.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
            },
            {
              tags: ["本周","1月","Daniel","线上分享","Nervos"],
              date: "2019.4.30",
              guest: "daniel",
              time: "2019.4.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]",
              address: "上海市虹口区余杭路18号（原境界美术馆）",
              bmap_link: "https://j.map.baidu.com/7kOs-",
              amap_link: "http://surl.amap.com/1PKz4_0137FPb",
              join_link: "https://m.chainnode.com/event/342860",
              sponsor: "链节点、Chainge"
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
        this.showList = this.showList.sort((a, b) => new Date(b.date) -new Date(a.date))
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
      this.showList = this.showList.sort((a, b) => new Date(b.date) -new Date(a.date))
      console.log(this.showList)
    },
    //自定义的方法，点击时候调用
    methods: {
      randType() {
        var tps = ["primary","success", "danger", "warning","info"]
        return tps[Math.floor(Math.random() * tps.length)]
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
