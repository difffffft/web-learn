JavaScript 中的原型（prototype）和原型链（prototype chain）是理解其面向对象特性的关键概念之一。

### 原型（Prototype）

每个 JavaScript 对象（除了 null 和 undefined）都有一个原型对象（prototype）。对象可以通过 `__proto__` 属性访问到它的原型对象。例如：

```javascript
let obj = {}; // 等同于 let obj = new Object();
console.log(obj.__proto__); // 输出: Object {}
```

上述代码中，`obj` 是一个空对象，它的原型是 `Object.prototype`。`Object.prototype` 是所有普通对象的原型对象。

#### prototype 属性（函数对象特有）

在 JavaScript 中，函数也是对象，每个函数对象都有一个 `prototype` 属性。这个属性是在函数被创建时自动添加的，初始值是一个空对象 `{}`。这个属性主要在定义构造函数时用到，用来构建新对象的原型链。

例如：

```javascript
function Person(name) {
    this.name = name;
}

console.log(Person.prototype); // 输出: Person {}
```

在这里，`Person.prototype` 是 `Person` 函数的原型对象，可以给它添加属性和方法，这些属性和方法会被构造函数创建的对象继承。

### 原型链（Prototype Chain）

原型链是 JavaScript 实现继承的一种机制。当试图访问一个对象的属性或方法时，如果在对象本身找不到，它会沿着原型链向上查找直到找到相应的属性或方法或者到达原型链的末尾（即 `null`）。

例如：

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let john = new Person('John');
john.sayHello(); // 输出: Hello, my name is John

// 在调用 john.sayHello() 时，JavaScript 引擎首先检查 john 对象本身是否有 sayHello 方法，
// 如果找不到，则沿着 john.__proto__（即 Person.prototype）继续查找，最终找到 sayHello 方法并执行。
```

在上面的例子中：
- `john` 是一个 `Person` 对象的实例，它继承了 `Person.prototype` 的属性和方法。
- `Person.prototype` 的原型是 `Object.prototype`，因此 `john` 实例也可以访问 `Object.prototype` 中定义的方法，比如 `toString` 等。

#### 原型链的终点

原型链的顶端是 `Object.prototype`，它的原型为 `null`。当一个对象的原型链查找到达 `Object.prototype` 并且找不到要访问的属性或方法时，返回值为 `undefined`。

### 总结

- **原型**：每个对象都有一个原型对象，用来实现属性和方法的继承。
- **原型链**：对象通过原型链连接起来，实现属性和方法的查找和继承。
- **Object.prototype**：所有对象的顶层原型，它的原型为 `null`。

理解 JavaScript 的原型和原型链是掌握 JavaScript 面向对象编程的关键，也是理解其灵活且强大的继承机制的基础。