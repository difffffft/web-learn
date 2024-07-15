BFC，即块级格式化上下文（Block Formatting Context），是Web页面中盒模型布局过程中的一种CSS渲染模式。在BFC中，块级盒子按照一定的规则进行排布，而且BFC内的布局不会影响到外部，反之亦然。

### BFC的特点

1. **隔离性**：BFC内的元素与外部的元素相互隔离，不会影响到外部元素的布局。
2. **边距折叠**：在BFC内，垂直相邻的两个块级元素的上下边距(margins)会发生折叠现象，但不会与BFC外的元素发生边距折叠。
3. **浮动清除**：BFC可以包含浮动的元素（即清除浮动），使得浮动元素不会影响到BFC外的元素。
4. **自适应高度**：BFC会计算浮动元素的高度，这意味着如果一个元素包含有浮动元素，那么这个元素的高度会自适应包含这些浮动元素的高度。
5. **不会与浮动元素重叠**：在BFC中，块级元素不会与浮动元素重叠，它们会排在浮动元素的下方。

### 如何触发BFC

以下是一些常见的触发BFC的方式：

1. 根元素(`<html>`)：页面中的根元素自然形成BFC。
2. 浮动元素：设置了`float`属性且属性值不为`none`的元素会触发BFC。
3. 绝对定位元素：设置了`position`属性为`absolute`或`fixed`的元素。
4. 行内块元素：设置了`display`属性为`inline-block`的元素。
5. 表格单元格：设置了`display`属性为`table-cell`的元素。
6. 表格标题：设置了`display`属性为`table-caption`的元素。
7. `overflow`属性不为`visible`的元素：当元素的`overflow`属性设置为`auto`, `scroll`或`hidden`时。

### BFC的应用

BFC的一个典型应用场景是解决浮动元素导致的父元素高度塌陷问题。当父元素触发了BFC后，它能够包含内部的浮动元素，从而解决高度塌陷。

以下是一个使用BFC解决高度塌陷的例子：

```html
<div class="container">
    <div class="float">浮动元素</div>
</div>

<style>
.container {
    overflow: hidden; /* 触发BFC */
}
.float {
    float: left;
    width: 200px;
    height: 200px;
}
</style>
```

在上面的例子中，由于`.container`设置了`overflow: hidden`，它触发了一个BFC，这个BFC能够包含内部的浮动元素`.float`，因此`.container`的高度能够根据`.float`的高度进行自适应。

通过掌握BFC的原理和触发条件，我们可以更好地理解CSS布局的原理，从而更有效地解决一些页面布局问题。