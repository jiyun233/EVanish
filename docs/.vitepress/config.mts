import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "E-Vanish",
  description: "A MUG studio project offical website",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Products",
        items: [
          { text: "湮灭余韵 E-Aftertone", link: "/aftertone" },
          { text: "余波造物 E-Craft", link: "/craft" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Products",
        items: [
          { text: "湮灭余韵 E-Aftertone", link: "/aftertone" },
          { text: "余波造物 E-Craft", link: "/craft" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jiyun233" }],
    footer: {
      message: "Copyright © 2024 - 2025 E-Vanish, E-Aftertone",
      copyright: "E-Craft All Rights Reserved.",
    },
  },
});
