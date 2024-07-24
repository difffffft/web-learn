### 目录结构

```
app/
  blog/
    [blogId]/
      page.tsx
```

这将匹配如`/blog/0001`的路由。

### 路径参数

```tsx
export default function BlogDetail({ params }: { params: { blogId: string } }) {
  return (
    <div>
      <h1>Blog Detail {params.blogId}</h1>
    </div>
  );
}
```

### 动态路由的嵌套

```
app/
  blog/
    [blogId]/
      review/
        [reviewId]/
          page.tsx
      page.tsx
```

这将匹配如`/blog/0001/review/0001`的路由。

### 路径参数

```tsx
export default function BlogReivews({
  params,
}: {
  params: { blogId: string; reviewId: string };
}) {
  return (
    <div>
      <h1>
        Blog Post {params.blogId}
        <br />
        Review In Blog Post {params.reviewId}
      </h1>
    </div>
  );
}
```