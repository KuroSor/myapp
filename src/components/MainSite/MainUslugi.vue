<style>
.Uslugi{
    margin: 0px;
    padding: 0px;
    height: 1000px;
    background-color: #F2F3FC;
    display: grid;

    grid-template-areas: 
    "Headerss Headerss ."
    "ContenUslug1 ContenUslug2 image"
    "ContenUslug3 ContenUslug4 image";
    justify-content: center;

}
.contentUslug{
    border: 1px solid black;
    width: 400px;
    height: 140px;
    border-radius: 32px;
    text-align: center;
    background-color: white;
    margin-right: 30px;


}
.ViewH{
    font-size: 20px;
    font-weight: bold;
    color: #2F3040;
}

.ViewB{
font-size: 12px;
}



#item0{
    grid-area: Headerss;
    align-self: end;
    justify-self: center;
    font-size: 36px;
    margin-right: 60px;
}
.item1{
    grid-area: ContenUslug1;
    align-self: center;
    justify-self: center;
    margin-right: 50px;

}

#item5{
    grid-area: image;
    margin-left:50px ;
}
.item11{
display: flex;
margin-bottom: 30px;
}
.item12{
display: flex;
}
.otsup{
    margin-right: 30px;
}
</style>

<template> 

<div class = "Uslugi">

    <div class = "Header"  id = "item0">
        <h1>Услуги</h1>
    </div>
<div class = "item1">
<div class = "item11">
   <div class = "contentUslug">
        <br><p><span class = "ViewH">Название Услуги</span></p><br>
        <p><span class = "ViewB">Типо много очень много ааааааа ффффффффффффффффи в несколько строк</span></p>
    </div>
    <div class = "contentUslug">
        <br><p><span class = "ViewH">Название Услуги</span></p><br>
        <p><span class = "ViewB">Типо много очень много ааааааа ффффффффффффффффи в несколько строк</span></p>
    </div>
</div>

<div class = "item12">
   <div class = "contentUslug">
        <br><p><span class = "ViewH">Название Услуги</span></p><br>
        <p><span class = "ViewB">Типо много очень много ааааааа ффффффффффффффффи в несколько строк</span></p>
    </div>
    <div class = "contentUslug">
        <br><p><span class = "ViewH">Название Услуги</span></p><br>
        <p><span class = "ViewB">Типо много очень много ааааааа ффффффффффффффффи в несколько строк</span></p>
    </div> 
</div>
</div>  
    <div id = "item5">
        <img src="@/assets/Uslugi.png" alt="Картинка">
    </div>
</div>
 

</template>

<script setup>

</script>