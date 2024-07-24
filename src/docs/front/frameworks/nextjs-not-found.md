Next.js中的not-found.tsx文件,以及它如何被主动和被动触发。

1. not-found.tsx 简介

not-found.tsx 是 Next.js 引入的一个特殊文件,用于自定义 404 Not Found 页面。它允许开发者为找不到的路由提供一个统一的错误页面。

1. not-found.tsx 的位置

通常,你可以在以下位置创建 not-found.tsx 文件:

- app/not-found.tsx (用于整个应用)
- app/[动态路由]/not-found.tsx (用于特定路由)

3. 被动触发

当 Next.js 无法找到请求的路由时,会自动触发 not-found.tsx。这种情况下,Next.js 会渲染这个文件中导出的组件。例如:

```tsx
export default function NotFound() {
  return (
    <div>
      <h2>404 - 页面未找到</h2>
      <p>抱歉,我们找不到您请求的页面。</p>
    </div>
  );
}
```

4. 主动触发

你可以在代码中主动触发 not-found 页面。Next.js 提供了一个 notFound 函数,你可以在任何服务器组件中调用它:

```tsx
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`https://api.example.com/product/${params.id}`);
  
  if (!res.ok) {
    notFound();
  }
  
  // 正常的页面渲染逻辑...
}
```

在这个例子中,如果 API 请求失败,我们就调用 notFound() 函数来触发 404 页面。

5. 注意事项

- not-found.tsx 只能用于服务器组件。
- 调用 notFound() 会立即终止组件的执行并显示 404 页面。
- 你可以在 not-found.tsx 中使用客户端组件,但文件本身必须是服务器组件。

6. 自定义布局

你可以为 not-found 页面创建自定义布局:

```tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>找不到页面</h2>
      <p>无法找到请求的资源</p>
      <Link href="/">返回首页</Link>
    </div>
  )
}
```

这个例子展示了如何添加返回首页的链接,提升用户体验。

通过使用 not-found.tsx 和 notFound() 函数,你可以为你的 Next.js 应用创建一个统一的、用户友好的 404 错误处理机制,无论是系统自动触发还是在代码中主动触发。