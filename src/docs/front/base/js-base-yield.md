在JavaScript中，`yield`关键字通常与生成器函数（Generator functions）一起使用。生成器函数是一种特殊类型的函数，可以在执行过程中产生多个值。`yield`关键字用于定义生成器函数中的一个断点，表示生成器函数暂停执行，并可以将一个值返回给生成器的调用者。

### 基本语法和用法

1. **生成器函数的定义**

   使用 `function*` 定义生成器函数：
   ```javascript
   function* generatorFunction() {
       // generator function body
   }
   ```

2. **yield 关键字**

   在生成器函数内部使用 `yield` 关键字：
   ```javascript
   function* generatorFunction() {
       yield 1;
       yield 2;
       yield 3;
   }
   ```

   在上面的例子中，`generatorFunction` 是一个生成器函数，它可以依次生成数值 `1`、`2` 和 `3`。

3. **生成器的调用和迭代**

   当生成器函数被调用时，它并不立即执行，而是返回一个生成器对象。可以使用 `next()` 方法来逐步执行生成器函数内部的代码，每次调用 `next()` 方法都会使生成器函数继续执行，直到遇到下一个 `yield` 表达式或者函数结束。

   ```javascript
   const gen = generatorFunction();
   console.log(gen.next()); // { value: 1, done: false }
   console.log(gen.next()); // { value: 2, done: false }
   console.log(gen.next()); // { value: 3, done: false }
   console.log(gen.next()); // { value: undefined, done: true }
   ```

   在上面的例子中，`gen.next()` 调用会依次返回生成器函数中 `yield` 表达式的值，直到生成器函数执行完毕（done 为 `true`）。

4. **传递参数给 yield**

   生成器函数可以接收参数，并且可以通过 `next(value)` 方法将值传递给 `yield` 表达式：

   ```javascript
   function* generatorFunction() {
       const received = yield 'Hello';
       yield received;
   }
   
   const gen = generatorFunction();
   console.log(gen.next());        // { value: 'Hello', done: false }
   console.log(gen.next('World')); // { value: 'World', done: false }
   ```

   在这个例子中，第一次调用 `gen.next()` 返回 `{ value: 'Hello', done: false }`，然后调用 `gen.next('World')` 时，将 `'World'` 作为 `yield 'Hello'` 的结果传递给了 `received`，因此返回 `{ value: 'World', done: false }`。

### 总结

`yield` 关键字允许生成器函数在执行过程中暂停，并且通过 `next()` 方法可以从生成器函数内部接收和发送值。这种能力使得生成器函数在处理需要逐步执行或需要延迟获取值的情况下特别有用，比如异步操作的串行执行、迭代大量数据等场景。