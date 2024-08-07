`line-height` 是 CSS 中一个重要的属性，用于设置文本行基线之间的垂直距离。这一属性对文本布局和可读性有重要的影响。

### 定义
`line-height` 指的是两行文字基线之间的距离，也可以被认为是一行文字所占的垂直空间高度。这个高度包括了文字的本身高度以及文字上下的空白区域。

### 使用场景
`line-height` 的使用场景非常广泛，以下是其常见的几个应用场景：
1. **调整行间距**：通过增加或减少 `line-height` 的值，可以改变多行文本之间的距离，影响文本的布局和可读性。
2. **垂直居中文字**：在某些情况下，设置 `line-height` 与包含元素的高度相同，可以实现单行文本的垂直居中。
3. **解决行内元素的布局问题**：如解决行内元素如 `span` 的顶部与所在行的顶部间距问题。

### 属性值
`line-height` 可以设置以下几种类型的值：
1. **无单位数值**：如 `1.5`，表示字体的倍数。这是最常见的方式，当前字体的 `font-size` 乘以这个数值就是实际的行高。
2. **单位数值**：可以是像素（px）、em、rem 等，直接指定行高的具体大小。
3. **百分比**：如 `150%`，是相对于当前字体大小的百分比，当前 `font-size` 的值乘以这个百分比就是实际的行高。
4. **关键字**：如 `normal`，表示使用浏览器的默认行高，通常大约是 `1.2`。

### 注意事项
1. **整数与无单位数值的区别**：整数被视为无单位数值，但会相对于当前字体大小，而具体的单位数值（如 `px`）则不会随字体大小改变而改变。
2. **行高与字体大小不匹配**：当行高（特别指使用整数时）与字体大小不匹配时，可能会导致行内元素的顶部与所在行的顶部之间存在间隙。
3. **单行文本截断**：如果设置了 `overflow: hidden`，需要注意行高设置，因为过低的行高可能会导致某些字母（如 `g`, `j`, `q`）被截断。

### 最佳实践
为了获得最佳的文本可读性，通常建议将 `line-height` 设置在一个合适的范围内，比如 1.5 到 1.7 倍的字体大小。但这个值需要根据具体的字体和阅读环境进行调整。

### 结论
总的来说，`line-height` 是一个复杂但非常重要的 CSS 属性，它影响着文本的布局和可读性。正确的设置和使用 `line-height` 可以帮助开发者创建出既美观又易读的文本内容。