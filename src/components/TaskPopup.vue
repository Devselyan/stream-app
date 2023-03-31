<script setup lang="ts">
const emit = defineEmits(["close"])
function closePopup() {
    console.log("closing")
    emit("close")
}
</script>

<template>
    <div class="task-popup-outer">
        <div class="task-popup-inner shadow rounded">
            <div @click="closePopup" class="close">x</div>
        </div>
    </div>
</template>

<style scoped>
.close {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
}
.task-popup-inner {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    background-color: #e27777;
    z-index: 3;
}
.task-popup-outer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(5px) brightness(0.6);
  backdrop-filter: blur(5px) brightness(0.6);
  z-index: 2;
}
</style>