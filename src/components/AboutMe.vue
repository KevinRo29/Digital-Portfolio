<template>
  <div class="bg-purple-700 rounded-lg shadow-lg p-4 text-white">
    <img class="w-1/5 h-auto object-cover rounded-full mb-4 mx-auto" src="../assets/img/Foto_Perfil.jpg" alt="Foto de perfil" />
    <div>
      <h2 class="text-2xl font-bold text-white mb-2 text-center">{{ fullName }}</h2>
      <p class="text-base text-white text-justify my-3 mx-4">{{ description }}</p>
      <div class="flex flex-col items-center gap-4">
        <a href="http://www.linkedin.com/in/kevin-jair-romero-pulido-450b41205" target="_blank" class="bg-blue-600 hover:bg-blue-700 w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-[40px] px-4 py-2 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2">
          <img class="me-2" src="../assets/svg/LinkedIn.svg" alt="LinkedIn" />
          <span class="text-white">Ver LinkedIn</span>
        </a>
        <a href="https://github.com/KevinRo29" target="_blank" class="bg-gray-800 hover:bg-gray-900 w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-[40px] px-4 py-2 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2">
          <img class="me-2" src="../assets/svg/GitHub.svg" alt="GitHub" />
          <span class="text-white">Ver GitHub</span>
        </a>
        <a href="https://drive.google.com/drive/folders/1sRvRyG95ksmQ471mkK7OazvqG_RA3qWA?usp=drive_link" target="_blank" class="bg-red-600 hover:bg-red-700 w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-[40px] px-4 py-2 rounded-lg shadow flex items-center justify-center truncate transition-transform transform hover:translate-x-2">
          <img class="me-2" src="../assets/svg/Drive.svg" alt="Google Drive" />
          <span class="text-white">Ver Google Drive</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const fullName = 'Kevin Jair Romero Pulido';
const description =
  'Estudiante de ingeniería en software, decidido a aprender nuevas tecnologías de la información, buscando desarrollar habilidades y competencias en una empresa líder en la industria, tenaz y capaz de adaptarse al entorno, con capacidad de autoanálisis.';
</script>
