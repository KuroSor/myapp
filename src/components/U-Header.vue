<style>
#U-Header {
  height: 70px;
  border-bottom: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}
.U-HeaderBtn {
  width: 150px;
  height: 40px;
  border: 0px;
  margin-right: 20px;
  background-color: white;
  border-radius: 5px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
.U-HeaderBtn:hover {
  background-color: #d9d9d9;
  color: black;
  font-family: "Inter", sans-serif;
  border-radius: 40px;
}

.PersonalAreaBtn {
  width: 180px;
  height: 40px;
  border: 1px solid #d9d9d9;
  margin-right: 20px;
  background-color: white;
  border-radius: 40px;
  align-self: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
.PersonalAreaBtn:hover {
  background-color: #d9d9d9;
  color: black;
  font-family: "Inter", sans-serif;
}

.NewApplicationBtn {
  width: 180px;
  height: 40px;
  border: 1px solid #d9d9d9;
  margin-right: 10px;
  background-color: #cac5fa;
  border-radius: 40px;
  align-self: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
.NewApplicationBtn:hover {
  background-color: #8f8bb0;
  font-family: "Inter", sans-serif;
}
.U-HeaderLogo {
  margin-left: 15px;
  align-self: center;
}
</style>

<template>
  <div id="U-Header">
    <form>
      <div class="U-HeaderLogo">
        <button hidden id="BtnLogoHead"></button>
        <label for="BtnLogoHead">
          <img src="@\assets\Logo.svg" alt="Логотип компании" />
        </label>
      </div>
    </form>
    <div>
      <Button class="U-HeaderBtn">Услуги</Button>
      <Button class="U-HeaderBtn">О компании</Button>
      <Button class="U-HeaderBtn">Кейсы</Button>
      <Button class="U-HeaderBtn">Контакты</Button>
    </div>
    <div>
      <Button class="PersonalAreaBtn">Личный кабинет</Button>
      <Button class="NewApplicationBtn">Связаться с нами</Button>
    </div>
  </div>
</template>

<script setup></script>
