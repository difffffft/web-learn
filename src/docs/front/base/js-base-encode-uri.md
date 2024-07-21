`encodeURI` 和 `encodeURIComponent` 是用于编码 URI（Uniform Resource Identifier，统一资源标识符）中特定部分的 JavaScript 函数。它们的主要区别在于编码的范围和处理方式。

### encodeURI

`encodeURI` 函数用于对整个 URI 进行编码，但不会编码用于分隔 URI 各个部分的特殊字符，例如冒号、斜杠、问号和井号。

- **编码范围**：encodeURI 主要用于编码整个 URI，但不会编码 `:/?#[]@` 这些在 URI 中有特殊含义的字符。
- **示例**：
  ```javascript
  encodeURI("http://example.com/path with spaces/");
  // 输出： "http://example.com/path%20with%20spaces/"
  ```

### encodeURIComponent

`encodeURIComponent` 函数用于编码 URI 中的特定部分，包括路径参数和查询字符串中的字符，它会对所有非标准字符进行编码。

- **编码范围**：encodeURIComponent 用于编码整个 URI 中的每个组件部分，包括 `:/?#[]@&=` 这些具有特殊含义的字符，以确保它们在 URI 中不被误解。
- **示例**：
  ```javascript
  encodeURIComponent("path with spaces?");
  // 输出： "path%20with%20spaces%3F"
  ```

### 主要区别

1. **编码的范围**：`encodeURI` 主要用于编码整个 URI，而 `encodeURIComponent` 则更为细致地编码每个 URI 组件。
   
2. **编码字符的数量**：`encodeURIComponent` 比 `encodeURI` 编码更多的字符，因为它会编码 URI 组件中的所有非标准字符。

3. **使用场景**：通常情况下，建议在编码 URI 组件时使用 `encodeURIComponent`，因为它能够确保所有的特殊字符都得到正确的编码。而在对整个 URI 进行编码时，如果希望保留 URI 的基本结构（例如不编码 `://` 之类的字符），则可以使用 `encodeURI`。

### 总结

- 如果需要编码整个 URI，但保留 URI 结构中的特定字符不变，使用 `encodeURI`。
- 如果需要编码 URI 中的特定组件（例如路径、查询参数），并确保所有非标准字符得到正确编码，使用 `encodeURIComponent`。

在实际应用中，正确选择 `encodeURI` 或 `encodeURIComponent` 可以确保 URI 在传输和处理过程中不会因为特殊字符而产生误解或错误解析。