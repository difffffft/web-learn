import { html } from "../../../docs/modules/front.mjs";

export const nav = [
  {
    text: "知识",
    activeMatch: "/docs/front/(.*)",
    items: [
      {
        text: "基础",
        link: html[0].link,
        activeMatch: "/docs/front/base/(.*)",
      },
      {
        text: "框架",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "库",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "性能优化",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "工程化",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "原理",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
    ],
  },
  { text: "教程", link: "https://www.aliyundrive.com/s/xatt4pVJFDp" },
  {
    text: "面试",
    link: "https://www.yuque.com/cuggz/interview/hswu8g?theme=light",
  },
];
