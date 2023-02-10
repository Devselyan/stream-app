<script setup lang="ts">
import { Present } from "@/components"
</script>


<template>
    <div class="main-section row align-items-center">
        <div class="col">
            <div class="content-section text-center">
                <div class="title-section">Past</div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Present</div>
                <div class="present-info">
                    <router-link to="/present" >Click to know more!</router-link>
                </div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Future</div>
            </div>
        </div>
    </div>  
</template>

<style>
.content-section {
    height: 500px;
    width: 100%;
    background-color: rgb(100, 12, 122);
}
.main-section {
    color:rgb(217, 231, 16) ;
    font-weight: 500 ;
    font-size: 2rem;
}

.present-info {
    font-weight: 10;
    font-size:80%; 
}
</style>