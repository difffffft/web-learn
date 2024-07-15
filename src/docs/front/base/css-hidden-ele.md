| 隐藏方法                         | 语法示例                                                          | 元素是否占据空间 | 是否可以点击 | 备注                                         |
| -------------------------------- | ----------------------------------------------------------------- | ---------------- | ------------ | -------------------------------------------- |
| `display: none;`                 | `<div style="display: none;">隐藏的元素</div>`                    | 否               | 否           | 完全从渲染树中移除，不占据任何空间           |
| `visibility: hidden;`            | `<div style="visibility: hidden;">隐藏的元素</div>`               | 是               | 否           | 保留空间，但内容不可见                       |
| `opacity: 0;`                    | `<div style="opacity: 0;">隐藏的元素</div>`                       | 是               | 是           | 元素透明，但仍然在页面中占位                 |
| `position: absolute;`            | `<div style="position: absolute; top: -9999px;">隐藏的元素</div>` | 否（移出视口）   | 否（通常）   | 元素被移出屏幕外，但仍然存在于 DOM 中        |
| `overflow: hidden;`              | `<div style="overflow: hidden;">隐藏的元素</div>`                 | 是               | 是           | 主要用于隐藏溢出的内容，不适用于隐藏整个元素 |
| `width: 0;` 和 `height: 0;`      | `<div style="width: 0; height: 0;">隐藏的元素</div>`              | 否               | 否           | 宽高为 0，不占据空间，但可能不是最佳实践     |
| `transform: scale(0);`           | `<div style="transform: scale(0);">隐藏的元素</div>`              | 否               | 否           | 缩放到 0，不占据空间，但保持元素在 DOM 中    |
| `background-color: transparent;` | `<div style="background-color: transparent;">隐藏的元素</div>`    | 是               | 是           | 背景透明，但元素和内容可见                   |
| `z-index`             | `.hidden-z-index { position: absolute; z-index: -1; }` | 是（但可能被覆盖）| 否（如果被覆盖） | 控制堆叠顺序，不直接隐藏元素，但可以使其被其他元素覆盖而不显示 |
| `clip`                | `.hidden-clip { position: absolute; clip: rect(0, 0, 0, 0); }` | 否（只显示裁剪区域） | 否（如果裁剪完全） | 裁剪绝对定位元素，只显示指定区域内的内容，已被 `clip-path` 取代 |
| `clip-path`           | `.hidden-clip-path { clip-path: circle(0 at 50% 50%); }` | 否（只显示裁剪区域） | 否（如果裁剪完全） | 使用形状裁剪元素，可以创建复杂的裁剪形状，非常灵活                 |