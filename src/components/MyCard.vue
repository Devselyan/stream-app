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
    },
    img_file: {
        type: String,
        required: true
    },
    route_name: {
        type: String,
        required: true
    }
})

const router = useRouter();

function gotoPath() {
    router.push({name: route_name})
}
</script>

<template>
    <div @click="gotoPath" class="card-outer-section rounded shadow">
        <div class="title-section">{{ title }}</div>
        <div class="past-text">
            {{ sub_title }}
            <img :src="img_file" style="width: 530px; height: 360px;">
        </div>
        <div class="click">
            <div>Click to know more!</div>
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