<script setup lang="ts">
import { Present } from "@/components"
</script>


<template>
    <div class="main-section row align-items-center">
        <div class="col">
            <div class="content-section text-center">
                <div class="title-section">Past</div>
                <div class="present-text">
                        Student in Future School
                        <img src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990__340.jpg" alt="">
                    </div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Present</div>
                <div class="present-info">
                    <div class="present-text">
                        Teacher in Future School
                    <img src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" alt="">
                    </div>
                    <div class="present-click">
                        <router-link to="/present" >Click to know more!</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Future</div>
                <div class="present-text">
                    College
                    <img src="https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg?v=1628206641" style="width: 531px; height: 360px;">
                    <img src="" alt="">
                </div>
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

.present-text {
    color:aquamarine ;
}

</style >
