<template>
  <div class="home">
    <header></header>
    <main>
      <section class="section1">
        <Chart1/>
        <Chart2/>
      </section>
      <section class="section2 bordered"></section>
      <section class="section3 bordered"></section>
      <section class="section4 bordered"></section>
      <section class="section5 bordered"></section>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import './home.scss';
import Chart1 from '../components/Chart1.vue';
import Chart2 from '../components/Chart2.vue';
</script>

<style lang="scss">
//@import "home";
</style>