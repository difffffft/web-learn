在ES6中，rest参数是一种处理函数参数的方式，它允许你以更灵活的方式处理传递给函数的参数列表。具体来说，rest参数允许将一个不定数量的参数表示为一个数组。

### 基本语法

在函数定义中，使用三个点（...）来表示rest参数，通常放在参数列表的最后：

```javascript
function functionName(param1, param2, ...restParams) {
  // 函数体
}
```

在这个例子中：
- `param1`和`param2`是常规的函数参数，可以通过位置传递值。
- `...restParams`表示剩余的参数，它会将传递给函数的多余参数收集到一个数组中。

### 使用场景

1. **处理变长参数**：
   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, num) => acc + num, 0);
   }

   console.log(sum(1, 2));        // 输出 3
   console.log(sum(1, 2, 3, 4));  // 输出 10
   ```

   在这个例子中，`sum`函数可以接受任意数量的参数，并计算它们的总和。

2. **替代arguments对象**：
   在ES6之前，可以使用`arguments`对象来处理不定数量的参数。但是，`arguments`是一个类数组对象，不方便使用数组的方法。使用rest参数则可以更自然地将参数收集为一个真正的数组。

   ```javascript
   function multiply(multiplier, ...nums) {
     return nums.map(num => num * multiplier);
   }

   console.log(multiply(2, 1, 2, 3));  // 输出 [2, 4, 6]
   ```

### 注意事项

- **rest参数必须是最后一个参数**：在函数声明中，rest参数必须放在参数列表的最后，因为它收集函数调用时传递的所有剩余参数。
  
- **不允许多个rest参数**：每个函数只能有一个rest参数，因为它负责收集所有剩余的参数。

### 总结

ES6中的rest参数为处理函数中不定数量的参数提供了一种方便且强大的方式，它使得函数在设计时可以更加灵活，不需要预先定义固定数量的参数，而是可以动态地接收多个参数并以数组的形式进行处理。