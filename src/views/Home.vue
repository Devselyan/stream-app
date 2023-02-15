<script setup lang="ts">
import { Present } from "@/components"
import { Future } from "@/components"
import { Past } from "@/components"
</script>

<template>
    <div class="main-section row align-items-center">
        <div class="col">
            <div class="content-section text-center">
                <div class="title-section">Past</div>
                <div class="past-text">
                        Student in Future School
                        <img src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990__340.jpg" style="width: 531px; height: 360px;">
                    </div>
                    <div class="click">
                        <router-link to="/past" >Click to know more!</router-link>
                    </div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Present</div>
                <div class="present-info">
                    <div class="present-text">
                        Teacher in Future School
                    <img src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" style="width: 531px; height: 360px;">
                    </div>
                    <div class="click">
                        <router-link to="/present" >Click to know more!</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col text-center">
            <div class="content-section ">
                <div class="title-section">Future</div>
                <div class="future-text">
                    Student in College
                    <img src="https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg?v=1628206641" style="width: 531px; height: 360px;">
                    <img src="" alt="">
                </div>
                <div class="click">
                    <router-link to="/future" >Click to know more!</router-link>
                </div>
            </div>
        </div>
        
    </div> 
    <div class="below-section text-center">
        Links
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <div><a href="https://www.instagram.com/_._d.e_/?hl=en" target="_blank"><i class="fab fa-instagram"></i><span class="social-link-text">Instagram</span></a></div>
        <div><a href="https://www.facebook.com/Devselyan/" target="_blank"><i class="fab fa-facebook-f"></i><span class="social-link-text">Facebook</span></a></div>
    </div>
</template>

<style>

.below-section {
    top: 50px ;
    height: 200px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    padding: 25px;
    color:rgb(217, 231, 16) ;
    font-weight: 500 ;
    font-size: 2rem;
    text-shadow: 2px 2px 2px #ff00dd

}
.content-section {
    margin-top: 2rem;
    height: 500px;
    width: 100%;
    background-color: rgb(0, 0, 0);
}
.main-section {
    text-shadow: 2px 2px 2px #ff00dd;
    color:rgb(217, 231, 16) ;
    font-weight: 500 ;
    font-size: 2rem;
}

.present-text  {
    color:aquamarine ;
}

.past-text  {
    color:aquamarine ;
}

.future-text  {
    color:aquamarine ;
}

.click {
    text-shadow: 2px 2px 2px #15ff00
}

.social-link-text {
  padding-left: 10px;
}
</style >