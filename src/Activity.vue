<template>
    <div id="Activity">
        <el-row class="tac">
            <div style="text-align: center">
            <el-col :span="4">
                <h3>&emsp; 活动信息</h3>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                            <i class="el-icon-time"></i>
                            <span slot="title">最新活动</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>活动地点</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">国内</template>
                            <el-menu-item index="2-1">北京</el-menu-item>
                            <el-menu-item index="2-2">上海</el-menu-item>
                            <el-menu-item index="2-3">杭州</el-menu-item>
                            <el-menu-item index="2-4">深圳</el-menu-item>
                            <el-menu-item index="2-5">成都</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">海外</template>
                            <el-menu-item index="2-20">Taibei</el-menu-item>
                            <el-menu-item index="2-21">Los Angeles</el-menu-item>
                            <el-menu-item index="2-22">San Francisco</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>活动日期</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">七月</el-menu-item>
                            <el-menu-item index="3-2">八月</el-menu-item>
                            <el-menu-item index="3-3">九月</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>参会嘉宾</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">Daniel</el-menu-item>
                            <el-menu-item index="4-2">Jan</el-menu-item>
                            <el-menu-item index="4-3">Kevin</el-menu-item>
                            <el-menu-item index="4-3">Terry</el-menu-item>
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
                <div>
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

                <div id="190630">
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span><h2>2019.6.30 &emsp; Shanghai &emsp; Chainge 区块链技术沙龙</h2></span>
                    <el-tag size="mini">上海</el-tag>
                    <el-tag size="mini" type="success">六月</el-tag>
                    <el-tag size="mini" type="danger">Daniel</el-tag>
                    <el-tag size="mini" type="warning">沙龙</el-tag>
                    </div>
                    <div>
                        <el-row class="tac">
                            <el-col :span="4">
                                <br>
                                <div class="daniel"></div>
                            </el-col>
                            <el-col :span="18">
                            <p><b>活动时间</b>：2019.6.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]</p>
                            <p><b>活动地点</b>：上海市虹口区余杭路18号（原境界美术馆）&emsp;<a href="https://j.map.baidu.com/7kOs-" target="_blank">百度地图</a>&emsp;
                            <a href="http://surl.amap.com/1PKz4_0137FPb" target="_blanl">高德地图</a></p>
                            <p><b>主办方</b>：链节点、Chainge</p>
                            <a href="https://m.chainnode.com/event/342860" target="_blank"><el-button type="primary" plain>报名参加</el-button></a>
                            </el-col>
                        </el-row>
                    </div>
                    </el-card>
                </div>
                <br>
                <div id="190630">
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span><h2>2019.6.30 &emsp; Shanghai &emsp; Chainge 区块链技术沙龙</h2></span>
                    <el-tag size="mini">上海</el-tag>
                    <el-tag size="mini" type="success">六月</el-tag>
                    <el-tag size="mini" type="danger">Daniel</el-tag>
                    <el-tag size="mini" type="warning">沙龙</el-tag>
                    </div>
                    <div>
                        <el-row class="tac">
                            <el-col :span="4">
                                <br>
                                <div class="daniel"></div>
                            </el-col>
                            <el-col :span="18">
                            <p><b>活动时间</b>：2019.6.30 13:30-17:00&emsp;[ Daniel's Show Time: <b>13:40-14:00</b> ]</p>
                            <p><b>活动地点</b>：上海市虹口区余杭路18号（原境界美术馆）&emsp;<a href="https://j.map.baidu.com/7kOs-" target="_blank">百度地图</a>&emsp;
                            <a href="http://surl.amap.com/1PKz4_0137FPb" target="_blanl">高德地图</a></p>
                            <p><b>主办方</b>：链节点、Chainge</p>
                            <a href="https://m.chainnode.com/event/342860" target="_blank"><el-button type="primary" plain>报名参加</el-button></a>
                            </el-col>
                        </el-row>
                    </div>
                    </el-card>
                </div>
            </el-col>
            </div>
            </el-row>
    </div>
</template>

<script>

export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    data() {
        return {
             dynamicTags: ['最新' , '北京' , '八月' , 'Daniel' , 'Meetup'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
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


</style>