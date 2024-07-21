在JavaScript中，`let`、`const`和`var`是用来声明变量的关键字，它们在作用域、可变性和声明时机等方面有所不同。让我们逐个来详解它们的特性和用法：

### 1. `var`

`var` 是最早引入的声明变量的关键字，它具有以下特点：
- **函数作用域**: 使用 `var` 声明的变量的作用域是整个函数体内，而不是块级作用域。
- **变量提升 (hoisting)**: 使用 `var` 声明的变量会在其所在函数或全局作用域内提升到顶部，但是赋值不会提升。
- **可重复声明**: 可以多次使用 `var` 声明同一个变量，不会报错，但会覆盖之前的值。

示例：
```javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 输出 20
    }
    console.log(x); // 输出 20
}
```

### 2. `let`

`let` 是在 ES6（ECMAScript 2015）中引入的，修复了 `var` 的一些问题，具有以下特点：
- **块级作用域**: 使用 `let` 声明的变量作用域是最近的块 `{}` 内，包括 `for` 循环、`if` 语句等。
- **暂时性死区 (Temporal Dead Zone, TDZ)**: 在声明之前访问 `let` 变量会抛出 `ReferenceError`，这是为了避免变量在初始化之前被访问。
- **不可重复声明**: 在同一个作用域内，不能用 `let` 重复声明同一个变量。

示例：
```javascript
function example() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // 输出 20
    }
    console.log(x); // 输出 10
}
```

### 3. `const`

`const` 也是在 ES6 中引入的，用于声明常量，具有以下特点：
- **块级作用域**: 与 `let` 一样，使用 `const` 声明的常量也具有块级作用域。
- **必须初始化**: 声明时必须进行初始化赋值，且一旦赋值后不可再修改。
- **不可重复声明**: 在同一个作用域内，不能用 `const` 重复声明同一个变量。
- **对象引用不变**: 使用 `const` 声明的对象引用不可变，但对象本身的属性值是可变的。

示例：
```javascript
function example() {
    const x = 10;
    // x = 20; // TypeError: Assignment to constant variable.
    
    const obj = { name: 'John' };
    obj.name = 'Jane'; // 合法操作，修改对象属性值
    // obj = { name: 'Jane' }; // TypeError: Assignment to constant variable.
}
```

### 总结

- 使用 `let` 和 `const` 可以帮助避免 `var` 带来的一些问题，如变量提升和函数作用域导致的变量泄露问题。
- 推荐优先使用 `const`，除非需要重新赋值，这时可以考虑使用 `let`。
- 在需要支持的环境允许的情况下，尽量避免使用 `var`。

通过合理使用这些关键字，可以更好地管理变量的作用域、可变性和程序的可维护性。