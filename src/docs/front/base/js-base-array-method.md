JavaScript 中的数组方法有很多，每个方法都有自己的特点和用途。以下是一些常见的数组方法总结：

### 1. 修改数组内容的方法

- **`push()`**：向数组末尾添加一个或多个元素，并返回新的长度。
- **`pop()`**：删除并返回数组的最后一个元素。
- **`shift()`**：删除并返回数组的第一个元素。
- **`unshift()`**：向数组的开头添加一个或多个元素，并返回新的长度。
- **`splice()`**：从数组中添加/删除项目，修改原始数组。

### 2. 访问数组内容的方法

- **`concat()`**：连接两个或多个数组，并返回结果。
- **`join()`**：把数组的所有元素放入一个字符串。
- **`slice()`**：从已有的数组中返回选定的元素。
- **`indexOf()`**：搜索数组中的元素，并返回它所在的位置。
- **`lastIndexOf()`**：从数组的末尾向前搜索元素，并返回它所在的位置。

### 3. 遍历数组的方法

- **`forEach()`**：数组每个元素都执行一次回调函数。
- **`map()`**：通过指定函数处理数组的每个元素，并返回新数组。
- **`filter()`**：检测数组中的每个元素是否符合条件，并返回符合条件的元素组成的新数组。
- **`find()`**：返回数组中满足提供的测试函数的第一个元素的值，否则返回 `undefined`。
- **`findIndex()`**：返回数组中满足提供的测试函数的第一个元素的索引，否则返回 `-1`。

### 4. 数组转换的方法

- **`reduce()`**：通过指定函数累计数组的所有值。
- **`reduceRight()`**：通过指定函数累计数组的所有值，从右向左遍历。
- **`some()`**：检测数组中是否有元素满足指定条件。
- **`every()`**：检测数组中的所有元素是否都符合指定条件。

### 5. 其他方法

- **`isArray()`**：检测值是否为数组。
- **`sort()`**：对数组元素进行排序，默认按照字符串 Unicode 编码排序。
- **`reverse()`**：颠倒数组中元素的顺序。

### 示例

```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 push() 向数组末尾添加元素
numbers.push(6);

// 使用 pop() 删除并返回数组的最后一个元素
const lastElement = numbers.pop();

// 使用 forEach() 遍历数组并打印每个元素
numbers.forEach(num => {
  console.log(num);
});

// 使用 map() 创建一个新数组，每个元素乘以 2
const doubledNumbers = numbers.map(num => num * 2);

// 使用 filter() 过滤出大于 3 的元素
const filteredNumbers = numbers.filter(num => num > 3);

// 使用 reduce() 求和
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(lastElement); // 6
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]
console.log(filteredNumbers); // [4, 5, 6]
console.log(sum); // 21
```

### 总结

JavaScript 的数组方法提供了丰富的功能，可以满足各种数组操作的需求。熟悉这些方法可以使数组的处理更加高效和便捷。