在JavaScript中，`0.1 + 0.2` 不等于 `0.3` 的原因是由于浮点数精度问题造成的。这是因为数字在计算机内部以二进制形式表示，有时候无法精确地表示十进制小数。

要让它们在JavaScript中相等，可以使用一些技巧来处理浮点数精度问题。常见的方法包括：

1. **四舍五入到指定精度**：
   ```javascript
   function areEqual(num1, num2) {
       return Math.abs(num1 - num2) < Number.EPSILON;
   }
   
   console.log(areEqual(0.1 + 0.2, 0.3));  // true
   ```
   这里利用了 `Number.EPSILON`，它表示大于1的最小浮点数，用来比较两个浮点数是否相近。

2. **使用小数点固定精度**：
   ```javascript
   function roundToFixed(num, decimalPlaces) {
       var multiplier = Math.pow(10, decimalPlaces);
       return Math.round(num * multiplier) / multiplier;
   }
   
   console.log(roundToFixed(0.1 + 0.2, 10) === roundToFixed(0.3, 10));  // true
   ```
   这种方法通过将浮点数四舍五入到固定的小数位数来比较它们。

3. **使用库函数**：
   如果需要更复杂的浮点数操作，可以考虑使用像 `decimal.js` 或 `big.js` 这样的第三方库，它们提供了更精确的浮点数计算。

总结：在JavaScript中，由于浮点数精度问题，直接比较两个浮点数是否相等通常不可靠。使用上述方法可以规避这些问题，确保正确的比较和计算结果。