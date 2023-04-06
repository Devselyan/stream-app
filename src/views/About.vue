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
    <div class="main-section row align-items-center">
        <div class="col" v-for="i in 5" :key="i">
            <div class="content-section text-center rounded shadow">
                <MyCard :title="card_data[i-1].title" :sub_title="card_data[i-1].sub_title">
                </MyCard>
            </div>
        </div>
    </div> 
</template>

<style>

.main-section {
    text-shadow: 2px 2px 2px #ff00dd;
    color:rgb(217, 231, 16) ;
    font-weight: 500 ;
    font-size: 2rem;
}
</style>