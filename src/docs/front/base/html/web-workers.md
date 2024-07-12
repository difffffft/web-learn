1. **Web Workers是什么？它在HTML5中的作用是什么？**
   - **答案**：Web Workers是HTML5中引入的一项特性，允许在浏览器后台线程中运行JavaScript代码。它的主要作用是提供一种方式，以便在主线程之外执行耗时任务，避免阻塞用户界面，提高用户体验。

2. **Web Workers有哪些类型？**
   - **答案**：Web Workers主要有两种类型：
     - **专用Worker（Dedicated Worker）**：为创建它的页面工作，并且页面的多个脚本可以共享一个Worker。
     - **共享Worker（Shared Worker）**：可以被多个浏览上下文（例如多个标签页）共享。

3. **Web Workers与主线程如何交互？**
   - **答案**：Web Workers与主线程之间的交互主要通过**消息传递**机制完成。使用`postMessage()`方法发送消息，通过`onmessage`事件监听器接收消息。

4. **为什么Web Workers不能直接访问DOM？**
   - **答案**：出于性能和安全性考虑，Web Workers被设计为无法直接访问或修改DOM。因为DOM操作是主线程的特权，直接在Worker中修改DOM可能会导致数据同步问题、竞态条件，甚至UI渲染异常。

5. **如何解决Web Workers不能访问DOM的问题？**
   - **答案**：所有的DOM操作都需要在主线程中进行。开发者可以设计通信策略，通过消息传递机制，将Worker的计算结果传递给主线程，然后在主线程中进行DOM更新。

6. **请给出一个创建和使用Web Worker的示例代码。**

::: code-group

```js [index.js]
// 创建Worker
const worker = new Worker('worker.js');

// 主线程向Worker发送消息
worker.postMessage('Hello Worker');

// 主线程监听来自Worker的消息
worker.onmessage = function(event) {
    console.log('Received from Worker:', event.data);
};
```

```js [worker.js]
// 模拟耗时任务
async function simulateLongRunningTask() {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += i;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // 模拟耗时操作，这里实际不会执行任何有用的工作
    // 如果需要更真实的模拟，可以加入更多的计算逻辑
  }
  return result;
}

// 监听来自主线程的消息
self.addEventListener("message", async function (e) {
  // 假设这个任务需要一些时间来执行
  let startTime = Date.now();
  let result = await simulateLongRunningTask();

  // 向主线程发送结果
  self.postMessage({
    taskId: e.data,
    result: result,
    duration: Date.now() - startTime,
  });
});
```

:::

7. **Web Workers适用于哪些场景？**
   - **答案**：Web Workers适用于以下场景：
     - 处理大量计算和复杂数据解析。
     - 需要长时间运行的任务。
     - 多媒体处理，如音频和视频的解码、编码。
     - 网络请求管理和后台计算。
     - 游戏开发中的渲染和物理模拟。

8. **Web Workers有什么优势和局限？**
   - **答案**：
     - **优势**：
       - 非阻塞式执行任务，提高页面响应速度。
       - 独立上下文，不会因执行长时间任务而影响主线程。
       - 可以利用多核CPU进行计算。
     - **局限**：
       - 无法直接访问DOM。
       - 环境限制，没有完全的JavaScript API支持（例如，某些浏览器API可能无法在Worker中使用）。