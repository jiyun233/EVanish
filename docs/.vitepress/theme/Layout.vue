<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter } = useData();
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";
import HomePage from "../components/HomePage.vue";

const { isDark } = useData();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});

const refreshPage = () => {
  window.location.reload()
}
</script>

<template>
  <DefaultTheme.Layout>

    <template v-if="frontmatter.layout === 'home'" #home-hero-image>
      <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <div style="position: relative; width: 100%; padding-bottom: 56.25%; max-width: 36vw;">
          <iframe src="//player.bilibili.com/player.html?bvid=BV1ggHzzvEYa&autoplay=0"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
            frameborder="no" scrolling="no" allowfullscreen="true"></iframe>
        </div>
      </div>

    </template>

    <template #home-features-after>
      <HomePage />
      <Analytics />
    </template>
  </DefaultTheme.Layout>
  <button @click="refreshPage" class="refresh-btn" :class="{ dark: isDark }" title="刷新页面">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="icon">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.86-3.36L23 10"></path>
      <path d="M20.49 15a9 9 0 0 1-14.86 3.36L1 14"></path>
    </svg>
  </button>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.refresh-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 20px;
  cursor: pointer;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #161616;
  color: white;
}

.refresh-btn.dark {
  background-color: #cacaca;
  color: #1e1e1e;
}

.refresh-btn:hover {
  filter: brightness(1.1);
}

.icon {
  width: 24px;
  height: 24px;
}

.custom-logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
</style>