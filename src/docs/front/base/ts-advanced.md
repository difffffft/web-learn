任何一个大厂，大项目都是永远不会用JavaScript，而是TypeScript，TypeScript带来的类型推导，安全性，让项目更加严谨。本文将会从源码的角度来讲解TypeScript的基础用法和高阶用法。(源码来自lib.es5.d.ts)

## 基础用法

### 定义类

```typescript
interface Symbol {
    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): symbol;
}
```

### 继承

```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}
```

## 高阶用法

### 联合类型

```typescript
declare type PropertyKey = string | number | symbol;
```

### 只读

```typescript
interface ObjectConstructor {
    readonly prototype: Object;
}
```

### 弃用
```typescript
/**
 * @deprecated
 */
interface User {
  name: string
  age: number
}
```

### 提取泛型参数类型

```typescript
// 源码，主要使用infer

// 提取某函数的参数类型
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

// 提取某函数的返回结果类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 提取某数组的数据类型
type ElementType<T> = T extends (infer U)[] ? U : never;
```

### 条件判断

```typescript
// 用于泛型时，表示条件，number是否是T类型
type IsNumber<T> = T extends number ? true : false;

type Result = IsNumber<number>; // Result 类型为 true
type Result2 = IsNumber<string>; // Result2 类型为 false
```

### 构造方法

```typescript
interface StringConstructor {
    new (value?: any): String; // 构造函数的类型
    (value?: any): string;
}
```

### 定义全局变量

```typescript
declare var NaN: number;
```

### 定义全局函数

```typescript
declare function eval(x: string): any;
```

### 全键可选

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

### 全键必选

```typescript
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

### 全键只读

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

### 选择部分键

```typescript
type Person = {
    name: string;
    age: number;
    gender: string;
};

type PartialPerson = Pick<Person, 'name' | 'age'>;
```

### 根据给定的键和值类型自动构建一个新的对象类型

```typescript
type Person = {
    name: string;
    age: number;
};

// 使用 Record 创建一个对象类型，其中键是 Person 类型中的属性名，值的类型为 string
type PersonRecord = Record<keyof Person, string>;

// 此时 PersonRecord 等价于
// type PersonRecord = {
//     name: string;
//     age: string;
// };
```

### 从一个联合类型中排除某些类型

```typescript
type T1 = Exclude<"a" | "b" | "c", "a">;
// T1 的类型为 "b" | "c"
// 因为 "a" 被排除了，剩下 "b" 和 "c"
```



---- ob 1613