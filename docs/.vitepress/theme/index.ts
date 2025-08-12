// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import { inject } from "@vercel/analytics";
import DefaultTheme from "vitepress/theme";
import "./style.css";
// import './custom.css'

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: () => h(Layout),
  enhanceApp({ router }) {
    if (typeof window !== "undefined") {
      inject();
    }
  }
} satisfies Theme;
