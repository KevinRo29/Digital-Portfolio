<template>
    <div>
      <nav class="bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
              <a href="/aboutme" class="text-white font-bold uppercase">Kevin Romero</a>
            </div>
            <div class="flex sm:hidden">
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="text-white rounded-md p-2 inline-flex items-center justify-center focus:outline-none"
              >
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden sm:block">
              <ul class="flex space-x-4">
                <li>
                  <a href="/aboutme" class="text-white hover:bg-purple-700 hover:text-white px-4 py-2 rounded-full">About me</a>
                </li>
                <li>
                  <a href="/projects" class="text-white hover:bg-purple-700 hover:text-white px-4 py-2 rounded-full">Projects</a>
                </li>
                <li>
                  <a href="/contact" class="text-white hover:bg-purple-700 hover:text-white px-4 py-2 rounded-full">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="isOpen" class="sm:hidden">
          <ul class="bg-black text-white mt-2 space-y-4">
            <li>
              <a href="/aboutme" class="text-white block px-4 py-2">About me</a>
            </li>
            <li>
              <a href="/projects" class="text-white block px-4 py-2">Projects</a>
            </li>
            <li>
              <a href="/contact" class="text-white block px-4 py-2">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };
  </script>
  