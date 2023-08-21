<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

#MainBody {
  height: 923px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 64px;
  font-family: "Inter", sans-serif;
}

.sharik {
  margin-top: 50px;
  width: 370px;
  height: 800px;
}

.MainHeadText {
  width: 800px;
  text-align: center;
}
</style>

<template>
  <!-- кружочки) -->
  <div id="MainBody">
    <img src="@\assets\Ellipse10.svg" alt="Шарик 1" class="sharik" />
    <div class="MainHeadText"><b>Профессиональные IT решения</b></div>
    <img src="@\assets\Ellipse9.svg" alt="Шарик 2" class="sharik" />
  </div>
</template>
<script setup>
</script>
