<template>
  <div class="home">
    <header></header>
    <main>
      <section class="section1">
        <Chart1/>
      </section>
      <section class="section2 bordered"></section>
      <section class="section3 bordered"></section>
      <section class="section4 bordered"></section>
      <section class="section5 bordered"></section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Chart1 from '../components/Chart1.vue';
import './home.scss'
</script>

<style lang="scss">
//@import "home";
</style>