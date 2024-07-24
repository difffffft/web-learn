### 目录结构

```
app/
  [...slug]/
    page.tsx
```

这将匹配任何未被其他路由捕获的路径。

### 路径参数

```tsx
export default function DocsPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return (
    <>
      <h1>Docs</h1>
      <br />
      {params.slug.map((slug, index) => {
        return <h1 key={slug}>{slug}</h1>;
      })}
    </>
  );
}
```