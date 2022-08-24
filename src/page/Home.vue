<template>
  <div class="home">
    <header></header>
    <main>
      <section class="section1">
        <Chart1/>
        <Chart2/>
      </section>
      <section class="section2">
        <Chart3/>
        <Chart4/>
      </section>
      <section class="section3 bordered">
        <Chart5/>
      </section>
      <section class="section4">
        <Chart6/>
        <div class="bordered 年龄段">
          <h2>犯罪人员年龄段分布</h2>
          <div class="charts">
            <Chart7/>
            <Chart8/>
            <Chart9/>
          </div>
        </div>
      </section>
      <section class="section5 bordered">
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import './home.scss';
import Chart1 from '../components/Chart1.vue';
import Chart2 from '../components/Chart2.vue';
import Chart3 from '../components/Chart3.vue';
import Chart4 from '../components/Chart4.vue';
import Chart5 from '../components/Chart5.vue';
import Chart6 from '../components/Chart6.vue';
import Chart7 from '../components/Chart7.vue';
import Chart8 from '../components/Chart8.vue';
import Chart9 from '../components/Chart9.vue';
</script>

<style lang="scss">
//@import "home";
</style>