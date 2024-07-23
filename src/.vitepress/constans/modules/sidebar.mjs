import { frontBaseBasePath, html, css, jsBase, jsDataType, jsEs6, jsAsync, jsClosure } from "../../../docs/modules/front/base.mjs";
import { frontBrowserBasePath, frontBrowserDomDocList } from "../../../docs/modules/front/browser.mjs";
import { frontFrameworksBasePath, frontFrameworksVueDocList, frontFrameworksReactDocList, frontFrameworksNuxtDocList, frontFrameworksNextDocList, frontFrameworksTailwindDocList } from "../../../docs/modules/front/frameworks.mjs";

export const sidebar = {
  [frontBaseBasePath]: {
    items: [
      {
        text: "html",
        items: html,
      },
      {
        text: "css",
        items: css,
      },
      {
        text: "javascript",
        items: [
          {
            text: "语法和基础特性",
            items: jsBase
          },
          {
            text: "数据类型",
            items: jsDataType
          },
          {
            text: "ES6",
            items: jsEs6
          },
          {
            text: "作用域和闭包",
            items: jsClosure
          },
          {
            text: "异步编程",
            items: jsAsync
          },
        ],
      },
    ],
  },
  [frontBrowserBasePath]: {
    items: [
      {
        text: "基础",
        items: frontBrowserDomDocList,
      },
    ]
  },
  [frontFrameworksBasePath]: {
    items: [
      {
        text: "Vue",
        items: frontFrameworksVueDocList,
      },
      {
        text: "React",
        items: frontFrameworksReactDocList,
      },
      {
        text: "NuxtJs",
        items: frontFrameworksNuxtDocList,
      },
      {
        text: "NextJs",
        items: frontFrameworksNextDocList,
      },
      {
        text: "TailwindCss",
        items: frontFrameworksTailwindDocList,
      },
    ]
  }
};
