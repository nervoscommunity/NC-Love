<template>
    <div id="top">
      <el-row>
          <el-col :span="24">
            <div className="grid-content bg-purple-dark">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">活动</el-menu-item>
                    <el-menu-item index="2">新闻</el-menu-item>
                <!--<el-submenu index="2">
                        <template slot="title">新闻</template>
                        <el-menu-item index="2-1">NC News</el-menu-item>
                        <el-menu-item index="2-2">NC Article</el-menu-item>
                    </el-submenu>-->
                    <el-menu-item index="3">快讯</el-menu-item>
                    <el-menu-item index="4">投票</el-menu-item>
                    <el-menu-item index="5">关于</el-menu-item>
                </el-menu>
              </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>

</style>

