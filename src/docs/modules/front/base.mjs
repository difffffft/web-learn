export const frontBaseBasePath = "/docs/front/base";

const htmlPath = frontBaseBasePath + "/html-";
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

const cssPath = frontBaseBasePath + "/css-";
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

const jsPath = frontBaseBasePath + "/js-";
export const jsDataType = [
  { text: "JS的数据类型", link: `${jsPath}datatype` },
  { text: "堆栈", link: `${jsPath}stack-heap` },
  { text: "Symbol", link: `${jsPath}symbol` },
  { text: "数据类型检测", link: `${jsPath}datatype-check` },
  { text: "数组类型检测", link: `${jsPath}arr-check` },
  { text: "null VS undefined", link: `${jsPath}null-undefined` },
  { text: "instanceof的原理及其实现", link: `${jsPath}instanceof` },
  { text: "js浮点问题", link: `${jsPath}float` },
  { text: "ObjectIs", link: `${jsPath}object-is` },
  { text: "ObjectAssign", link: `${jsPath}object-assign` },
  { text: "ObjectKeys", link: `${jsPath}object-keys` },
  { text: "包装类型", link: `${jsPath}wrapper-objects` },
  { text: "隐式类型转换", link: `${jsPath}implicit-type-conversion` },
];

const jsBasePath = frontBaseBasePath + "/js-base-";
export const jsBase = [
  { text: "new", link: `${jsBasePath}new` },
  { text: "Map和Object的区别", link: `${jsBasePath}map-vs-object` },
  { text: "Map和WeakMap的区别", link: `${jsBasePath}map-vs-weakmap` },
  { text: "yield", link: `${jsBasePath}yield` },
  { text: "异步加载脚本", link: `${jsBasePath}async-script` },

  { text: "数组的原生方法", link: `${jsBasePath}array-method` },
  { text: "类数组", link: `${jsBasePath}like-array` },
  { text: "arguments", link: `${jsBasePath}arguments` },
  { text: "编码", link: `${jsBasePath}unicode` },
  { text: "encodeURI", link: `${jsBasePath}encode-uri` },

  { text: "严格模式", link: `${jsBasePath}use-strict` },

  { text: "原型与原型链接", link: `${jsBasePath}prototype` },
  { text: "this", link: `${jsBasePath}this` },
  { text: "call、apply、bind的区别", link: `${jsBasePath}call-apply-bind` },
  { text: "继承", link: `${jsBasePath}extends` },
]

const jsEs6Path = frontBaseBasePath + "/js-es6-";
export const jsEs6 = [
  { text: "LetConstVar", link: `${jsEs6Path}let-const-var` },
  { text: "箭头函数", link: `${jsEs6Path}arrow-func` },
  { text: "扩展运算符", link: `${jsEs6Path}spread-operator` },
  { text: "解构", link: `${jsEs6Path}deconstruction` },
  { text: "Rest", link: `${jsEs6Path}rest` },
  { text: "模板语法", link: `${jsEs6Path}template-string` },
  { text: "模块化", link: `${jsEs6Path}module` },
]

const jsAsyncPath = frontBaseBasePath + "/js-async-";
export const jsAsync = [
  { text: "回调函数", link: `${jsAsyncPath}callback` },
  { text: "Promise", link: `${jsAsyncPath}promise` },
  { text: "Async/await", link: `${jsAsyncPath}await` },
  { text: "事件循环", link: `${jsAsyncPath}event-loop` },
  { text: "异步错误处理", link: `${jsAsyncPath}error` },
]

const jsClosurePath = frontBaseBasePath + "/js-closure-";
export const jsClosure = [
  { text: "闭包", link: `${jsClosurePath}`.replace('e-', 'e') },
  { text: "作用域", link: `${jsClosurePath}scope` },
  { text: "执行上下文", link: `${jsClosurePath}execution-context` },
]


