<style>
* {
  margin: 0px;
  padding: 0px;
}

</style>

<template>
<Header></Header>
<div class = "app">
<RouterView></RouterView>
</div>
</template>

<script setup>
import Header from '@/components/U-Header.vue';
</script>
