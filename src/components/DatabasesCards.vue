<template>
    <p class="text-2xl text-center mt-6">Database management</p>
    <div class="flex flex-wrap justify-center mx-10">
      <div
      class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-3"
      v-for="card in databasesCards"
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

import PostgresqlImage from '@/assets/img/Postgresql.png';
import MySQLImage from '@/assets/img/MySQL.jpg';
import { ref } from 'vue';

const highlightedCard = ref(null);

function highlightCard(title) {
  highlightedCard.value = title;
}

function isHighlighted(title) {
  return highlightedCard.value === title;
}

const databasesCards = [
  {
    title: "PostgreSQL",
    description: "PostgreSQL is an open source relational database management system.",
    link: "https://www.postgresql.org",
    image: PostgresqlImage,
    nivel: "Básico"
  },
  {
    title: "MySQL",
    description: "MySQL is an open source relational database management system.",
    link: "https://www.mysql.com",
    image: MySQLImage,
    nivel: "Intermedio"
  }
];

</script>