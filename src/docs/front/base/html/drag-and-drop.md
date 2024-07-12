### 什么是 Drag-and-Drop API？

Drag-and-Drop API 是一个用于在网页上实现拖放操作的接口，通常在 Web 开发中用来允许用户通过拖动和放置的方式与页面元素进行交互。这个 API 是 HTML5 的一部分，并且提供了一种标准化的方法来处理用户拖动元素的事件。

### Drag-and-Drop API 主要由哪些事件组成？

- dragstart：当拖动操作开始时触发。可以用来设置拖动数据。
- drag：在拖动过程中频繁触发，用于更新拖动效果或状态。
- dragend：拖动操作结束时触发。可以用来清理拖动过程中的状态。
- dragover：当拖动元素在目标区域上方移动时触发。需要调用 event.preventDefault() 来允许放置操作。
- dragenter：当拖动元素进入目标区域时触发。
- dragleave：当拖动元素离开目标区域时触发。
- drop：当拖动元素放置在目标区域时触发。可以用来处理拖动数据的实际放置操作。

### 如何设置一个元素为可拖拽（draggable）？

1. 设置拖动源 (Drag Source)：

- 在要拖动的元素上设置`draggable="true"`属性。

- 监听`dragstart`事件，以设置拖动的数据和效果。

2. 设置拖放目标 (Drop Target)

::: code-group

```js [drag]
<div id="drag-source" draggable="true">Drag me</div>
<script>
  document.getElementById('drag-source').addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Some data to transfer');
  });
</script>
```

```js [drop]
<div id="drop-target">Drop here</div>
<script>
  document.getElementById('drop-target').addEventListener('dragover', function(event) {
    event.preventDefault(); // 必须调用以允许 drop 事件
  });

  document.getElementById('drop-target').addEventListener('drop', function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    alert('Dropped data: ' + data);
  });
</script>
```

:::


### Drag-and-Drop API 的使用场景有哪些？

- <a href="/demo/front/base/html/file-drop.html" target="_blank">文件上传</a>：允许用户从桌面拖动文件到网页上进行上传。
- <a href="/demo/front/base/html/data-drop.html" target="_blank">数据排序</a>：允许用户通过拖动和放置的方式重新排列列表项。
- 组件拖放：允许用户在网页上拖动和放置自定义组件。