<style>
.ContentApplicationList {
  margin-bottom: 31px;
  display: grid;
  grid-template-areas:
    "CATitle"
    "App";
  grid-template-rows: 60px;
}

.CurrentApplicationTitle {
  grid-area: CATitle;
  justify-self: center;
}

.Application {
  grid-area: App;
}
.CurrentApplicationform {
  border: 1px solid #d9d9d9;
  justify-self: flex-start;
  min-width: 410px;
  max-width: 410px;
  min-height: 102px;
  max-height: 302px;
  border-radius: 4px 35px 35px 4px;
  display: grid;
  grid-template-areas:
    "CSPng CBTNStrelka"
    "HeaderApp CBTNStrelka";
  background-color: #f2f3fc;
  margin-bottom: 20px;
}

.ContentBTNStrelka {
  grid-area: CBTNStrelka;
  align-self: center;
  justify-self: center;
}

.ContentStatusPng {
  grid-area: CSPng;
  align-self: center;
  height: 25px;
}

.HeaderApplication {
  grid-area: HeaderApp;
}

.StatusSpan {
  margin-left: 4px;
}
.StatusSpanWaitPng {
  margin-left: 20px;
  margin-right: 4px;
  font-size: 35px;
}

.HeaderForStatus {
  margin-left: 20px;
  font-size: 35px;
}

.AAA {
  border: 0px solid #d9d9d9;
  background-color: #f2f3fc;
  border-radius: 51px;
}
</style>

<template>
  <div class="ContentApplicationList">
    <div class="CurrentApplicationTitle">
      <h1>Список обращений</h1>
    </div>

    <div class="Application">
      <form class="CurrentApplicationform">
        <div class="ContentBTNStrelka">
          <button class="AAA">
            <img
              src="@/assets/Group36.svg"
              alt="dddd"
              width="50px"
              height="50px"
            />
          </button>
        </div>

        <div class="ContentStatusPng">
          <span class="StatusSpanWaitPng">
            <img
              src="@/assets/Ellipse2.svg"
              alt="StatusPNG"
              width="12px"
              height="12px"
            />
          </span>
          <span class="StatusSpan">Статус:</span>
          <span class="StatusSpan">В ожидании</span>
        </div>

        <div class="HeaderApplication">
          <h1>
            <span class="HeaderForStatus">{{ fff }}</span>
          </h1>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const fff = this.$store.getters.HEADER;
</script>
