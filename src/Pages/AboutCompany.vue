<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>
<style>
#Maincompany {
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.LogoCompany {
  display: flex;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
}
.imgCompany {
  margin-left: 200px;
  margin-top: 50px;
}
.textCompany {
  align-self: center;
  margin-left: 20px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
}
.CompanyHeader {
  font-size: 32px;
  margin-left: 120px;
  margin-bottom: 80px;
  font-family: "Inter", sans-serif;
}
.contentCompany {
  margin-left: 190px;
}
</style>

<template>
  <div id="Maincompany">
    <div class="contentCompany">
      <div class="CompanyHeader"><h1>О компании</h1></div>
      <div class="LogoCompany">
        <div><img src="@\assets\Molniya.svg" alt="Молния" /></div>
        <div class="textCompany">
          Выполняем всю работу ля как быстро и эффективно
        </div>
      </div>
      <div class="LogoCompany">
        <div><img src="@\assets\Liniya.svg" alt="Кривая" /></div>
        <div class="textCompany">
          Выполняем всю работу ля как быстро и эффективно
        </div>
      </div>
      <div class="LogoCompany">
        <div><img src="@\assets\Galochka.svg" alt="Галочка" /></div>
        <div class="textCompany">
          Выполняем всю работу ля как быстро и эффективно
        </div>
      </div>
    </div>

    <div class="imgCompany">
      <img src="@\assets\Kartinka.svg" alt="Картинка" />
    </div>
  </div>
</template>

<script setup></script>
