<template>
  <p class="text-2xl text-center mt-6">Frameworks</p>
  <div class="flex flex-wrap justify-center mx-10">
    <div
      class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-3"
      v-for="card in frameworksCards"
      :key="card.title"
      @mouseover="highlightCard(card.title)"
      @mouseleave="highlightCard(null)"
      :class="{ 'transform scale-110': isHighlighted(card.title), 'transform scale-90': !isHighlighted(card.title) && highlightedCard }"
    >
      <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
        <div class="mb-4">
          <img :src="card.image" :alt="card.title" class="w-full h-36 object-cover rounded-lg">
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-xl font-bold">{{ card.title }} - <span class="text-base">{{ card.nivel }}</span></h2>
          <p class="text-gray-600 mt-2">{{ card.description }}</p>
        </div>
        <a :href="card.link" target="_blank" class="mt-4 inline-block w-full px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 text-center">Visit</a>
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
import { ref } from 'vue';

const highlightedCard = ref(null);

function highlightCard(title) {
  highlightedCard.value = title;
}

function isHighlighted(title) {
  return highlightedCard.value === title;
}

const frameworksCards = [
  {
    title: "Vue",
    description: "Vue.js is a progressive framework for building user interfaces.",
    link: "https://vuejs.org",
    image: VueImage,
    nivel: "Intermediate"
  },
  {
    title: "Ionic (Angular and Vue)",
    description: "Ionic is a hybrid mobile application development framework.",
    link: "https://ionicframework.com",
    image: IonicImage,
    nivel: "High"
  },
  {
    title: "Bootstrap",
    description: "Bootstrap is a popular framework for creating websites and applications with responsive design.",
    link: "https://getbootstrap.com",
    image: BootstrapImage,
    nivel: "High"
  },
  {
    title: "CodeIgniter",
    description: "CodeIgniter is a PHP web application development framework.",
    link: "https://codeigniter.com",
    image: CodeIgniterImage,
    nivel: "Basic"
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS is a utilitarian and highly customizable CSS framework.",
    link: "https://tailwindcss.com",
    image: TailwindImage,
    nivel: "Intermediate"
  },
  {
    title: "Django",
    description: "Django is a Python web development framework that follows the MVC design pattern.",
    link: "https://www.djangoproject.com",
    image: DjangoImage,
    nivel: "Intermediate"
  }
];

</script>