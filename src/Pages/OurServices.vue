<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>
<style>
.Uslugi {
  margin: 0px;
  padding: 0px;
  height: 1000px;
  background-color: #f2f3fc;
  display: grid;

  grid-template-areas:
    "Headerss Headerss ."
    "ContenUslug1 ContenUslug2 image"
    "ContenUslug3 ContenUslug4 image";
  justify-content: center;
}
.contentUslug {
  width: 400px;
  height: 140px;
  border-radius: 32px;
  text-align: center;
  background-color: white;
  margin-right: 30px;
  box-shadow: inset 0px 6px 6px 1px #d9d9d9;
}
.ViewH {
  font-size: 20px;
  font-weight: bolder;
  color: #2f3040;
  font-family: "Inter", sans-serif;
}

.ViewB {
  font-size: 12px;
  font-family: "Inter", sans-serif;
}

#item0 {
  grid-area: Headerss;
  align-self: end;
  justify-self: center;
  font-size: 36px;
  margin-right: 60px;
  font-family: "Inter", sans-serif;
}
.item1 {
  grid-area: ContenUslug1;
  align-self: center;
  justify-self: center;
  margin-right: 50px;
}

#item5 {
  grid-area: image;
  margin-left: 50px;
}
.item11 {
  display: flex;
  margin-bottom: 30px;
}
.item12 {
  display: flex;
}
.otsup {
  margin-right: 30px;
}
</style>

<template>
  <div class="Uslugi">
    <div class="Header" id="item0">
      <h1>Услуги</h1>
    </div>
    <div class="item1">
      <div class="item11">
        <div class="contentUslug">
          <br />
          <p><span class="ViewH">Название Услуги</span></p>
          <br />
          <p>
            <span class="ViewB"
              >Типо много очень много ааааааа ффффффффффффффффи в несколько
              строк</span
            >
          </p>
        </div>
        <div class="contentUslug">
          <br />
          <p><span class="ViewH">Название Услуги</span></p>
          <br />
          <p>
            <span class="ViewB"
              >Типо много очень много ааааааа ффффффффффффффффи в несколько
              строк</span
            >
          </p>
        </div>
      </div>

      <div class="item12">
        <div class="contentUslug">
          <br />
          <p><span class="ViewH">Название Услуги</span></p>
          <br />
          <p>
            <span class="ViewB"
              >Типо много очень много ааааааа ффффффффффффффффи в несколько
              строк</span
            >
          </p>
        </div>
        <div class="contentUslug">
          <br />
          <p><span class="ViewH">Название Услуги</span></p>
          <br />
          <p>
            <span class="ViewB"
              >Типо много очень много ааааааа ффффффффффффффффи в несколько
              строк</span
            >
          </p>
        </div>
      </div>
    </div>
    <div id="item5">
      <img src="@/assets/Uslugi.png" alt="Картинка" />
    </div>
  </div>
</template>

<script setup></script>
