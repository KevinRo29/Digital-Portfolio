<template>
    <div>
      <NavMenu />
      <router-view />
    </div>
  </template>
  
  <script>
  import NavMenu from "@/components/Navbar.vue";
  
  export default {
    components: {
      NavMenu,
    },
  };
  </script>
  