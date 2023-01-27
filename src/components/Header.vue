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
            <div class="title">Dev's site</div>
        </div>
        <div class="col d-flex justify-content-center align-items-center ">
            <router-link to="/" class="me-4" >Home</router-link>
            <router-link to="/about" >About</router-link>
        </div>s
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
    border-bottom: 1px solid rgb(238, 33, 133);
    transform: scale(0);
    transition: transform 0.2s ease-out;

}
.nav-item {
    cursor: pointer ;
    color: rgb(238, 33, 133) ;
    
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
    border: 3px solid rgb(238, 33, 133) ;
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
    color: rgb(238, 33, 133) ;
}
.header-section {
    height: 5rem;
    width: 100% ;
    background-color: black;
    position: fixed ;
    top: 0 ;
    left: 0% ;
    z-index: 2 ;

}
</style>