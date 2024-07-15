`<meta name="robots">` 是一个 HTML 标签，它为搜索引擎的蜘蛛（robots）提供了关于网页的特定指示。这个标签通常放在网页的 `<head>` 部分中。

以下是如何使用 `<meta name="robots">` 标签的一些示例：

1. 禁止所有搜索引擎索引当前页面：

   ```html
   <meta name="robots" content="noindex">
   ```

2. 禁止所有搜索引擎跟踪页面上的链接：

   ```html
   <meta name="robots" content="nofollow">
   ```

3. 同时禁止索引和跟踪链接：

   ```html
   <meta name="robots" content="noindex, nofollow">
   ```

4. 允许特定搜索引擎索引页面（用实际的搜索引擎名称替换 `YourBotName`）：

   ```html
   <meta name="robots" content="index, follow">
   <meta name="YourBotName" content="index, follow">
   ```

5. 告诉搜索引擎不要使用页面上的缓存版本：

   ```html
   <meta name="robots" content="noarchive">
   ```

6. 告诉搜索引擎不要使用页面上的Snippet（搜索结果中的简短描述）：

   ```html
   <meta name="robots" content="nosnippet">
   ```

请注意，不是所有的搜索引擎都遵循这些指令，但大多数主要的搜索引擎，如Google、Bing和Yahoo，都会尊重这些设置。

在设置 `<meta name="robots">` 标签时，请确保你明确知道每个指令的含义以及它将如何影响你的网站的搜索引擎优化（SEO）。