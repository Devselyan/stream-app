<script setup lang="ts">

const { title, sub_title } = defineProps({
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
    background-color: rgb(184, 9, 90);
    cursor: pointer;
}
</style>