<style>

.FormKabinetLich {
  border: 1px solid #d9d9d9;
  width: 500px;
  height: 700px;
  background-color: #f2f3fc;
  border-radius: 5px;
  margin-left: 44px;
  margin-top: 60px;
}

.contformlichKab {
  display: grid;
  justify-content: center;
  grid-template-areas:
    "HeadersContentLichKab"
    "BodyLichKab"
    "contsavebtn";
  margin-top: 20px;
}

.HeaderLichkabineta {
  grid-area: HeadersContentLichKab;
  display: grid;
  grid-template-areas:
    "Avatarka NameKabineta"
    "contentforbtnkabinet contentforbtnkabinet";
  border-bottom: 2px solid black;
  margin-bottom: 20px;
}

#AvatarkaLichKab {
  grid-area: Avatarka;
  margin-bottom: 20px;
  align-self: center;
  justify-self: left;
}

#NameLichKab {
  grid-area: NameKabineta;
  margin-bottom: 20px;
  align-self: center;
  text-align: center;
}

#contentforbtnkabinet {
  grid-area: contentforbtnkabinet;
  display: grid;
  grid-template-areas: "FizFace YrFace";
  grid-template-columns: 205px 205px;
  align-items: center;
  justify-self: center;
}

#PersonalFace {
  grid-area: FizFace;
  justify-self: flex-start;
}

#btnPersonalFace {
  width: 130px;
  height: 22px;
  border-radius: 50px;
  border: 0px;
  background-color: #a8b2e3;
  margin-bottom: 4px;
  font-weight: 550;
  color: black;
}

#CompanyFace {
  grid-area: YrFace;
  justify-self: flex-end;
}

#btnCompanyFace {
  width: 130px;
  height: 22px;
  border-radius: 50px;
  border: 0px;
  background-color: #f2f3fc;
  margin-bottom: 4px;
  color: #2f3040;
}

#btnCompanyFace:hover {
  background-color: #a8b2e3;
  font-weight: 550;
  color: black;
}

.BodyFormLichKab {
  grid-area: BodyLichKab;
  display: grid;
  grid-template-areas:
    "FirInpKabinet"
    "SecInpKabinet"
    "ThiInpKabinet"
    "FourInpKabinet"
    "FiveInpKabinet";
  row-gap: 30px;
  margin-bottom: 50px;
}

.inputinLichKab {
  justify-self: center;
}

.textKabinetLich {
  color: #2f3040;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 2px;
}

.inputLichnogioKab {
  padding: 0 20px;
  width: 410px;
  height: 35px;
  border: 1px solid #d9d9d9;
  font-family: "Inter", sans-serif;
  border-radius: 4px;
}

#FirstInputLichKab {
  grid-area: FirInpKabinet;
}

#SecondInputLichKab {
  grid-area: SecInpKabinet;
}

#ThirdInputLichKab {
  grid-area: ThiInpKabinet;
}

#FourthInputLichKab {
  grid-area: FourInpKabinet;
}

#FifthInputLichKab {
  grid-area: FiveInpKabinet;
}

#ContforBtnSaveKabinet {
  grid-area: contsavebtn;
  align-self: center;
  justify-self: center;
}

.btnSaveKainet {
  width: 167px;
  height: 40px;
  border: 0px;
  border-radius: 40px;
  background-color: #cac5fa;
  font-weight: 600;
}

.btnSaveKainet:hover {
  background-color: #8f8bb0;
}
</style>

<template>
    <form class="FormKabinetLich">
      <div class="contformlichKab">
        <div class="HeaderLichkabineta">
          <div id="AvatarkaLichKab">
            <img src="@\assets\Avatarka.svg" alt="Аватар" />
          </div>

          <div id="NameLichKab">
            <p>Александров Александр Александрович</p>
          </div>

          <div id="contentforbtnkabinet">
            <div id="PersonalFace">
              <button id="btnPersonalFace">Физ Лицо</button>
            </div>

            <div id="CompanyFace">
              <button id="btnCompanyFace">Юр Лицо</button>
            </div>
          </div>
        </div>
        <div class="BodyFormLichKab">
          <div class="inputinLichKab" id="FirstInputLichKab">
            <div class="textKabinetLich"><p>Ваш E-Mail</p></div>
            <div>
              <input type="text" placeholder="Ввод" class="inputLichnogioKab" />
            </div>
          </div>

          <div class="inputinLichKab" id="SecondInputLichKab">
            <div class="textKabinetLich"><p>ИНН</p></div>
            <div>
              <input type="text" placeholder="Ввод" class="inputLichnogioKab" />
            </div>
          </div>

          <div class="inputinLichKab" id="ThirdInputLichKab">
            <div class="textKabinetLich"><p>Название организации</p></div>
            <div>
              <input type="text" placeholder="Ввод" class="inputLichnogioKab" />
            </div>
          </div>

          <div class="inputinLichKab" id="FourthInputLichKab">
            <div class="textKabinetLich"><p>Номер</p></div>
            <div>
              <input type="text" placeholder="Ввод" class="inputLichnogioKab" />
            </div>
          </div>

          <div class="inputinLichKab" id="FifthInputLichKab">
            <div class="textKabinetLich"><p>Возраст</p></div>
            <div>
              <input type="text" placeholder="Ввод" class="inputLichnogioKab" />
            </div>
          </div>
        </div>

        <div id="ContforBtnSaveKabinet">
          <Button class="btnSaveKainet">Сохранить</Button>
        </div>
      </div>
    </form>
</template>

<script setup>
// import {ref} from 'vue';
// const PersonalArea = ref([

// ]);
</script>
