<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>

<template>
  <!-- Заголовок -->
  <Header></Header>
  <!-- Форма -->
  <CreateAppForm></CreateAppForm>
  <!-- Футер -->
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/U-Header.vue";
import Footer from "@/components/U-Footer.vue";
import CreateAppForm from '@/components/CreateNewApplication.vue'

</script>
