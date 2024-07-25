Intercepting Routes(拦截路由)功能。这是Next.js中一个强大而灵活的路由特性。让我们逐步深入了解:

1. 概念介绍

Intercepting Routes允许您在不改变URL的情况下,从一个路由"拦截"到另一个路由。这对于创建模态框、幻灯片或其他覆盖性UI元素特别有用,因为它可以保持原始URL不变,同时显示不同的内容。

目标网站: https://dribbble.com/

2. 语法

拦截路由使用特殊的命名约定:

- `(.)` - 拦截同级路由
- `(..)` - 拦截父级路由
- `(..)(..)` - 拦截父级的父级路由
- `(...)` - 拦截根路由

3. 使用示例

假设我们有以下文件结构:

```
app/
├── shots/
│   ├── [id]/
│   │   └── page.tsx
│   ├── popular/
│   │   └── page.tsx
│   ├── @modal/
│   │   ├── (..)shots/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── default.tsx
│   └── layout.tsx
```


在这个例子中:
- `/shots/popular` 是主页面，有很多作品
- `/shots/[id]` 是单个作品的详情页
- `/shots/@modal/(..)shots/[id]` 是拦截路由

当用户在popular页面点击详情时,我们可以显示详情而不离开popular页面。URL会变为 `/shots/[id]`,但实际渲染的是 `/shots/@modal/(..)shots/[id]` 路由的内容。

1. 实现细节

在拦截路由的组件中,您可以使用Next.js的内置组件如`Modal`来创建覆盖效果:

::: code-group

```tsx [shots/popular/[id]/page.tsx]
export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <h1>shots detail {id}</h1>
    </>
  );
}
```

```tsx [shots/@modal/default.tsx]
export default function Default() {
  return <></>;
}
```

```tsx [shots/@modal/(..)shots/[id]/page.tsx]
export default function Dialog({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <h1>dialog {id}</h1>
    </>
  );
}
```

```tsx [shots/popular/page.tsx]
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Link href="/shots/1">1</Link>
        <Link href="/shots/2">2</Link>
        <Link href="/shots/3">3</Link>
        <Link href="/shots/4">4</Link>
      </div>
    </>
  );
}
```

```tsx [shots/layout.tsx]
export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
```
:::

5. 优势

- 改善用户体验: 用户可以在不离开当前页面的情况下查看更多内容。
- SEO友好: 保持了原始URL,有利于搜索引擎优化。
- 状态保持: 原页面的状态得以保留,便于用户返回。

6. 注意事项

- 性能考虑: 拦截路由可能会增加初始加载时间,因为需要预加载可能的拦截组件。
- 可访问性: 确保模态框或覆盖层的实现考虑到键盘导航和屏幕阅读器。

7. 与平行路由的结合

Intercepting Routes often工作得很好与Next.js的另一个特性 - Parallel Routes。这允许您在同一个URL下同时加载多个页面或UI组件。