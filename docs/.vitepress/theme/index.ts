// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
// import './custom.css'

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout);
  },
} satisfies Theme;