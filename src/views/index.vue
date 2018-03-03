<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div> Projects Management Platform</div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{overflow: 'auto'}">
          <Menu active-name="0" theme="dark" width="auto" :open-names="['1']">
            <MenuItem name="0">
              <Icon type="stats-bars"></Icon>
              仪表盘
            </MenuItem>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                项目信息
              </template>
              <MenuItem name="1-1">公用事业</MenuItem>
              <MenuItem name="1-2">智慧城市</MenuItem>
              <MenuItem name="1-3">车联网</MenuItem>
              <MenuItem name="1-4">智慧家庭</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                项目管理
              </template>
              <MenuItem name="2-1">新增项目</MenuItem>
              <MenuItem name="2-2">修改项目</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                系统设置
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '16px', minHeight: '400px', background: '#fff'}">
            Content
          </Content>
        </Layout>
      </Layout>
      <Footer>
        <div> Copyright</div>
        </Menu>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
