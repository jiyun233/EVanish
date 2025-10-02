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
    <div class="hero-images">
      <img src="/siglota.png" alt="Image 1" class="hero-image" />
      <span class="multiply-sign">×</span>
      <img src="/evanish.png" alt="Image 2" class="hero-image" />
    </div>

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
.hero-images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
}
.hero-image {
  filter: invert(1) hue-rotate(180deg);
  max-width: 25%;
  height: auto;
  object-fit: contain;
}
.multiply-sign {
  font-size: 4rem;
  font-weight: bold;

  color: #000;
  user-select: none;
}

:root.dark .hero-image {
  filter: none;
}

:root.dark .multiply-sign {
  color: #555;
}

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