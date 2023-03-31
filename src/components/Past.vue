<script setup lang="ts">
import { TaskPopup } from "@/components"
import { ref } from "vue";

const show_popup = ref(false)
function closePopup() {
    show_popup.value = false;
}
</script>

<template>
    <div class="h1 text-center">
        <h1>Past</h1>
    </div>
    <div @click="show_popup = true" class="info-container">
        <div class="text text-center">
            Student in Future School
            <TaskPopup @close="closePopup" v-if="show_popup"></TaskPopup>
        </div>
    </div>
</template>

<style scoped>
.info-container {
  width: 1500px ;
  height: 700px ;
  background-color: purple;
  margin: auto ;
  margin-top: 2rem ;
}

.text {
    font-size: 100px ;
    font-weight: 600 ;
    font-style: oblique;
    color: white ;

}
</style>