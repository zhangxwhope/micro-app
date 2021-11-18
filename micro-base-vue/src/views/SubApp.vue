<template>
  <div>
    <h1>嵌套基座【app3】-Vue子应用</h1>
    <!-- 
      name(必传)：应用名称，每个`name`都对应一个应用，必须以字母开头，且不可以带有 `.`、`#` 等特殊符号
      url(必传)：页面html的地址
      baseroute(可选)：基座应用分配给子应用的路由前缀，就是上面的sub-app
    -->
    <micro-app-sub
      name="app3"
      url="http://localhost:8083/"
      baseroute="/sub-app"
      :data="microAppData"
      @datachange="handleDataChange"
    ></micro-app-sub>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import microApp from "@micro-zoe/micro-app";

export default Vue.extend({
  name: "SubApp",
  data() {
    return {
      microAppData: {
        pushState: (path: string): void => {
          this.$router.push(path);
        },
      },
    };
  },
  mounted() {
    microApp.setData("app3", { type: "发送给app3新的数据" });
  },
  methods: {
    handleDataChange(e: any) {
      console.log("handleDataChange -> e", e.detail.data);
    },
  },
});
</script>
