在JavaScript中，判断一个变量是否为数组有几种常见的方式：

1. **Array.isArray() 方法：**
   ```javascript
   const arr = [1, 2, 3];
   if (Array.isArray(arr)) {
       console.log('是数组');
   } else {
       console.log('不是数组');
   }
   ```
   这是最推荐的方法，因为它专门用于检查一个变量是否为数组。

2. **instanceof 操作符：**
   ```javascript
   const arr = [1, 2, 3];
   if (arr instanceof Array) {
       console.log('是数组');
   } else {
       console.log('不是数组');
   }
   ```
   这种方法检查变量是否是某个构造函数的实例，对于大多数情况下的数组检查也是有效的。

3. **Object.prototype.toString.call() 方法：**
   ```javascript
   const arr = [1, 2, 3];
   if (Object.prototype.toString.call(arr) === '[object Array]') {
       console.log('是数组');
   } else {
       console.log('不是数组');
   }
   ```
   这种方法利用了 JavaScript 中每种数据类型的内部特性，虽然比较繁琐，但是也是一种可靠的方法。

这些方法各有特点，但一般来说，推荐使用 `Array.isArray()` 方法来判断数组类型，因为它更为直观和专门。