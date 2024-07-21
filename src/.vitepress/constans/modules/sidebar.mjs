import { frontBaseBasePath, html, css, jsBase, jsDataType, jsEs6 } from "../../../docs/modules/front/base.mjs";
import { frontBrowserBasePath, frontBrowserDomDocList } from "../../../docs/modules/front/browser.mjs";

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
            items: []
          },
          {
            text: "面向对象编程",
            items: []
          },
          {
            text: "异步编程",
            items: []
          },
          {
            text: "函数式编程",
            items: []
          },
          {
            text: "模块化",
            items: []
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
  }
};
