在JavaScript中，延迟加载脚本是一种优化网页加载性能的常见方法。延迟加载意味着脚本在页面其余内容加载完成后再加载和执行，而不会阻塞页面的初次渲染和交互。

### 方法一：使用`defer`属性

`defer`属性是HTML5中引入的一种方式，用于告诉浏览器延迟加载脚本，等到文档解析完毕后再执行。使用方法如下：

```html
<script src="script.js" defer></script>
```

- **优势**：脚本加载过程中不会阻塞文档的解析，可以并行下载其他资源。
- **注意事项**：脚本按照它们在文档中的顺序执行，但是在`DOMContentLoaded`事件之前执行。

### 方法二：动态创建`<script>`元素

通过JavaScript动态创建`<script>`元素并添加到文档中，可以控制脚本加载的时机。

```javascript
var script = document.createElement('script');
script.src = 'script.js';
document.body.appendChild(script);
```

- **优势**：完全控制脚本加载的时机，可以根据需要在合适的时候加载。
- **注意事项**：需要手动管理脚本加载的顺序和依赖关系。

### 方法三：使用`async`属性

`async`属性是另一种脚本加载优化的方式，它告诉浏览器立即下载脚本，但不阻塞页面渲染，下载完成后立即执行。

```html
<script src="script.js" async></script>
```

- **优势**：异步加载，不会阻塞页面的渲染，适合无序执行的脚本。
- **注意事项**：脚本加载完成后会立即执行，不会按照在文档中的顺序执行。

### 方法四：Intersection Observer API

Intersection Observer API 可以用来在元素进入视口时加载脚本，从而延迟加载脚本直到用户需要时才加载。

```javascript
var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var script = document.createElement('script');
      script.src = 'script.js';
      document.body.appendChild(script);
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.getElementById('target-element'));
```

- **优势**：精确控制脚本加载的时机，节省带宽和资源。
- **注意事项**：需要现代浏览器支持。

### 综合考虑

选择哪种方法取决于具体场景和需求：

- 如果脚本需要在文档解析完毕前执行且按顺序执行，使用`defer`。
- 如果脚本可以异步加载且无需按顺序执行，使用`async`。
- 如果需要精确控制加载时机或依赖元素进入视口时加载，可以使用动态创建`<script>`元素或Intersection Observer API。

综合考虑加载顺序、执行时机和页面性能优化，可以选择最合适的延迟加载脚本的方法。