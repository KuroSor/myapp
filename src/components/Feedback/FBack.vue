<style>
.formHeader{
    margin-top: 30px;
    margin-left: 45px;
    margin-bottom: 30px;
}
.contForm{
    display: flex;
    justify-content: center;
    align-items: center;
}
.forms{
    border: 1px solid #D9D9D9;
    width: 510px;
    height: 700px;
    margin: 10px;
    margin-top: 130px;
    border-radius: 20px;
}
.continp{
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputs{
padding: 0 20px;
width: 410px;
height: 56px;
margin: 10px;
border:1px solid #D9D9D9;
border-radius: 8px;
}
.inputs2{
    padding: 0 20px;
    width: 175px;
    height: 56px;
    margin: 10px;
    border:1px solid #D9D9D9;
    border-radius: 8px;
}
.text{
    height: 150px;
    padding: 0 20px;
    width: 410px;
    margin: 10px;
    border:1px solid #D9D9D9;
    border-radius: 8px;
    margin-bottom: 20px;
}
.check{
    background-color: #D9D9D9;
    margin-right: 10px;
}
.contcheck{
    margin-left: 30px;
    font-size: 16px;
    margin-top: 5px;
}
.FeedBackBtn{
    width: 180px;
    height: 50px;
    border: 1px solid #D9D9D9 ;
    margin-right: 10px;
    background-color:#CAC5FA;
    border-radius: 40px;
    margin-top: 30px;
  }
</style>

<template>
<div class = "contForm">
    <form class="forms">
        <h1 class = "formHeader">Новая заявка</h1>
        <div class = "continp"><input placeholder="ФИО" class = "inputs" type="text"></div>
        <div class = "continp">
        <input placeholder="Телефон" class = "inputs2" type="tel">
        <input placeholder="E-mail" class = "inputs2" type="text">
        </div>
        <div class = "continp"><input placeholder="Названия организации" class = "inputs" type="text"></div>
        <div class = "continp"><input placeholder="Текст обращения" class = "text" type="text"></div>

        <div class = "contcheck"><input type="checkbox" id="first" class ="check"><label for = "first">Юридическое лицо</label></div>
        <div class = "contcheck"><input type="checkbox" id="second" class ="check"><label for = "second">Создать аккаунт на основе введенных данных</label></div>
        <div class = "contcheck"><input type="checkbox" id="thirst" class ="check"><label for = "thirst">Даю согласие на обработку моих персональных данных</label></div>
        <div  class = "continp"><Button class = "FeedBackBtn">Связаться с нами</Button></div>

    </form>
</div>
</template>

<script setup>
</script>