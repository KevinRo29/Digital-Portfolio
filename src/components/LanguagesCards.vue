<template>
  <p class="text-2xl text-center mt-6">Programming Languages</p>
  <div class="flex flex-wrap justify-center mx-10">
    <div
      class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-3"
      v-for="card in languagesCards"
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
import PythonImage from '@/assets/img/Python.jpg';
import JavascriptImage from '@/assets/img/Javascript.jpeg';
import PHPImage from '@/assets/img/PHP.jpg';
import TypeScriptImage from '@/assets/img/TypeScript.png';
import { ref } from 'vue';

const languagesCards = [
  {
    title: "Python",
    description: "Python is a high-level, easy-to-learn interpreted programming language.",
    link: "https://github.com/KevinRo29/Python",
    image: PythonImage,
    nivel: "Intermediate"
  },
  {
    title: "JavaScript",
    description: "JavaScript is a programming language used to create interactivity in web pages.",
    link: "https://github.com/KevinRo29/JavaScript",
    image: JavascriptImage,
    nivel: "Intermediate"
  },
  {
    title: "PHP",
    description: "PHP is a popular programming language for server-side web development.",
    link: "https://github.com/KevinRo29/PHP",
    image: PHPImage,
    nivel: "Basic"
  },
  /*{
    title: "TypeScript",
    description: "TypeScript is a superset of JavaScript that adds optional static types to the language.",
    link: "https://www.typescriptlang.org",
    image: TypeScriptImage,
    nivel: "Intermediate"
  }*/
];

const highlightedCard = ref(null);

function highlightCard(title) {
  highlightedCard.value = title;
}

function isHighlighted(title) {
  return highlightedCard.value === title;
}
</script>
