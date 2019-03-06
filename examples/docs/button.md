# Button 按钮

### 基础用法
基础的按钮用法

<script>console.log(111)</script>

::: demo 使用```type```, ```plain```和```round``` 属性来定义Button 的样式
```html
  <div>
    <bt-button type="default">默认按钮</bt-button>
    <bt-button type="primary">主要按钮</bt-button>
    <bt-button type="success">成功按钮</bt-button>
    <bt-button type="warning">警告按钮</bt-button>
    <bt-button type="danger">危险按钮</bt-button>
    <bt-button type="info">信息按钮</bt-button>
  </div>
  <div>
    <bt-button type="default" plain>朴素按钮</bt-button>
    <bt-button type="primary" plain>主要按钮</bt-button>
    <bt-button type="success" plain>成功按钮</bt-button>
    <bt-button type="warning" plain>警告按钮</bt-button>
    <bt-button type="danger" plain>危险按钮</bt-button>
    <bt-button type="info" plain>信息按钮</bt-button>
  </div>
  <div>
    <bt-button type="default" round>默认按钮</bt-button>
    <bt-button type="primary" round>主要按钮</bt-button>
    <bt-button type="success" round>成功按钮</bt-button>
    <bt-button type="warning" round>警告按钮</bt-button>
    <bt-button type="danger" round>危险按钮</bt-button>
    <bt-button type="info" round>信息按钮</bt-button>
  </div>

  ```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。


::: demo 额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
```html
  <div>
    <bt-button size="small">小尺寸</bt-button>
    <bt-button size="medium">中等尺寸</bt-button>
    <bt-button size="default">默认尺寸</bt-button>
  </div>

```
  :::
</div>


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
