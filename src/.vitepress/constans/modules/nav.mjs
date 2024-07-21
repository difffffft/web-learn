import { frontBaseBasePath, html } from "../../../docs/modules/front/base.mjs";
import { frontBrowserBasePath, frontBrowserDomDocList } from "../../../docs/modules/front/browser.mjs";

export const nav = [
  {
    text: "深度",
    activeMatch: "/docs/front/(.*)",
    items: [
      {
        text: "基础",
        items: [
          {
            text: "基础",
            link: html[0].link,
            activeMatch: `${frontBaseBasePath}/(.*)`,
          },
          {
            text: "浏览器",
            link: frontBrowserDomDocList[0].link,
            activeMatch: `${frontBrowserBasePath}/(.*)`,
          },
        ]
      },

      {
        text: "框架和库",
        items: [
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
        ]
      },


      {
        text: "性能优化",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "安全性",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },
      {
        text: "工程化",
        activeMatch: "/docs/front/k/(.*)",
        link: "/1",
      },

      {
        text: "其他",
        items: [
          {
            text: "代码质量",
            activeMatch: "/docs/front/k/(.*)",
            link: "/1",
          },
          {
            text: "构建工具",
            activeMatch: "/docs/front/k/(.*)",
            link: "/1",
          },
          {
            text: "源码",
            activeMatch: "/docs/front/k/(.*)",
            link: "/1",
          },
        ]
      },
    ],
  },
  {
    text: "广度",
    items: [
      {
        text: "数据库",
        items: [
          {
            text: "Mysql",
            link: "/t",
          },
          {
            text: "Redis",
            link: "/t",
          },
          {
            text: "MongoDB",
            link: "/t",
          }
        ]
      },
      {
        text: "后端框架",
        items: [
          {
            text: "SpringBoot",
            link: "/t",
          },
          {
            text: "SpringCloud",
            link: "/t",
          },
        ]
      },
      {
        text: "中间件",
        items: [
          {
            text: "Spring Security",
            link: "/t",
          },
          {
            text: "RabbitMQ",
            link: "/t",
          },
          {
            text: "Kafka",
            link: "/t",
          },
          {
            text: "Elasticsearch",
            link: "/t",
          },
          {
            text: "Prometheus",
            link: "/t",
          },
        ]
      },
    ]
  },
  {
    text: "算法",
    items: [
      {
        text: "算法",
        link: "/t",
      },
      {
        text: "数据结构",
        link: "/t",
      }
    ]
  },
  {
    text: "其他",
    items: [
      {
        text: "部署运维",
        items: [
          {
            text: "Linux",
            link: "/t",
          },
          {
            text: "Nginx",
            link: "/t",
          },
          {
            text: "Docker",
            link: "/t",
          },
          {
            text: "Kubernetes",
            link: "/t",
          },
        ]
      },
      {
        text: "Git",
        link: "/t",
      },
      {
        text: "CI/CD",
        link: "/t",
      },
      {
        text: "Code Review",
        link: "/t",
      },
    ]
  },
];
