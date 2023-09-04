<template>
    <div class="bg-cover-container flex justify-start items-center px-10">
        <div class="flex flex-col items-center w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:-1/3 bg-white bg-opacity-20 text-black p-4 rounded-lg">
            <img
                src="../assets/img/Foto_Perfil.jpg"
                alt="Profile Picture"
                class="w-1/3 h-auto rounded-full"
            />

            <p class="text-white text-sm sm:text-base md:text-base lg:text-lg text-justify mt-4">
                Software engineering student, determined to learn new information technologies, 
                looking to develop skills and competencies in a leading company in the industry, 
                tenacious and able to adapt to the environment, with capacity for self-analysis.
            </p>

            <button @click="toggleArrowRotation" class="text-white mt-4 transform transition-transform" :class="{ 'rotate-180': arrowRotation }">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </button>

            <div v-if="showContact" class="mt-4">
                <div class="flex flex-row">
                    <div class="flex flex-col justify-evenly w-2/3">
                        <a href="https://drive.google.com/drive/folders/1sRvRyG95ksmQ471mkK7OazvqG_RA3qWA?usp=drive_link" target="_blank" class="bg-red-600 hover:bg-red-700 text-xs sm:text-xs md:text-sm px-4 py-2 me-5 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2 whitespace-nowrap">
                            <img class="me-2" src="../assets/svg/Drive.svg" alt="Google Drive" />
                            <span class="text-white">See Google Drive</span>
                        </a>
                        <a href="https://github.com/KevinRo29" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-xs sm:text-xs md:text-sm px-4 py-2 me-5 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2 whitespace-nowrap">
                            <img class="me-2" src="../assets/svg/GitHub.svg" alt="GitHub" />
                            <span class="text-white">See GitHub</span>
                        </a>
                        <a href="http://www.linkedin.com/in/kevin-jair-romero-pulido-450b41205" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-xs sm:text-xs md:text-sm me-5 px-4 py-2 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2 whitespace-nowrap">
                            <img class="me-2" src="../assets/svg/LinkedIn.svg" alt="LinkedIn" />
                            <span class="text-white">See LinkedIn</span>
                        </a>
                    </div>

                    <div class="w-1/3 flex flex-col justify-center">
                        <QRCode />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="js">
import { ref } from 'vue';
import QRCode from '@/components/QRCode.vue';

const showContact = ref(false);
const arrowRotation = ref(false);

const toggleArrowRotation = () => {
    showContact.value = !showContact.value;
    arrowRotation.value = !arrowRotation.value;
};
</script>

<style>
.bg-cover-container {
    background-image: url('../assets/img/Background.jpg');
    background-size: cover;
    height: 91vh;
    width: 100vw;
}
</style>