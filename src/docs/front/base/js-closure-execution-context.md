执行上下文（Execution Context）在 JavaScript 中是一个关键概念，它定义了代码执行时的环境及其行为。JavaScript 引擎在执行代码时会创建执行上下文，并按照一定规则对它们进行管理和执行。下面详细解释执行上下文的概念和类型。

### 执行上下文的类型

在 JavaScript 中，有三种执行上下文类型：

1. **全局执行上下文（Global Execution Context）**：
   - 当 JavaScript 代码在全局作用域中执行时，会创建全局执行上下文。
   - 在整个页面生命周期中，只会有一个全局执行上下文。
   - 全局执行上下文的变量对象是全局对象（如 `window` 对象在浏览器中）。

2. **函数执行上下文（Function Execution Context）**：
   - 每当一个函数被调用时，都会创建一个新的函数执行上下文。
   - 每个函数执行上下文都有自己的作用域，用于存储局部变量和参数。
   - 每次函数执行时，都会创建一个新的函数执行上下文。

3. **评估/调用执行上下文（Eval/Code Execution Context）**：
   - 在 `eval` 函数或 `Function` 构造函数中执行的代码会在其自己的执行上下文中运行。
   - `eval` 函数会在调用它的上下文中创建一个新的作用域（非严格模式下）。
   - 使用 `Function` 构造函数创建的函数不会在当前的执行上下文中创建新的作用域。

### 执行上下文的创建和执行

执行上下文的创建发生在以下几种情况下：

- **全局执行上下文**：当页面加载时，会创建全局执行上下文，它会初始化全局对象、this 指向全局对象，并为全局作用域中的函数和变量创建作用域链。
  
- **函数执行上下文**：每当函数被调用时，会创建一个新的函数执行上下文。这个过程包括：
  - 创建变量对象（Variable Object，VO），包括函数的参数、内部声明的变量等。
  - 确定 `this` 的指向。
  - 创建作用域链（Scope Chain），用于解析变量和函数标识符。
  - 初始化变量的值，进行函数声明（function declaration）和变量声明（var 声明）的预解析（hoisting）。

### 执行上下文的执行

执行上下文的执行过程大致如下：

1. **创建阶段**：
   - 创建变量对象（VO）。
   - 确定 `this` 的指向。
   - 创建作用域链（Scope Chain）。

2. **代码执行阶段**：
   - 执行代码，按照作用域链来解析变量，执行函数，处理变量赋值等操作。

### 执行上下文的销毁

当代码执行完毕或者函数执行完毕时，其对应的执行上下文会被销毁，释放内存空间。全局执行上下文在页面关闭时被销毁。

### 总结

执行上下文是 JavaScript 中管理执行环境的关键机制，每个执行上下文都有自己的变量对象、作用域链和 this 指向，通过这些机制可以保证代码的执行顺利进行，并且有效地管理变量和函数的作用域。理解执行上下文对于深入理解 JavaScript 的运行机制和调试代码非常重要。