在 JavaScript 中，`Object.assign()` 是一个用于将一个或多个源对象的属性复制到目标对象的方法。它的语法如下：

```javascript
Object.assign(target, ...sources)
```

其中：
- `target` 是目标对象，即要将属性复制到的对象。
- `sources` 是一个或多个源对象，即要从中复制属性的对象。

### 特点和用法

1. **属性复制**:
   `Object.assign()` 方法将所有可枚举的自有属性（不包括继承的属性）从一个或多个源对象复制到目标对象。如果多个源对象具有相同的属性，后面的源对象会覆盖之前的源对象。

   ```javascript
   const target = { a: 1, b: 2 };
   const source = { b: 3, c: 4 };

   Object.assign(target, source);
   console.log(target); // { a: 1, b: 3, c: 4 }
   ```

2. **不复制原型链上的属性**:
   `Object.assign()` 只复制源对象自身的属性，不会复制继承的属性。

   ```javascript
   class Parent {
     constructor() {
       this.parentProp = 'parent';
     }
   }

   class Child extends Parent {
     constructor() {
       super();
       this.childProp = 'child';
     }
   }

   const child = new Child();
   const target = {};

   Object.assign(target, child);
   console.log(target); // { childProp: 'child' }
   ```

   在上面的例子中，`Object.assign()` 只复制了 `child` 实例的 `childProp` 属性，而没有复制 `parentProp` 属性，因为 `parentProp` 是在 `Parent` 类的原型链上定义的。

3. **返回值**:
   `Object.assign()` 方法返回目标对象 `target`，而不是源对象。

   ```javascript
   const target = {};
   const source = { a: 1 };

   const result = Object.assign(target, source);
   console.log(result === target); // true
   ```

4. **复制顺序**:
   属性复制的顺序是从左到右，即后面的源对象的属性会覆盖前面的源对象的属性。

   ```javascript
   const target = {};
   const source1 = { a: 1 };
   const source2 = { a: 2, b: 2 };

   Object.assign(target, source1, source2);
   console.log(target); // { a: 2, b: 2 }
   ```

5. **注意事项**:
   - `Object.assign()` 是浅拷贝，即如果属性的值是对象或其他引用类型，复制的是引用而不是对象本身。
   - 目标对象会被修改，如果不希望修改目标对象，可以传入一个空对象作为目标对象。

   ```javascript
   const source = { obj: { key: 'value' } };
   const target = {};

   Object.assign(target, source);

   source.obj.key = 'new value';
   console.log(target.obj.key); // 'new value'
   ```

### Polyfill

如果需要支持旧版本的浏览器或 Node.js 环境，可以使用 `Object.assign()` 的 polyfill。一个简单的 polyfill 可以如下所示：

```javascript
if (typeof Object.assign !== 'function') {
  Object.assign = function(target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 0; index < sources.length; index++) {
      var nextSource = sources[index];

      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}
```

这个 polyfill 实现了 `Object.assign()` 的基本功能，可以在不支持该方法的环境中使用。