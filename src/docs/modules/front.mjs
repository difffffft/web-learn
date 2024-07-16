export const basePath = "/docs/front/base";

const htmlPath = basePath + "/html-";
export const html = [
  { text: "文档声明", link: `${htmlPath}doctype` },
  { text: "基础标签", link: `${htmlPath}base-tag` },
  { text: "视口设置", link: `${htmlPath}viewport` },
  { text: "爬虫协议", link: `${htmlPath}robots` },
  { text: "语义化", link: `${htmlPath}semanticize` },
  { text: "语义化标签", link: `${htmlPath}semantic-tagging` },
  { text: "新特性", link: `${htmlPath}new-feature` },
  { text: "web-workers", link: `${htmlPath}web-workers` },
  { text: "拖拽", link: `${htmlPath}drag-and-drop` },
];

const cssPath = basePath + "/css-";
export const css = [
  { text: "选择器及其优先级", link: `${cssPath}selector` },
  { text: "可继承属性", link: `${cssPath}can-extends-attr` },
  { text: "文档流", link: `${cssPath}document-flow` },
  { text: "BFC", link: `${cssPath}bfc` },
  { text: "display", link: `${cssPath}display` },
  { text: "隐藏元素", link: `${cssPath}hidden-ele` },
  { text: "@import", link: `${cssPath}import` },
  {
    text: "transition VS animation",
    link: `${cssPath}transition-vs-animation`,
  },
  { text: "伪类和伪元素", link: `${cssPath}pseudo` },
  { text: "requestAnimationFrame ", link: `${cssPath}request-animation-frame` },
  { text: "盒模型 ", link: `${cssPath}box-model` },
  { text: "translate VS position", link: `${cssPath}translate-vs-position` },
  { text: "CSS3的新特性", link: `${cssPath}three-new-feature` },
  { text: "雪碧图", link: `${cssPath}sprites` },
  { text: "逻辑/物理像素", link: `${cssPath}px` },
  { text: "line-height", link: `${cssPath}line-height` },
  { text: "CSS预处理器", link: `${cssPath}sass` },
  { text: "文本超出隐藏", link: `${cssPath}text-overflow` },
  { text: "媒体查询", link: `${cssPath}media-queries` },
  { text: "CSS工程化", link: `${cssPath}engineering` },
  { text: "常见的CSS布局单位", link: `${cssPath}layout-unit` },
  { text: "水平垂直居中的实现", link: `${cssPath}center` },
  { text: "flex", link: `${cssPath}flex` },
  { text: "flex:1", link: `${cssPath}flex-one` },
  { text: "Sticky粘性定位", link: `${cssPath}sticky` },
];

const jsPath = basePath + "/js-";
export const js = [
  { text: "JS的数据类型", link: `${jsPath}datatype` },
  { text: "堆栈", link: `${jsPath}stack-heap` },
  { text: "Symbol", link: `${jsPath}symbol` },
  { text: "数据类型检测", link: `${jsPath}datatype-check` },
  { text: "null VS undefined", link: `${jsPath}null-undefined` },
];
