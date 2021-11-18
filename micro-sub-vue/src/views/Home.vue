<template>
  <div class="home">【app3】- Sub Vue Home Page</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  mounted() {
    (window as any).microApp?.dispatch({ type: "子应用app3发送的数据" });
    console.log((window as any).microApp?.getData()); // 返回data数据
  },
});
</script>
