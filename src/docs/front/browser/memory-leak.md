JavaScript 中可能导致内存泄漏的情况有几种，主要包括以下几点：

1. **未正确管理事件监听器**：
   - 如果在 DOM 元素上添加了事件监听器，但忘记在不需要时将其移除，这些事件监听器会阻止相关 DOM 节点被垃圾回收，导致内存泄漏。

   ```javascript
   // 错误的例子
   element.addEventListener('click', handleClick);

   // 没有移除事件监听器
   ```

2. **闭包**：
   - 闭包可以使得函数保持对其作用域外部变量的引用，如果闭包中保持了大量数据或者持久性的引用，而这些数据不再需要，就会导致内存泄漏。

   ```javascript
   // 闭包导致的内存泄漏例子
   function createClosure() {
       const bigObject = new Array(10000).fill({});
       return function() {
           console.log(bigObject.length);
       };
   }

   const closure = createClosure();
   // closure 持续保持对 bigObject 的引用，导致内存泄漏
   ```

3. **定时器未清理**：
   - 如果设置了循环定时器或者延时操作（`setTimeout`、`setInterval`），但忘记在不需要时清除它们，会导致函数或对象继续存在并被引用，无法被垃圾回收。

   ```javascript
   // 定时器未清理导致的内存泄漏例子
   let interval = setInterval(() => {
       // do something
   }, 1000);

   // 如果没有 clearInterval(interval)，定时器会一直存在
   ```

4. **DOM 引用**：
   - 保持对 DOM 元素的引用，而这些元素不再需要时，也会导致内存泄漏。尤其是在删除元素时未清除对该元素的引用。

   ```javascript
   // DOM 引用导致的内存泄漏例子
   let element = document.getElementById('myElement');
   // element 保持了对 DOM 元素的引用，即使元素从 DOM 中删除也不会被垃圾回收
   ```

5. **大对象或数据结构的不合理使用**：
   - 如果创建了大型对象或数据结构（例如大数组、大型缓存），但在不再需要时未及时释放，也会造成内存泄漏。

   ```javascript
   // 大对象的不合理使用导致内存泄漏例子
   let bigData = new Array(1000000).fill({});
   // bigData 持续占用大量内存，如果不需要了应该释放
   ```

在 JavaScript 中，避免内存泄漏的关键是及时清理不再需要的引用、事件监听器和定时器等资源。通常使用合理的内存管理策略，如避免循环引用、使用事件委托而不是给每个元素都绑定事件等，可以有效减少内存泄漏的发生。