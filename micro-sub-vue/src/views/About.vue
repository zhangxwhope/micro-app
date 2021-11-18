<template>
  <div class="about">
    <h1>【app3】- This is an about page</h1>
    <button @click="handleChangeRoute">跳转到父应用路由</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    handleChangeRoute() {
      (window as any).microApp.getData().pushState("/about");
    },
  },
});
</script>
