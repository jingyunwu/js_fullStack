<template>
  <div class="home">
    <div class="layout">
      <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left">
            <span class="layout-text">Admin 管理系统</span>
          </div>
          <Menu theme="dark" mode="vertical" width="auto">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-home"/>导航一
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="md-paw"/>导航二
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-paw"/>导航三
              </template>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="md-stats"/>charts
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </i-col>
        <i-col :span="spanRight">
          <div class="layout-header">
            <Button type="text">
              <Icon type="md-menu" size="32"/>
            </Button>
            <div class="userinfo">
              <Dropdown>
                <a href="javascript:void(0)">
                  {{username}}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <img :src="imgUrl" width="100%" class="uersinfo-photo">
            </div>
          </div>
          <Breadcrumb>
            <BreadcrumbItem to="/table">首页</BreadcrumbItem>
            <BreadcrumbItem to="/table/manage">components</BreadcrumbItem>
          </Breadcrumb>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import BG from "../assets/IMG_3259.jpg"
export default {
  name: 'Home',
  data () {
    return {
      spanRight: 19,
      spanLeft: 5,
      imgUrl: BG
    }
  },
  created () {
    this.username = JSON.parse(sessionStorage.getItem('username'))
  }
}
</script>

<style scoped>
.home,
.layout {
  width: 100%;
  height: 100%;
}
.ivu-row-flex {
  height: 100%;
}
.layout-menu-left {
  background: #515a6e;
}
.layout-logo-left {
  width: 100%;
  height: 10%;
  position: relative;
}
.userinfo {
  float: right;
  margin: 0 15px;
}
.ivu-col-span-19 {
  background-color: #eee;
}
.layout-header {
  background-color: #fff;
  padding: 10px 0;
}
.layout-text {
  position: absolute;
  font-size: 30px;
  text-align: center;
  left: 10%;
  top: 25%;
  color: rgba(255, 255, 255, 0.459);
}
.uersinfo-photo {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
</style>
