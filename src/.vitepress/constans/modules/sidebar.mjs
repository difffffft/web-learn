import { basePath, html, css } from "../../../docs/modules/front.mjs";

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
        items: [],
      },
    ],
  },
};
