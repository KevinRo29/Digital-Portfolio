<template>
    <Navbar />

    <div class="bg-white">
        <div class="container mx-auto px-4 md:flex md:justify-center md:items-center">
            <div class="md:w-7/12 md:mr-4 my-8 md:mb-0">
                <AboutMeCard />
            </div>
            <div class="md:w-5/12 md:ml-4">
                <QRCode />
            </div>
        </div>
    </div>
</template>
  
<script setup lang="js">
import Navbar from '@/components/Navbar.vue';
import AboutMeCard from '@/components/AboutMe.vue';
import QRCode from '@/components/QRCode.vue';

</script>