<style>
.ContentApplicationList {
  margin-bottom: 31px;
  display: grid;
  grid-template-areas:
    "CATitle"
    "App";
  grid-template-rows: 60px;
}

.CurrentApplicationTitle {
  grid-area: CATitle;
  justify-self: center;
}

.Application {
  grid-area: App;
}
</style>

<template>
  <div class="ContentApplicationList">
    <div class="CurrentApplicationTitle">
      <h1>Список обращений</h1>
    </div>

    <div class="Application">
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
      <Application></Application>
    </div>
  </div>
</template>

<script setup>
import Application from "./Application.vue";
</script>
