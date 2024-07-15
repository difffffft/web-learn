以下是一些常见的HTML5新特性：

### 1. 新的语义元素

HTML5 引入了许多新的语义元素，这些元素能更好地描述页面内容的结构：
- `<header>`: 代表文档或节的头部。
- `<nav>`: 定义导航链接的部分。
- `<article>`: 独立的内容块，比如文章或博客。
- `<section>`: 定义文档中的节或区域。
- `<aside>`: 表示与主内容稍微偏离的附加内容，如侧边栏。
- `<footer>`: 定义文档或节的页脚部分。
- `<figure>` 和 `<figcaption>`: 用于标记图像及其说明文字。

### 2. 表单控件的增强

HTML5 对表单控件进行了增强，增加了新的输入类型和属性：
- 新的输入类型：`<input type="email">`、`<input type="date">`、`<input type="range">`、`<input type="number">`、`<input type="color">`、`<input type="tel">` 等。
- 新的表单属性：`placeholder`、`required`、`pattern`、`autocomplete`、`maxlength`、`min`、`max` 等。

### 3. 离线存储

HTML5 提供了本地存储功能，包括：
- **Web Storage**：包括 `localStorage` 和 `sessionStorage`，允许在客户端存储数据。
- **IndexedDB**：一种更强大和灵活的客户端存储机制，允许存储大量数据，并支持事务和索引。

### 4. 多媒体支持

HTML5 增强了对多媒体的支持：
- `<audio>`: 用于嵌入音频内容。
- `<video>`: 用于嵌入视频内容。
- `<source>`: 用于指定多媒体资源的不同格式。

### 5. Canvas 元素

`<canvas>` 元素用于绘制图形，通过 JavaScript 动态生成图像，如游戏图形和复杂图表。

### 6. 地理定位

HTML5 引入了 Geolocation API，允许网页应用获取用户的地理位置：
- `navigator.geolocation.getCurrentPosition()`: 获取用户当前位置。
- `navigator.geolocation.watchPosition()`: 监听用户位置的变化。

### 7. 音频和视频播放控制

- HTML5 允许通过 JavaScript 对 `<audio>` 和 `<video>` 元素进行编程控制，如播放、暂停、调整音量等。

### 8. 语义化文档

- HTML5 的文档结构更具语义，使得开发者和搜索引擎能够更好地理解页面内容的结构和含义。

### 9. Web Workers

Web Workers 允许在后台线程中运行脚本，避免了阻塞主线程，提升了性能和响应速度。

### 10. WebSockets

WebSockets 提供了全双工通信通道，允许客户端和服务器之间进行实时数据传输。

### 11. 拖放支持

HTML5 支持本地拖放操作（Drag-and-Drop API），允许用户在浏览器中拖动和放置内容。

### 12. 新的 API 和接口

- **Offline API**: 支持离线网页应用的缓存。
- **History API**: 提供了更灵活的浏览器历史记录操作能力。
- **Push API**: 支持在浏览器后台推送通知。