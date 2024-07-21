JavaScript 中的扩展运算符（spread operator）是三个点符号 `...`，它主要用于展开（spread）可迭代对象（如数组、字符串等），将它们展开为单独的元素。扩展运算符提供了一种简洁的方式来处理数组、函数调用以及对象字面量的操作。

### 1. 在数组中的应用

#### 将数组展开为参数序列
```javascript
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
```

#### 数组拼接
```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2]; // [1, 2, 3, 4, 5, 6]
```

#### 浅拷贝数组
```javascript
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]
```

### 2. 在函数调用中的应用

#### 将数组元素作为参数传递给函数
```javascript
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

#### 与剩余参数结合使用
```javascript
function multiply(multiplier, ...nums) {
  return nums.map(num => multiplier * num);
}
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

### 3. 在对象字面量中的应用

#### 浅拷贝对象
```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const mergedObj = { ...obj1, ...obj2 }; // { foo: 'baz', x: 42, y: 13 }
```

#### 修改对象的某些属性
```javascript
const person = { name: 'Alice', age: 30 };
const updatedPerson = { ...person, age: 31 }; // { name: 'Alice', age: 31 }
```

### 注意事项：
- 扩展运算符仅用于可迭代对象（如数组、字符串等），而不适用于普通对象。
- 扩展运算符是浅拷贝，如果展开的元素是对象，则复制的是对象的引用。

扩展运算符在JavaScript中是一种强大且灵活的工具，能够简化代码并提高可读性，特别是在处理数组和对象时。