<template>
  <p class="text-2xl text-center mt-6">Frameworks</p>
  <div class="flex flex-wrap justify-center mx-10">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-3" v-for="card in frameworksCards" :key="card.title">
      <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
        <div class="mb-4">
          <img :src="card.image" :alt="card.title" class="w-full h-36 object-cover rounded-lg">
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-xl font-bold">{{ card.title }}</h2>
          <p class="text-gray-600 mt-2">{{ card.description }}</p>
        </div>
        <a :href="card.link" target="_blank" class="mt-4 inline-block w-full px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 text-center">Visitar</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">

import VueImage from '@/assets/img/Vue.png';
import IonicImage from '@/assets/img/Ionic.png';
import BootstrapImage from '@/assets/img/Bootstrap.png';
import CodeIgniterImage from '@/assets/img/CodeIgniter.png';
import TailwindImage from '@/assets/img/Tailwind.jpg';
import DjangoImage from '@/assets/img/Django.png';

const frameworksCards = [
  {
    title: "Vue",
    description: "Vue.js es un framework progresivo para construir interfaces de usuario.",
    link: "https://vuejs.org",
    image: VueImage
  },
  {
    title: "Ionic",
    description: "Ionic es un framework de desarrollo de aplicaciones móviles híbridas.",
    link: "https://ionicframework.com",
    image: IonicImage
  },
  {
    title: "Bootstrap",
    description: "Bootstrap es un framework popular para crear sitios web y aplicaciones con un diseño receptivo.",
    link: "https://getbootstrap.com",
    image: BootstrapImage
  },
  {
    title: "CodeIgniter",
    description: "CodeIgniter es un framework de desarrollo de aplicaciones web en PHP.",
    link: "https://codeigniter.com",
    image: CodeIgniterImage
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS es un framework de CSS utilitario y altamente personalizable.",
    link: "https://tailwindcss.com",
    image: TailwindImage
  },
  {
    title: "Django",
    description: "Django es un framework de desarrollo web en Python que sigue el patrón de diseño MVC.",
    link: "https://www.djangoproject.com",
    image: DjangoImage
  }
];

</script>