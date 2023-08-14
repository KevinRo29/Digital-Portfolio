<template>
  <div class="bg-white text-black min-h-screen">
    <Navbar />

    <div class="container mx-auto py-8">
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl font-bold">Contact</h1>
        <p class="text-lg text-center">Write me if you have any questions or projects in mind!</p>

        <form class="w-full md:w-2/3 lg:w-1/2 px-4" @submit="sendEmail">
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="name">Name</label>
            <input
              class="w-full bg-gray-200 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-purple-700"
              type="text"
              id="name"
              placeholder="Write your name"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="email">Email</label>
            <input
              class="w-full bg-gray-200 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-purple-700"
              type="email"
              id="email"
              placeholder="Wirte your email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-lg font-bold mb-2" for="message">Message</label>
            <textarea
              class="w-full bg-gray-200 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-purple-700 resize-none"
              id="message"
              rows="4"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="w-full bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg shadow font-bold"
            >
              Send Message
            </button>
          </div>
          <div class="text-center mt-4">
            <a
              href="https://wa.me/4424667799?text=Hola,%20me%20gustaría%20saber%20más%20información%20sobre%20tu%20producto."
              target="_blank"
              class="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center text-white font-bold fixed bottom-4 right-4 btn-size pulse-animation"
            >
              <span class="absolute -top-1 left-1 bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs font-bold">!</span>
              <img class="w-1/2" src="../assets/svg/Whatsapp.svg" alt="Whatsapp">
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="js">
import Navbar from '@/components/Navbar.vue';

const sendEmail = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const recipientEmail = 'kevinro0829@gmail.com';
  const mailtoLink = `mailto:${encodeURIComponent(recipientEmail)}?subject=Contacto%20desde%20mi%20sitio%20web&body=${encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
  )}`;

  window.open(mailtoLink);
};
</script>
  