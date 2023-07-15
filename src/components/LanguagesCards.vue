<template>
  <p class="text-2xl text-center mt-6">Programming languages</p>
  <div class="flex flex-wrap justify-center mx-10">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-3" v-for="card in languagesCards" :key="card.title">
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
import PythonImage from '@/assets/img/Python.jpg';
import JavascriptImage from '@/assets/img/Javascript.jpeg';
import PHPImage from '@/assets/img/PHP.jpg';
import TypeScriptImage from '@/assets/img/TypeScript.png';

const languagesCards = [
  {
    title: "Python",
    description: "Python es un lenguaje de programación interpretado de alto nivel y fácil de aprender.",
    link: "https://python.org",
    image: PythonImage
  },
  {
    title: "JavaScript",
    description: "JavaScript es un lenguaje de programación utilizado para crear interactividad en las páginas web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: JavascriptImage
  },
  {
    title: "PHP",
    description: "PHP es un lenguaje de programación popular para el desarrollo web del lado del servidor.",
    link: "https://www.php.net",
    image: PHPImage
  },
  {
    title: "TypeScript",
    description: "TypeScript es un superconjunto de JavaScript que agrega tipos estáticos opcionales al lenguaje.",
    link: "https://www.typescriptlang.org",
    image: TypeScriptImage
  }
];

</script>