<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>

<template>
  <!-- Форма -->
  <CreateAppForm></CreateAppForm>
  <CreateAppForm></CreateAppForm>
  <CreateAppForm></CreateAppForm>

  <!-- Футер -->
  <Footer></Footer>
</template>

<script setup>
import Footer from "@/components/U-Footer.vue";
import CreateAppForm from '@/components/CreateNewApplication.vue'
</script>
