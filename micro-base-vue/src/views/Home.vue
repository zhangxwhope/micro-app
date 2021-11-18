<template>
  <div class="home">Vue Home Page</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  mounted() {
    (window as any).microApp?.addDataListener(this.dataListener, true);
    (window as any).microApp?.dispatch({ type: "嵌套子应用app2发送的数据" });
  },
  methods: {
    dataListener(data: any) {
      console.log("来自基座应用的数据", data);
    },
  },
});
</script>
