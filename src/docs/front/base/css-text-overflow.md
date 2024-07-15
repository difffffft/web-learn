在网页设计中，当文本内容过长，超出了容器的大小限制时，我们通常需要使用CSS来处理文本溢出，以保持布局的整洁和美观。以下是处理单行和多行文本溢出的方法：

### 单行文本溢出隐藏

对于单行文本，要实现溢出内容隐藏并显示省略号（...），你需要设置以下CSS属性：

```css
.text-ellipsis {
  overflow: hidden;       /* 隐藏超出部分的内容 */
  white-space: nowrap;    /* 确保文本在一行内显示，不会折行 */
  text-overflow: ellipsis; /* 超出部分用省略号表示 */
}
```

HTML应用示例：

```html
<div class="text-ellipsis" style="width: 200px;">
  这是一段非常非常非常长的单行文本，超出部分会被隐藏并显示省略号...
</div>
```

### 多行文本溢出隐藏

多行文本的溢出隐藏并显示省略号要复杂一些，因为CSS没有直接提供多行文本溢出的标准属性。但是，可以使用WebKit内核的CSS扩展来实现这一效果：

```css
.text-ellipsis-multiline {
  display: -webkit-box;    /* 使用弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 设置内容的排列方式为垂直 */
  -webkit-line-clamp: 3;  /* 限制在容器内最多显示3行 */
  overflow: hidden;       /* 隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 超出部分用省略号表示 */
}
```

HTML应用示例：

```html
<div class="text-ellipsis-multiline" style="width: 300px;">
  这是一段非常非常非常长的多行文本，超出部分会被隐藏并显示省略号。这是一段非常非常非常长的多行文本，超出部分会被隐藏并显示省略号。
</div>
```

注意：`-webkit-line-clamp`属性是非标准的，主要在一些基于WebKit的浏览器（如Chrome和Safari）中有效。

这两种方法可以帮助你在网页设计中更好地控制文本内容的展示，确保布局的整洁性和用户阅读体验的舒适度。