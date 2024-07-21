`Symbol.iterator` 是 ES6 引入的一个新的内置 Symbol 值，用于定义对象的默认迭代器。它是一种约定，如果一个对象具有 `Symbol.iterator` 方法，那么该对象就被认为是可迭代的，可以通过 `for...of` 循环或者使用扩展运算符 `...` 进行遍历。

### 使用方法

1. **基本语法**

   ```javascript
   let myIterable = {
       [Symbol.iterator]: function* () {
           yield 1;
           yield 2;
           yield 3;
       }
   };
   ```

   在这个例子中，`myIterable` 是一个普通对象，它具有一个 `Symbol.iterator` 方法，这个方法是一个生成器函数，使用 `yield` 关键字生成一系列值。

2. **可迭代对象**

   通过 `Symbol.iterator`，对象可以被认为是可迭代的。例如：

   ```javascript
   let myIterable = {
       [Symbol.iterator]: function* () {
           yield 1;
           yield 2;
           yield 3;
       }
   };

   // 使用 for...of 循环迭代
   for (let value of myIterable) {
       console.log(value); // 输出 1, 2, 3
   }

   // 使用扩展运算符进行展开
   let arr = [...myIterable];
   console.log(arr); // 输出 [1, 2, 3]
   ```

   在这个例子中，`myIterable` 对象通过实现 `Symbol.iterator` 方法，可以被 `for...of` 循环和扩展运算符展开。

3. **内置数据结构的默认迭代器**

   ES6 中的内置数据结构如 `Array`、`Map`、`Set` 等都已经实现了 `Symbol.iterator` 方法，因此它们都是可迭代的。例如：

   ```javascript
   let arr = [1, 2, 3];
   let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
   let set = new Set([1, 2, 3]);

   // 使用 for...of 循环迭代数组
   for (let value of arr) {
       console.log(value); // 输出 1, 2, 3
   }

   // 使用 for...of 循环迭代 Map
   for (let [key, value] of map) {
       console.log(key, value); // 输出 'a' 1, 'b' 2, 'c' 3
   }

   // 使用 for...of 循环迭代 Set
   for (let value of set) {
       console.log(value); // 输出 1, 2, 3
   }
   ```

   这些数据结构都实现了 `Symbol.iterator` 方法，因此可以直接用于 `for...of` 循环。

### 自定义迭代器

除了内置数据结构，开发者也可以为自定义对象实现 `Symbol.iterator` 方法，从而使得这些对象可以被 `for...of` 循环遍历或者使用扩展运算符展开。这种方式使得 JavaScript 中的迭代变得统一和灵活，同时也增加了语言的表现力和功能性。

总结来说，`Symbol.iterator` 是 ES6 中用于定义对象默认迭代器的重要特性，通过它可以让对象支持 `for...of` 循环和扩展运算符。