在HTML和CSS中，实现水平垂直居中的常见方式有以下几种：

1. **使用Flexbox（推荐）**：
   Flexbox布局提供了一种非常简单的方式来实现水平垂直居中。
   ```css
   .container {
     display: flex;
     justify-content: center; /* 水平居中 */
     align-items: center; /* 垂直居中 */
   }
   ```

2. **使用Grid布局（推荐）**：
   与Flexbox类似，Grid布局也可以很容易地实现居中。
   ```css
   .container {
     display: grid;
     place-items: center; /* 同时实现水平和垂直居中 */
   }
   ```

3. **使用绝对定位和transform**：
   当你需要将一个元素相对于它的父元素进行居中时，可以使用绝对定位配合transform属性。
   ```css
   .container {
     position: relative;
   }
   .centered {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

4. **使用行内块和文本居中方法**：
   对于行内元素或行内块元素，可以使用以下方法进行居中：
   ```css
   .container {
     text-align: center; /* 水平居中 */
   }
   /* 若要垂直居中单行文本，需保证line-height等于.container的高度 */
   .centered {
     line-height: 200px; /* 假设.container的高度为200px */
   }
   ```

5. **使用表格布局**：
   虽然现在较少使用表格布局，但它可以实现垂直居中。
   ```css
   .container {
     display: table;
   }
   .centered {
     display: table-cell;
     vertical-align: middle;
   }
   ```

6. **使用margin自动计算**：
   对于块级元素，你可以设置左右外边距为auto来使其水平居中，但此方法不能用于垂直居中。
   ```css
   .centered {
     margin: 0 auto;
   }
   ```

每种方法都有其适用的场景和局限性。Flexbox和Grid布局是现代网站设计中最为推荐的方式，因为它们简单、灵活，并能够很好地适应不同的屏幕尺寸和设备。而绝对定位和transform的方法适用于子元素相对于父元素居中的情况，而文本和行内块元素的居中方法则适用于更简单的布局需求。