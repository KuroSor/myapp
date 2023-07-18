<style>
#MainCase{
    height: 1000px;
    background-color: #F2F3FC;
    display: grid;
    grid-template-areas:
    "headers headers headers"
     "firstcase secondcase thirstcase";
     justify-content: center;
     gap: 0px 50px;
   
}
.delaitem1{
grid-area: firstcase;
align-self: start;
width: 400px;

}
.delaitem2{
    grid-area: secondcase;
    align-self: start;
    width: 400px;


}
.delaitem3{
    grid-area: thirstcase;
    align-self: start;
    width: 400px;


}
.delaitem4{
    grid-area: headers;
    height: 100px;
    align-self: center;
    justify-self: center;
    font-size: 36px;

}
</style>

<template>
<div id = "MainCase">
    <div class = "delaitem4"><h1>Case</h1></div>

<div class = "delaitem1">
    <div><img src="@\assets\Image.png" alt="Типо дело" width="400px"></div>
    <div><h1>Заголовок 1</h1></div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime nemo non accusantium mollitia iure</div>
</div>

<div class = "delaitem2">
    <div><img src="@\assets\Image1.png" alt="Типо дело"  width="400px"></div>
    <div><h1>Заголовок 2</h1></div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime nemo non accusantium mollitia iure</div>
</div>

<div class = "delaitem3">
    <div><img src="@\assets\Image2.png" alt="Типо дело" width="400px"></div>
    <div><h1>Заголовок 3</h1></div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime nemo non accusantium mollitia iure</div>
</div>
</div>
</template>

<script setup>
</script>