<script setup lang="ts">
import { ref } from 'vue'; 

const toggle_dropdown=ref(false)
function toggleDropdown() {
    toggle_dropdown.value= !toggle_dropdown.value
}
</script>
<template>
    <div class="header-section row g-0">
        <div class="col-1 d-flex justify-content-center align-items-center">
            <div class="title">Streamer</div>
        </div>
        <div class="col d-flex justify-content-center align-items-center ">
            <div class="nav-item me-3">Home</div>
            <div class="nav-item">About</div>
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center">
            <div class="user-section">
                <div @click="toggleDropdown" class="user-profile"></div>
                <div v-show="toggle_dropdown" class="dropdown shadow-lg"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-item:hover::after {
    transform: scale(1) ;
}
.nav-item::after {
    content:'' ;
    position:absolute ;
    bottom: 0 ;
    left: 0 ;
    width: 100% ;
    border-bottom: 1px solid blue;
    transform: scale(0);
    transition: transform 0.5s ease-out;

}
.nav-item {
    cursor: pointer ;
    
}
.dropdown {
    position:absolute ;
    top: 112% ;
    right: 0% ;
    height: 15rem ;
    width: 15rem ;
    background-color: white;
}
.user-section {
    position: relative ;
}
.user-profile:hover {
    border: 3px solid black ;
}
.user-profile {
    height: 4rem;
    width: 4rem ;
    background-color: white;
    border-radius: 50%;
    cursor: pointer ;
}
.title {
    font-weight: 500 ;
    font-size: 2rem;
}
.header-section {
    height: 5rem;
    width: 100% ;
    background-color: red;
    position: fixed ;
    top: 0 ;
    left: 0% ;
    z-index: 2 ;

}
</style>