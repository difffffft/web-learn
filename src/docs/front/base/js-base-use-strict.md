在JavaScript中，'use strict' 是一个指令（directive），它是ECMAScript 5引入的一项重要功能。它用于定义在严格模式（strict mode）下运行代码的方式。严格模式使得代码编写更安全，消除了一些不明确的行为，提供更好的错误检查和更严格的语法。

### 使用方法

要在JavaScript代码中启用严格模式，只需在全局作用域或函数体的开头添加如下语句：

```javascript
'use strict';
```

例如：

```javascript
'use strict';

function strictFunction() {
  // 在此函数内部的代码将会在严格模式下执行
}
```

### 严格模式的影响

启用严格模式后，代码的行为会发生一些变化：

1. **消除了全局变量的隐式声明**：在严格模式下，不能隐式地创建全局变量，未声明就赋值的情况会抛出错误。

   ```javascript
   'use strict';
   undeclaredVariable = 10; // 抛出 ReferenceError 错误
   ```

2. **禁止删除变量**：无法删除一个变量，只能删除属性。

   ```javascript
   'use strict';
   var x = 10;
   delete x; // 抛出 SyntaxError 错误
   ```

3. **禁止函数参数重名**：函数参数不能重名。

   ```javascript
   'use strict';
   function foo(x, x) { // 抛出 SyntaxError 错误
     return x + x;
   }
   ```

4. **禁止使用八进制字面量**：在严格模式下，八进制字面量会抛出错误。

   ```javascript
   'use strict';
   var octal = 010; // 抛出 SyntaxError 错误
   ```

5. **禁止 with 语句**：在严格模式下，with语句会抛出错误。

   ```javascript
   'use strict';
   with (obj) {
     // 严格模式下会抛出 SyntaxError 错误
   }
   ```

6. **强制 this 指向**：在非严格模式下，this可能会指向全局对象（在浏览器中是window对象），在严格模式下，如果没有明确指定this的值，它将为undefined。

   ```javascript
   'use strict';
   function strictModeFunction() {
     return this; // 在严格模式下，此处的this为undefined
   }
   ```

7. **禁止使用 eval 和 arguments 作为变量名**：在严格模式下，这两个标识符不能作为变量被重新赋值。

   ```javascript
   'use strict';
   var eval = 10; // 抛出 SyntaxError 错误
   var arguments = 10; // 抛出 SyntaxError 错误
   ```

8. **限制了函数中的 arguments 对象**：在严格模式下，修改函数内的arguments对象不会影响到对应的函数参数。

   ```javascript
   'use strict';
   function test(a) {
     arguments[0] = 10;
     console.log(a); // 在严格模式下，输出不会改变，仍为初始传入的值
   }
   test(5);
   ```

### 建议

- **始终使用严格模式**：严格模式可以帮助捕获一些在非严格模式下容易忽略的错误，并且它会促使你书写更加健壮、清晰的代码。
- **局部使用**：可以选择在整个脚本文件中启用严格模式，或者仅在特定函数中启用。在大多数情况下，启用整个脚本文件的严格模式是更好的选择。

通过使用严格模式，可以提高代码质量和可维护性，避免一些常见的错误和陷阱。