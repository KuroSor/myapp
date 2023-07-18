<style>

*{
margin: 0px;
padding: 0px;
}

.MainHead{
  margin: 0px 5px 0px 5px;
  padding: 0px;
}

</style>

<template>
  <div class = "MainHead">
    <MainHead></MainHead>
  </div>

  <div class = "MainUslugis">
    <MainUslugi></MainUslugi>
  </div>

  <div>
    <MainCompany></MainCompany>
  </div>

  <div>
    <MainDelaVue></MainDelaVue>
  </div>

<div>
  <FBack>

  </FBack>
</div>

<div>
  <LichKab>
  </LichKab>
</div>
<div>
  <KabinetLich></KabinetLich>
</div>
</template>

<script setup>
import MainHead from './components/MainSite/MainHead.vue';
import MainUslugi from './components/MainSite/MainUslugi.vue';
import MainCompany from './components/MainSite/MainCompany.vue';
import MainDelaVue from './components/MainSite/MainDela.vue';
//import FBack from './components/Feedback/FBack.vue';
//import LichKab from './components/PrivateOff/LichKab.vue';
//import KabinetLich from './components/PrivateOff/KabinetLich.vue';

</script>


