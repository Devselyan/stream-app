<script setup lang="ts">
import { MyCard } from "@/components"
import { Teacher, Student, CollegeStudent } from "@/assets"

const card_data = [
    {
        title: "Past",
        sub_title: "Student in Future School",
        img_file: Student,
        route_name: "pastView"
    },
    {
        title: "Present",
        sub_title: "Teacher in Future School",
        img_file: Teacher,
        route_name: "presentView"
    },
    {
        title: "Future",
        sub_title: "College Student",
        img_file: CollegeStudent,
        route_name: "futureView"
    },
]
</script>

<template>
    <div class="main-section row align-items-center">
        <div class="col" v-for="i in 3" :key="i">
            <div class="content-section text-center rounded shadow">
                <MyCard :title="card_data[i-1].title" 
                    :sub_title="card_data[i-1].sub_title" 
                    :img_file="card_data[i-1].img_file" 
                    :route_name="card_data[i-1].route_name">
                </MyCard>
            </div>
        </div>
    </div> 
    <div class="below-section text-center">
        <div>Links</div>
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