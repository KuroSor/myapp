<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>
<style>
#MainCase {
  height: 1000px;
  background-color: #f2f3fc;
  display: grid;
  grid-template-areas:
    "headers headers headers"
    "firstcase secondcase thirstcase";
  justify-content: center;
  gap: 0px 50px;
}
.delaitem1 {
  grid-area: firstcase;
  align-self: start;
  width: 400px;
  font-family: "Inter", sans-serif;
}
.delaitem2 {
  grid-area: secondcase;
  align-self: start;
  width: 400px;
  font-family: "Inter", sans-serif;
}
.delaitem3 {
  grid-area: thirstcase;
  align-self: start;
  width: 400px;
  font-family: "Inter", sans-serif;
}
.delaitem4 {
  grid-area: headers;
  height: 100px;
  align-self: center;
  justify-self: center;
  font-size: 36px;
  font-family: "Inter", sans-serif;
}
.textinDela {
  font-size: 12px;
}
</style>

<template>
  <div id="MainCase">
    <div class="delaitem4"><h1>Case</h1></div>

    <div class="delaitem1">
      <div><img src="@\assets\Image.png" alt="Типо дело" width="400px" /></div>
      <div><h1>Заголовок 1</h1></div>
      <div class="textinDela">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime
        nemo non accusantium mollitia iure
      </div>
    </div>

    <div class="delaitem2">
      <div><img src="@\assets\Image1.png" alt="Типо дело" width="400px" /></div>
      <div><h1>Заголовок 2</h1></div>
      <div class="textinDela">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime
        nemo non accusantium mollitia iure
      </div>
    </div>

    <div class="delaitem3">
      <div><img src="@\assets\Image2.png" alt="Типо дело" width="400px" /></div>
      <div><h1>Заголовок 3</h1></div>
      <div class="textinDela">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime
        nemo non accusantium mollitia iure
      </div>
    </div>
  </div>
</template>

<script setup></script>
