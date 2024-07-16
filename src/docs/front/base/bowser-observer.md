## 什么是IntersectionObserver

IntersectionObserver 是一个强大的Web API，它允许你异步监测一个元素与其祖先或顶级文档视窗的交叉状态。简单地说，你可以使用它来确定一个元素是否在视窗中可见，或者它可见的程度。这对于性能优化特别有用，因为它可以让你仅在元素实际可见时才加载它们，从而减少不必要的资源加载和提高页面的加载速度。

使用 IntersectionObserver 可以减少页面重绘和重排的次数，因为它异步地处理交叉状态的变化，而不是通过监听诸如 scroll 事件这样的可能导致性能问题的方法。

## 它可以做什么

- 图片懒加载：只有在图片进入视窗时才加载它们。
- 内容无限滚动：当用户滚动到页面底部附近时，加载更多内容。
- 数据埋点：当用户真正看到某个元素时，触发数据收集。
- 加载特效：当某个元素出现时，宽度逐渐增加

## 兼容性

IntersectionObserver 是现代浏览器的一个特性，大多数现代浏览器都提供了支持，但在使用之前，你应该检查一下目标用户群使用的浏览器是否兼容。通过深入理解 IntersectionObserver 的这些方面，你可以更有效地利用这个API来提高你的Web应用的性能和用户体验。

## 观察的阈值

- threshold 是 IntersectionObserver API 的一个关键配置选项，它定义了交叉观察者触发回调的具体交叉比例点。
- 阈值的计算通常取决于你希望观察的目标元素在何种情况下被视为“可见”或“不可见”。例如，如果想要在元素完全进入视口时得到通知，可以设置阈值为 1.0
- 如果希望元素部分可见时就触发回调，可以根据需要的可见性百分比来设置阈值。例如，如果元素至少有 50% 可见时才关心，那么可以设置阈值为 0.5。

## Demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        padding: 100vh 0;
      }

      .img-container {
        position: relative;
      }

      .hr1 {
        width: 100%;
        height: 1px;
        background-color: red;
        position: absolute;
        top: 10%;
        left: 0;
      }
      .hr2 {
        width: 100%;
        height: 1px;
        background-color: red;
        position: absolute;
        bottom: 10%;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div class="img-container">
      <img
        src="https://images.unsplash.com/photo-1632994577262-9feb268cc662?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div class="hr1"></div>
      <div class="hr2"></div>
    </div>

    <script>
      const observerOptions = {
        threshold: 0.1,
      };

      // 观察回调
      const observerCallback = (entris, observer) => {
        entris.forEach((entry) => {
          // 检查目标元素是否可见
          if (entry.isIntersecting) {
            // 对可见元素执行操作
            console.log("看见了...");
          }
        });
      };

      // 观察对象
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // 开始观察
      observer.observe(document.querySelector(".img-container"));
    </script>
  </body>
</html>
```

## 其他

在前端开发中，除了 `IntersectionObserver`，还有其他几种 Observer API 可用于监听和响应 DOM 的变化，以下是几种常用的：

1. **MutationObserver**：   - `MutationObserver` 用于监听 DOM 树的变化，可以观察到节点属性、文本内容、子节点等的变动。

2. **PerformanceObserver**：   - `PerformanceObserver` 用于监听性能度量事件，可以获取到浏览器的性能数据，比如 navigation、resource、mark 和 measure 事件。

3. **ResizeObserver**：   - `ResizeObserver` 用于监听元素大小的变化，当元素的尺寸发生变化时，会触发回调函数。

4. **ClipboardObserver**：   - 虽然不是一个标准的 Observer API，但可以通过监听剪贴板事件（如 `copy`、`cut` 和 `paste`）来响应剪贴板操作的变化。

以下是对这些 Observer 的简要说明：

- **MutationObserver** 示例代码：

```js
const observer = new MutationObserver((mutationsList, observer) => {
  // 使用mutationsList处理DOM变化
});
observer.observe(document.body, { childList: true, subtree: true });
```
- **PerformanceObserver** 示例代码： 

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  // 处理性能条目
});
observer.observe({ type: 'navigation', buffered: true });
```

- **ResizeObserver** 示例代码： 

```js
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    // 获取元素和它的尺寸
  }
});
observer.observe(document.querySelector('#myElement'));
```

这些 Observer API 非常有用，因为它们允许开发者异步地、高效地监听DOM变化，而无需在主事件循环中不断轮询DOM状态。这有助于减少性能开销，并使得前端应用更加高效。