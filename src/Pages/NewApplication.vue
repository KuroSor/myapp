<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
</style>

<style lang="scss">
.formHeader {
  font-family: "Inter", sans-serif;
  font-size: 26px;
}

.FeedBackBtn {
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

.FeedBackBtn:hover {
  background-color: #8f8bb0;
  font-family: "Inter", sans-serif;
}
.contForm {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 843px;
}
.forms {
  display: grid;
  grid-template-areas:
    "Headerforms crestik"
    "firstinp firstinp"
    "secondinp thirdinp"
    "fourthinp fourthinp"
    "fifthinp fifthinp"
    "sixthinp sixthinp"
    "galochkiforForms galochkiforForms"
    "buttonforForm buttonforForm";
  justify-content: center;
  align-items: center;
  grid-template-rows: 77px 77px 77px 77px 77px 116px 77px 77px;
  box-shadow: 0px 2px 10px 5px #d9d9d9;
  grid-column-gap: 20px;

  border: 1px solid #d9d9d9;
  width: 510px;
  height: 670px;
  margin-top: 96px;
  border-radius: 20px;
}

.inputs {
  padding: 0 20px;
  width: 410px;
  height: 56px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
}
.inputs2 {
  padding: 0 20px;
  width: 175px;
  height: 56px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
}

.inputTextHead {
  height: 56px;
  padding: 0 20px;
  width: 410px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
}

.inputText {
  height: 54px;
  padding: 20px 20px 20px 20px;
  width: 410px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  resize: none;
}

.contcheck {
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

#HeaderforForm {
  grid-area: Headerforms;
}

#closecrest {
  grid-area: crestik;
  margin-bottom: 19px;
  margin-left: 190px;
}

.CrestikHov {
  background-image: url(@/assets/close.svg);
  background-repeat: no-repeat;
  position: absolute;
  height: 1.43em;
  width: 1.43em;
}

#buttoncrst:hover + .CrestikHov {
  background-image: url(@/assets/CrestikHover.svg);
}

#autorizatsiya {
  grid-area: autoriz;
  justify-self: flex-start;
  margin-left: 35px;
  margin-bottom: 10px;
}

#registraciya {
  grid-area: registr;
  margin-bottom: 10px;
}

#firstinput {
  grid-area: firstinp;
  align-self: center;
  justify-self: center;
}

#secondinput {
  grid-area: secondinp;
}
#thirdtinput {
  grid-area: thirdinp;
}

#fourthinput {
  grid-area: fourthinp;
  align-self: center;
  justify-self: center;
}

#fifthinput {
  grid-area: fifthinp;
  align-self: center;
  justify-self: center;
}

#sixthinput {
  grid-area: sixthinp;
  align-self: center;
  justify-self: center;
}

#buttonform {
  grid-area: buttonforForm;
  align-self: center;
  justify-self: center;
}

#Galochki {
  align-self: center;
  justify-self: center;
  grid-area: galochkiforForms;
  display: grid;
  grid-template-areas:
    "firGal"
    "secGal"
    "thiGal";
  gap: 5px;
  width: 450px;
}

#firstGakichka {
  grid-area: firGal;
  margin-right: 15px;
}

#secondGakichka {
  grid-area: secGal;
  margin-right: 15px;
}

#thirdtGakichka {
  grid-area: thiGal;
  margin-right: 15px;
}

.inputCheckMark {
  margin-left: 1.7em;
}

.check {
  appearance: none;
  position: absolute;
}

.CustomCheckBox {
  position: absolute;
  height: 1.1em;
  width: 1.1em;
  margin-left: -1.7em;
  background-image: url(@/assets/CheckMarkOff.svg);
  background-repeat: no-repeat;
}

.check:checked + .CustomCheckBox {
  background-image: url(@/assets/CheckMarkOn.svg);
}

.check:focus + .CustomCheckBox {
  background-image: url(@/assets/CheckMarkFocus.svg);
}

.check:focus:checked + .CustomCheckBox {
  background-image: url(@/assets/CheckMarkFocusChecked.svg);
}

.check:hover + .CustomCheckBox {
  background-image: url(@/assets/CheckMarkHover.svg);
}

.check:hover:checked + .CustomCheckBox {
  background-image: url(@/assets/CheckMarkHoverChecked.svg);
}
</style>

<template>
  <!-- Заголовок -->
  <Header></Header>
  <!-- Форма -->
  <div class="mixinFbackForm">
    <div class="contForm">
      <form class="forms">
        <div id="HeaderforForm"><h1 class="formHeader">Новая заявка</h1></div>
        <div id="closecrest">
          <label class="labelForcrestik">
            <button hidden id="buttoncrst"></button>
            <span class="CrestikHov"></span>
          </label>
        </div>
        <div id="firstinput">
          <input placeholder="ФИО" class="inputs" type="text" />
        </div>
        <div id="secondinput">
          <input placeholder="Телефон" class="inputs2" type="tel" />
        </div>
        <div id="thirdtinput">
          <input placeholder="E-mail" class="inputs2" type="text" />
        </div>

        <div id="fourthinput">
          <input
            placeholder="Названия организации"
            class="inputs"
            type="text"
          />
        </div>
        <div id="fifthinput">
          <input
            placeholder="Заголовок обращения"
            class="inputTextHead"
            type="text"
          />
        </div>
        <div id="sixthinput">
          <textarea placeholder="Текст обращения" class="inputText"></textarea>
        </div>

        <div id="Galochki">
          <div class="contcheck">
            <label class="inputCheckMark">
              <input type="checkbox" id="firstGakichka" class="check" />
              <span class="CustomCheckBox"></span>
              Юридическое лицо
            </label>
          </div>

          <div class="contcheck">
            <label class="inputCheckMark">
              <input type="checkbox" id="secondGakichka" class="check" />
              <span class="CustomCheckBox"></span>
              Создать аккаунт на основе введенных данных
            </label>
          </div>

          <div class="contcheck">
            <label class="inputCheckMark">
              <input type="checkbox" id="thirdtGakichka" class="check" />
              <span class="CustomCheckBox"></span>
              Даю согласие на обработку моих персональных данных
            </label>
          </div>
        </div>
        <div class="continp" id="buttonform">
          <Button class="FeedBackBtn">Связаться с нами</Button>
        </div>
      </form>
    </div>
  </div>

  <!-- Футер -->
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/U-Header.vue";
import Footer from "@/components/U-Footer.vue";
</script>
