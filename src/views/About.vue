<script setup lang="ts">
import { ProjectCard } from "@/components"

const card_data = [
    {
        title: "Biology",
        sub_title: "",
    },
    {
        title: "Chemistry",
        sub_title: "",
    },
    {
        title: "Physics",
        sub_title: "",
    },
    {
        title: "Math",
        sub_title: "",
    },
    {
        title: "English",
        sub_title: "",
    },
]
</script>

<template>
    <div class="main-section filewrap">
        <div class="col" v-for="i in 5" :key="i">
            <div class="content-section text-center rounded shadow">
                <MyCard :title="card_data[i-1].title" :sub_title="card_data[i-1].sub_title">
                </MyCard>
            </div>
        </div>
    </div> 
</template>