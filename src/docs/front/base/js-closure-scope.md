JavaScript 的作用域（scope）和作用域链（scope chain）是理解 JavaScript 变量访问规则和闭包机制的关键概念。

### 作用域（Scope）

作用域指的是变量或函数在代码中的可访问范围。JavaScript 中有两种主要的作用域：

1. **全局作用域（Global Scope）**：
   - 全局作用域是最外层的作用域，定义在全局范围内的变量和函数可以被任何地方访问，即在代码的任何位置都可以使用。
   - 在浏览器环境中，全局作用域是 `window` 对象；在 Node.js 环境中，全局作用域是 `global` 对象。

2. **局部作用域（Local Scope）**：
   - 局部作用域是指函数内部的作用域，函数参数和函数内部定义的变量在函数外部是不可见的。
   - JavaScript 使用函数来创建局部作用域，每次调用函数都会创建一个新的局部作用域。

### 作用域链（Scope Chain）

作用域链是在查找变量时内部使用的一种机制，它是由当前执行环境的变量对象和所有外层的父级执行环境的变量对象组成的链式结构。在访问一个变量时，JavaScript 引擎会沿着作用域链逐级查找，直到找到对应的变量或者到达全局作用域。

具体来说，当一个函数被调用时，会创建一个新的执行环境（execution context），每个执行环境都有自己的变量对象（variable object），用于存储在这个执行环境中定义的变量和函数。在执行环境中，还会有一个指向外部执行环境的指针（outer lexical environment），通过这个指针形成了作用域链。作用域链的顶端始终是当前执行环境的变量对象，而链的下一个变量对象来自于外部执行环境，依此类推，直到全局执行环境。

### 闭包（Closure）与作用域链的关系

闭包是指可以访问其外部函数作用域中变量的函数，即使外部函数已经执行完毕。这是因为内部函数在创建时会捕获其所在的外部函数的作用域链，因此即使外部函数执行完毕，内部函数仍然可以访问外部函数的变量。

例如：

```javascript
function outerFunction() {
    var outerVar = "I'm outer";

    function innerFunction() {
        console.log(outerVar); // 可以访问外部函数的变量 outerVar
    }

    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // 输出 "I'm outer"
```

在这个例子中，`innerFunction` 就形成了一个闭包，它可以访问 `outerFunction` 中的 `outerVar` 变量，这是因为 `innerFunction` 在创建时捕获了 `outerFunction` 的作用域链。

综上所述，作用域和作用域链是 JavaScript 中非常重要的概念，对理解变量的可见性和闭包的实现机制至关重要。