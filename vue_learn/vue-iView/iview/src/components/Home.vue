<template>
  <div class="home">
    <div class="layout">
      <Row type="flex">
        <Col :span="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left">
            <span class="layout-text">Admin 管理系统</span>
          </div>
          <Menu theme="dark">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"/>导航一
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"/>导航二
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats"/>导航三
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
        </Col>
        <Col :span="spanRight">
          <div class="layout-header">
            <Button type="text">
              <Icon type="md-menu" size="32"/>
            </Button>
            <div class="userInfo">
              <Dropdown>
                <a href="javascript:void(0)">
                  {{userName}}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      spanLeft: 5,
      spanRight: 19,
      userName: ''
    }
  },
  created() {
    this.userName = JSON.parse(sessionStorage.getItem('username'));
  }
 
  
};
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
.layout-logo-left .layout-text{
  font-size: 23px;
  color: rgba(255, 255, 255, 0.555);
  position: relative;
  top: 2px;
  left: 28px;
}
.userInfo {
  float: right;
  margin: 5px 20px;
}
.ivu-col-span-19 {
  background-color: #eee;
}
.layout-header {
  background-color: #fff;
  padding: 10px 0;
}
</style>
