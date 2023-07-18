<style>
#Maincompany{
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items:center;
}
.LogoCompany{
    display: flex;
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 30px;
}
.imgCompany{
    margin-left: 380px;
}
.textCompany{
    align-self: center;
    margin-left: 20px;
}
.CompanyHeader{
    font-size: 32px;
    margin-left: 120px;
    margin-bottom: 80px;
}
.contentCompany{
    margin-left: 180px;
}
</style>

<template>
<div id = "Maincompany">
    <div class = "contentCompany">
        <div class = "CompanyHeader"><h1>О компании</h1></div>
        <div class = "LogoCompany">
            <div><img src="@\assets\Molniya.svg" alt="Молния"></div>
            <div class = "textCompany">Выполняем всю работу ля как быстро и эффективно</div>
        </div>
        <div class = "LogoCompany">
            <div><img src="@\assets\Liniya.svg" alt="Кривая"></div>
            <div class = "textCompany">Выполняем всю работу ля как быстро и эффективно</div>
        </div>
        <div class = "LogoCompany">
            <div> <img src="@\assets\Galochka.svg" alt="Галочка"></div>
            <div class = "textCompany">Выполняем всю работу ля как быстро и эффективно</div>
        </div>
    </div>

    <div class = "imgCompany">
        <img src="@\assets\Kartinka.svg" alt="Картинка">
    </div>

</div>
</template>

<script setup>
</script>