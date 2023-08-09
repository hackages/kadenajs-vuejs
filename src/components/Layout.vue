<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div
    class="font-inter tracking-tight text-gray-900 antialiased bg-primary-50"
  >
    <div class="relative flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main class="main flex justify-center">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
