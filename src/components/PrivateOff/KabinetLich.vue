<style>
.Form{
    width: 500px;
    height: 750px;
    border: 1px solid #D9D9D9;
    margin-top: 70px;
    margin-left: 40px;
    background-color: #F2F3FC;
}
.dd{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.ff{
    margin-left: 70px;
}
.ff1{
margin-left: 20px;
margin-top: 20px;
}
.inputs{
width: 420px;
height: 35px;
padding: 0 20px;
border: 1px solid #D9D9D9;
border-radius: 4px;
}
.ddd{
    display: flex;
    align-items: center;
    justify-content: center;
}
.labee{
    margin-left: 21px;
    margin-bottom: 5px;
    color:#2F3040;
}
.ots{
    margin-bottom: 20px;
}
.FeedbackBtn{
    width: 180px;
    height: 50px;
    border: 1px solid #D9D9D9 ;
    margin-right: 10px;
    background-color:#CAC5FA;
    border-radius: 40px;
    margin-top: 60px;
  }
  .gg{
    display: flex;
    justify-content: space-between;

  }
  .spisok{
    width: 1350px;
    height: 800px;
    margin-top: 20px;
  }
  .Head{
    text-align: center;
    margin-bottom: 20px;
  }
  .spiForm{
    display: flex;
    justify-content: space-between;
    border: 1px solid #D9D9D9;
    margin-left: 20px;
    margin-right: 30px;
    height: 100px;
    border-radius: 0 40px 0 40px;
    background-color: #F2F3FC;
    margin-bottom: 30px;


  }
  .aa{
    width: 1024px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .aa1{
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content:center;

  }
  .texts{
    color: red;
    margin-top: 0px;
    margin-bottom: 15px;

  }
  .img{
    margin-right: 10px;
  }
  .spisokHead{
    font-size: 20px;
  }
  .Strelka{
    margin-left: 40px;
  }
</style>

<template>
<div class ="gg">
    <div>
        <form class = "Form">
            <div class = "dd">
                <div class = "ff1"><img src="@\assets\Ellipse1.svg" alt="Аватар пользователя"></div>
                <div class="ff">Бирючинский Виталий Станиславович</div>
            </div>

            <div class = "ots">
                <div class = "labee"><label>Ваш E-mail</label></div>
                <div class = "ddd"><input placeholder="Ввод" class = "inputs"></div>
            </div>

            <div class = "ots">
                <div class = "labee"><label>ИНН</label></div>
                <div class = "ddd"><input placeholder="Ввод" class = "inputs"></div>
            </div>

            <div class = "ots">
                <div class = "labee"><label>Название организации</label></div>
                <div class = "ddd"><input placeholder="Ввод" class = "inputs"></div>
            </div>

            <div class = "ots">
                <div class = "labee"><label>Чето еще что может быть</label></div>
                <div class = "ddd"><input placeholder="Ввод" class = "inputs"></div>
            </div>

            <div class = "ots">
                <div class = "labee"><label>Чето еще что может быть</label></div>
                <div class = "ddd"><input placeholder="Ввод" class = "inputs"></div>
            </div>

            <div  class = "ddd"><Button class = "FeedbackBtn">Регистрация</Button></div>

        </form>
    </div>

    <div class = "spisok">
        <div class = "Head"><h1>Список Обращений</h1></div>
        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>

        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>

        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>

        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>

        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>

        <div class = "spiForm">
            <div class = "aa">
                <div><img src="@\assets\Ellipse2.svg" alt="Статус" class = "img">Статус: В ожидании</div>
                <div class = "spisokHead"><h1>Заголовок</h1></div>
            </div>

            <div class = "aa1">
                <div class = "texts">Удалить обращение</div>
                <div class = "Strelka"><img src="@\assets\Group36.svg" alt="Стрелочка"></div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
</script>