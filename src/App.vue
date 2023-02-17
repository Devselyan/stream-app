<script setup lang="ts">
import { Header } from "@/components"
</script>

<template>
  <div>
    <Header></Header>
    <div class="app-container">
      <router-view ></router-view>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100% ;
  height: calc(100vh - 5rem) ;
  background-color: rgb(226, 230, 28);
  margin: auto ;
  margin-top: 5rem ;
}
</style>