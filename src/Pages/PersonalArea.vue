<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

.ContentPersonalArea {
  height: 923px;
  display: grid;
  grid-template-areas:
    "PAHeader PAHeader"
    "PAData PRAppList"
    "PAFooter PAFooter";
  grid-template-columns: 0.44fr 1fr;
  grid-template-rows: 80px;
}

.PersonalAreaData {
  grid-area: PAData;
}

.PersonalAreaAppList {
  grid-area: PRAppList;
}

.PersonalAreaFooter {
  grid-area: PAFooter;
}
</style>

<template>
  <div class="ContentPersonalArea">
    <!-- Личный кабинет -->
    <div class="PersonalAreaData">
      <DataPersonalFiz></DataPersonalFiz>
    </div>

    <!-- Обращения пользователя -->
    <div class="PersonalAreaAppList">
      <AppList></AppList>
    </div>

    <!-- Футер -->
    <div class="PersonalAreaFooter">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Footer from "@/components/U-Footer.vue";
import DataPersonalFiz from "@/components/DataPersonalAreaFiz.vue";
import AppList from "@/components/ApplicationList.vue";
</script>
