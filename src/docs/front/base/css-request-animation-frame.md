`requestAnimationFrame` 是一个由浏览器提供的用于定时循环操作的一个API，它告诉浏览器您希望执行动画，并且请求浏览器在下一次重绘之前调用指定的函数来更新动画。这个方法提供了更加平滑且高效的动画体验，因为它能够与浏览器的重绘机制同步。

以下是 `requestAnimationFrame` 的基本使用方法和特点：

### 使用方法

```javascript
requestAnimationFrame(callback);
```

- `callback`: 下一次重绘之前调用的函数，该函数会接收到一个 `DOMHighResTimeStamp` 参数，表示 `requestAnimationFrame` 开始时的时刻。

### 特点

1. **基于浏览器刷新率**: `requestAnimationFrame` 的调用频率通常是每秒60次，与浏览器屏幕的刷新率保持一致。
2. **回调函数**: 提供一个回调函数，该函数在浏览器下一次重绘之前被调用。
3. **优化性能**: 如果页面不是激活状态，那么动画会被暂停，从而节省CPU和GPU资源。
4. **无固定时间间隔**: 由于是基于浏览器的重绘机制，因此动画不会以固定的时间间隔发生，这样避免了因绘制间隔导致的跳帧现象。
5. **取消动画**: 使用 `cancelAnimationFrame` 可以取消动画，并防止回调函数的执行。

### 示例

```javascript
// 设置动画
function animate(time) {
  // 做一些动画处理
  // ...

  // 请求下一帧动画
  requestAnimationFrame(animate);
}

// 启动动画
requestAnimationFrame(animate);
```

### 兼容性

`requestAnimationFrame` 在大多数现代浏览器中都有支持，对于不支持的浏览器，通常可以使用 `setTimeout` 或 `setInterval` 作为降级方案，但它们无法提供与 `requestAnimationFrame` 相同的性能和流畅性。

`requestAnimationFrame` 对于创建平滑、高效的动画是很有用的工具，特别是在处理网页上的动态内容时。

### 演示

- <a href="/demo/front/base/css-interval-animation-frame.html" target="_blank">setInterval</a>：
- <a href="/demo/front/base/css-request-animation-frame.html" target="_blank">requestAnimationFrame</a>