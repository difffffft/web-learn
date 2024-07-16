React中最常用的钩子主要有以下几个：

1. `useState`：
   - 作用：允许你在函数组件中添加和管理内部状态。
   - 示例：`const [count, setCount] = useState(0);` 初始化一个状态变量`count`，并设置其初始值为0。
   - 在React的设计理念中，组件是构建应用的基本单元，每个组件都可以拥有自己的状态。这种状态代表了组件内部的一种数据模型，可以随着用户交互或应用的其他事件而改变。只有状态发生了变化UI才会更新，普通变量发生变化，UI不会更新。
   - 你可以理解为Vue的ref和reactive

2. `useEffect`：
   - 作用：在函数组件中执行副作用操作，比如数据获取、订阅、手动修改React组件中的DOM等。
   - 示例：`useEffect(() => { /* 执行一些副作用操作 */ }, [dependencies]);` 只有当依赖项变化时，才会重新执行副作用。
   - 你可以理解为Vue的`watch`，或者`mounted`,`updated`,`beforeUnmount`生命周期，相当于一个函数多用了。

## 当wacth使用时

```js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // 这个副作用只会在 `count` 变化时执行
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## 当mounted使用时

```js
useEffect(() => {
  // 这个副作用只会在组件挂载时执行一次
}, []);
```

## 当updated使用时

```js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // 假设我们在这里进行数据获取或者订阅操作
  useEffect(() => {
    // 这个副作用会在组件每次渲染后执行
    console.log('Component was rendered');
  });

  // 组件的其他逻辑
  return <div>Some content</div>;
}
```

## 当beforeUnmount使用时

```js
useEffect(() => {
  const timerID = setInterval(() => {
    // 定期执行的操作
  }, 1000);

  // 组件卸载时或者依赖项变化时，清理定时器
  return () => clearInterval(timerID);
}, [/* 依赖项数组 */]);
```

3. `useContext`：
   - 作用：接收一个Context对象，并返回该Context的当前值。
   - 示例：`const value = useContext(MyContext);` 用来消费上下文中共享的数据。
   - 这与Vue.js中的`Provide/Inject`功能相似

4. `useReducer`：
   - 作用：允许你在组件中使用reducer来管理复杂的状态逻辑。
   - 示例：`const [state, dispatch] = useReducer(reducer, initialState);` 提供了一种类似Redux的方式来管理状态。
   - 总之，useReducer 是 useState 的一个可选替代方案，尤其是在状态逻辑变得更复杂、更难以维护时。选择使用哪个 Hook 取决于你的具体需求和偏好。对于小型或简单组件，useState 通常足够使用；而对于大型或复杂组件，useReducer 可能是更好的选择。
   - 当多个state需要一起更新时，就应该考虑使用useReducer。
   - useReducer与Vuejs中的Vuex很像，但是useReducer只是单个复杂组件的状态管理方案，而不是全局状态管理，你可以理解为将Vuex细分化为组件内部。

5. `useRef`：
   - 作用：返回一个可变的ref对象，其`.current`属性被初始化为传入的参数。
   - 示例：`const refContainer = useRef(initialValue);` 常用于获取DOM元素的引用。
   - 就跟vue组件上写ref一样。

6. `useMemo`：
   - 作用：返回一个记忆值，仅当依赖项改变时才重新计算。
   - 示例：`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` 用于优化性能。
   - 相当于Vuejs的computed ，但是Vue 的 computed 会自动追踪其内部使用的响应式数据的改变，而 React 的 useMemo 需要显式地声明依赖项数组。

## 作用于数据

```js
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  // 使用 useMemo 来缓存计算结果
  const sum = useMemo(() => {
    return a + b; // 假设这是一个耗时的计算
  }, [a, b]); // 依赖项数组，当 a 或 b 变化时，sum 会重新计算

  return <div>Sum: {sum}</div>;
}
```

7. `useCallback`：
   - 作用：返回一个记忆化的回调函数。
   - 示例：`const memoizedCallback = useCallback(() => { /* ... */ }, [dependencies]);` 当依赖项未变时，返回上一次生成的回调函数。
   - useMemo是缓存值的，useCallback是缓存函数的。

8. 自定义钩子（Custom Hooks）：
   - 作用：允许你提取组件逻辑到可重用的函数中。
   - 示例：创建一个以`use`开头，并遵循React钩子约定的函数。

这些钩子极大地增强了函数组件的功能，使得开发者能够无需编写类组件就能处理复杂的状态逻辑和副作用。这些钩子是构建现代React应用程序的基础。

## 设计指导

如果你在多个组件中发现了重复的逻辑，尤其是状态和副作用逻辑，可以考虑将其提取到自定义 Hook 中。就是涉及到状态和组件就提Hooks，纯函数什么的就提Utils。