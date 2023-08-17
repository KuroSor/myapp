<style lang="scss">
@use "@/assets/MainStyles.scss" as s;

</style>

<style>
.background {
  height: 843px;
  background-image: url(C:\Users\vital\myapp\src\assets\Frame83.png);
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.contactimg{
  margin-top: -50px;
}

</style>

<template>
  <div class="background">
    <div class="contactimg">
      <img src="@\assets\Group34.svg" alt="contact" />
    </div>
  </div>

<Footer></Footer>
</template>

<script setup>
import Footer from "@/components/U-Footer.vue";
</script>
