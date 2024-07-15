HTML中的`display`属性是CSS中的一个核心属性，用于定义元素的显示类型，即元素生成的框的类型。它决定了元素是作为块级元素、行内元素、还是其他类型的元素显示。以下是`display`属性的一些常用值及其含义：

1. `display: block;`
   - 将元素显示为块级元素。
   - 块级元素会独占一行，多个块级元素会从上到下依次排列。
   - 可以设置元素的宽度和高度。
   - 例如：`<div>`、`<p>`、`<h1>`等元素默认是块级元素。

2. `display: inline;`
   - 将元素显示为行内元素。
   - 行内元素不会独占一行，可以和其他元素并列显示在同一行。
   - 不能设置宽度和高度，其宽度和高度由内容撑开。
   - 例如：`<span>`、`<a>`、`<strong>`等元素默认是行内元素。

3. `display: inline-block;`
   - 融合了`inline`和`block`的特性。
   - 既是行内元素，可以和其他元素并列显示，又可以设置宽度和高度。
   - 例如，可以用于制作水平导航菜单等。

4. `display: none;`
   - 隐藏元素，元素不会显示并且不会占据任何空间。
   - 与`visibility: hidden;`不同，后者隐藏元素但仍然占据原始空间。

5. `display: flex;`
   - 设置元素为Flex布局。
   - 可以使子元素在水平或垂直方向上对齐，并且可以轻松实现响应式布局。
   - 例如：`justify-content: center;`可以使得子元素在水平方向上居中。

6. `display: grid;`
   - 设置元素为网格布局。
   - 允许开发者以二维空间来定义布局，创建复杂的网页布局。

在使用`display`属性时，需要注意：
- 当使用`display: none;`隐藏一个元素后，该元素的DOM结构仍然存在于HTML文档中，可以通过JavaScript进行操作。
- `display: none;`隐藏的元素无法响应用户交互，如点击事件。
- 若要从`display: none;`状态切换回可见状态，可以使用`display: block;`或`display: inline;`等，取决于原本的显示类型。

通过`display`属性，开发者可以灵活地控制元素的布局和显示方式，是前端开发中不可或缺的工具之一。

表格记忆:

| 显示类型          | 属性值         | 描述 |
|------------------|----------------|------|
| 块级元素          | `display: block;` | 元素独占一行，可以设置宽度和高度。 |
| 行内元素          | `display: inline;` | 元素不会独占一行，不能设置宽度和高度。 |
| 行内块级元素      | `display: inline-block;` | 结合行内和块级的特性，可以设置宽度和高度，不独占一行。 |
| 隐藏元素          | `display: none;` | 完全隐藏元素，不占据任何空间。 |
| 弹性布局          | `display: flex;` | 使用Flexbox模型进行布局，可以灵活对齐和分配子元素的空间。 |
| 网格布局          | `display: grid;` | 使用网格模型进行布局，允许定义复杂的二维布局。 |