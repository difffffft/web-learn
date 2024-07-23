在JavaScript中，`call`、`apply`和`bind`都是用来改变函数执行上下文（即`this`的指向）的方法。它们在使用方式和功能上有所不同。

### 1. `call` 方法

`call` 方法允许你调用一个具有指定`this`值和参数的函数。其语法如下：

```javascript
function.call(thisArg, arg1, arg2, ...)
```

- `function` 是要调用的函数。
- `thisArg` 是指定的`this`值，即函数在执行时的上下文对象。
- `arg1, arg2, ...` 是函数调用时传递给函数的参数列表。

**示例：**

```javascript
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Mary",
  lastName: "Smith"
};

// 使用 call 方法调用 person 对象的 fullName 方法，将 this 指向 person1
const fullName1 = person.fullName.call(person1); // 输出 "John Doe"

// 使用 call 方法调用 person 对象的 fullName 方法，将 this 指向 person2
const fullName2 = person.fullName.call(person2); // 输出 "Mary Smith"
```

### 2. `apply` 方法

`apply` 方法与 `call` 方法类似，它也用于调用函数并设置函数体内`this`对象的值。不同之处在于，`apply` 接收一个包含多个参数的数组作为函数执行时的参数。其语法如下：

```javascript
function.apply(thisArg, [argsArray])
```

- `function` 是要调用的函数。
- `thisArg` 是指定的`this`值，即函数在执行时的上下文对象。
- `argsArray` 是一个数组，其中的元素将作为参数传递给函数。

**示例：**

```javascript
const numbers = [5, 6, 2, 3, 7];

// 使用 Math.max 方法获取数组中的最大值，需要将数组作为参数传递给 apply 方法
const max = Math.max.apply(null, numbers); // 输出 7
```

### 3. `bind` 方法

`bind` 方法与 `call` 和 `apply` 方法不同，它不会立即执行函数，而是返回一个新的函数，将 `this` 的上下文绑定到指定的对象，并且可以预设一部分参数。其语法如下：

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

- `function` 是要绑定上下文的函数。
- `thisArg` 是指定的`this`值，即函数在执行时的上下文对象。
- `arg1, arg2, ...` 是预设给函数的参数（可选）。

**示例：**

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // 输出 undefined，因为 this 指向了全局对象

const boundGetX = module.getX.bind(module);
console.log(boundGetX()); // 输出 42，因为 bind 绑定了 module 对象作为上下文
```

### 区别总结：

- `call` 和 `apply` 都是立即调用函数，而 `bind` 返回一个新函数。
- `call` 和 `apply` 的区别在于参数的传递方式：`call` 是逐个传参，`apply` 是以数组形式传参。
- `bind` 方法允许你在调用时设置函数体内 `this` 的值，并且可以预设一部分参数。

这些方法在需要控制函数执行上下文时非常有用，特别是在事件处理、异步编程或者需要明确指定 `this` 的情况下。