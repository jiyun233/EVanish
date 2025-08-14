<script setup lang="ts">
import { VPFeatures } from 'vitepress/theme'
import { computed, shallowRef } from 'vue'

const events = computed(() => [
  {
    title: '湮灭余韵E-Aftertone音游专区1.0',
    details: "比赛: 湮玄杯AEB 3.0",
    link: "/events/race3"
  },
  {
    title: '电波湮灭E-Vanish音游专区3.0',
    details: "比赛: 湮玄杯AEB 4.0",
    link: "/events/race4"
  },
])
</script>

<template>
  <div flex="~ col wrap" mt8 items-center>
    <h2 class="out-team-title" text="center gray xl" mt-11 mb-4 pb-2>
      {{ '计划中的项目' }}
    </h2>
    <h2 class="out-team-text" text="center gray xl" mt-11 mb-4 pb-2>
      {{ 'Recent Events' }}
    </h2>
    <VPFeatures class="w-full px-4" size="small" :features="events" />
  </div>
</template>

<style>
.out-team-title {
  font-size: larger;
  text-align: center;
  margin: 50px 20px 5px;
  padding: 20 20 20;
}

.out-team-text {
  font-size: small;
  text-align: center;
  margin: 5px 20px 20px;
  padding: 20 20 20;
}
</style>