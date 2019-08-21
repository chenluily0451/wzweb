<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" :open-names="openDefault">
            <Submenu name="1" v-show="isCollapsed == false ? true : false">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <MenuItem name="1111" v-show="isCollapsed">
              <Icon type="ios-navigate" @click="isCollapsed = false;openDefault=['1']"></Icon>
            </MenuItem>
            <Submenu name="2" v-show="isCollapsed == false ? true : false">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <MenuItem name="2222" v-show="isCollapsed">
              <Icon type="ios-keypad" @click="isCollapsed = false;openDefault=['2']"></Icon>
            </MenuItem>
            <Submenu name="3" v-show="isCollapsed == false ? true : false">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
            <MenuItem name="3333" v-show="isCollapsed">
              <Icon type="ios-analytics" @click="isCollapsed = false;openDefault=['3']"></Icon>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header
            :style="{background: '#fff', boxShadow: '0 1px 1px rgba(0,0,0,.1)'}"
          ></Header>
          <Content>
            <Breadcrumb :style="{margin: '20px 20px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <div :style="{margin: '10px 10px 20px 10px'}">
              <Card>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isCollapsed: false,
      openDefault: []
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {}
};
</script>

<style>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
