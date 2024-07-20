import { basePath, html, css, jsDataType } from "../../../docs/modules/front.mjs";

export const sidebar = {
  [basePath]: {
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
            items: []
          },
          {
            text: "数据类型",
            items: jsDataType
          },
          {
            text: "ES6",
            items: []
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
};
