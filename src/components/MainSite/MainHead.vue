<style>

  #MainHeader{
    height: 60px;
    border-bottom: 1px solid black;
    background-color: white;
    display: flex;
    justify-content:space-between;
    align-items: center;

  }
  .MainBtn{
    width: 80px;
    height: 40x;
    border: 0px;
    margin-right: 20px;
    background-color: white;
  }
  .MainPrivateBtn{
    width: 140px;
    height: 30px;
    border: 1px solid black;
    margin-right: 20px;
    background-color:white;
    border-radius: 40px;
  }
  .MainFeedbackBtn{
    width: 140px;
    height: 30px;
    border: 1px solid black;
    margin-right: 10px;
    background-color:#CAC5FA;
    border-radius: 40px;
  }
  .MainLogo{
    margin-left: 15px;
  }
  #MainBody{
    height: 940px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:0px -5px 0px -5px;
    font-size: 64px;
  }
  .hhh{
    width: 370px;
    height: 800px;
  }

</style>
  
<template>
  <!-- Шапка -->
<div id = "MainHeader">
  <div class = "MainLogo">
    <img src="@\assets\Logo.svg" alt="Логотип компании">
  </div>
  <div>
    <Button class = "MainBtn">Услуги</Button>
    <Button class = "MainBtn">О компании</Button>
    <Button class = "MainBtn">Кейсы</Button>
    <Button class = "MainBtn">Контакты</Button>
  </div>
  <div>
    <Button class = "MainPrivateBtn">Личный кабинет</Button>
    <Button class = "MainFeedbackBtn">Связаться с нами</Button>
  </div>
</div>

<!-- кружочки) -->
<div id = "MainBody">
    <img src="@\assets\Ellipse8.svg" alt="Шарик 1" class="hhh">
  <div>Проффесиональные IT решения</div>
    <img src="@\assets\Ellipse9.svg" alt="Шарик 2" class="hhh">
</div>
</template>
  
  <script setup>
  
  
  </script>
  
  