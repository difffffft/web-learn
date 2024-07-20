import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

import { nav } from "./constans/modules/nav.mjs";
import { sidebar } from "./constans/modules/sidebar.mjs";
import { customElements } from "./constans/modules/customElements.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Learn",
  description: "Learn front-end development in depth",
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  head: [
    [
      "link",
      {
        href: "/css/font.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/css/common.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/images/logo-with-shadow.png",
        type: "image/png",
        rel: "icon",
      },
    ],
  ],
  outDir: "../dist",
  appearance: "dark",
  sitemap: {
    // hostname: "http://xxx.com",
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    prev: "false",
    next: "false",
    logo: "/images/vitepress-logo-mini.png",
    editLink: {
      pattern: "https://github.com/difffffft/web-learn/edit/master/docs/:path",
    },
    lastUpdated: true,
    search: {
      provider: "local",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "本篇",
    lastUpdatedText: "最后更新",
    nav,
    sidebar,
    footer: {
      message: 'Released under the <a href="">MIT License</a>.',
      copyright: '<a href="http://chatgpt.com" target="_blank">Chatgpt</a> <a href="https://www.yuque.com/cuggz/interview/hswu8g?theme=light" target="_blank">Interview</a>'
    },
    socialLinks: [
      { icon: "twitter", link: "https://x.com/difffffft" },
      { icon: "github", link: "https://github.com/difffffft" },
    ],
  },
});
