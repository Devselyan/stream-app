<script setup lang="ts">
import { useRouter } from "vue-router"

const { title, sub_title, img_file, route_name } = defineProps({
    title: {
        type: String,
        required: true
    },
    sub_title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="card-outer-section rounded shadow">
        <div class="title-section">{{ title }}</div>
        <div class="sub-text">
            {{ sub_title }}
        </div>
    </div>
</template>

<style scoped>
.card-outer-section:hover {
    transform: scale(1.02);
    transition: transform 0.5s ease-in-out;
}
.card-outer-section {
    height: 500px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    cursor: pointer;
}
</style>