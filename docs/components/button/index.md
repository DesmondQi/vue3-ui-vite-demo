# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue

<template>
    <div style="margin-bottom: 20px">
        <s-button color="blue">主要按钮</s-button>
        <s-button color="green">绿色按钮</s-button>
        <s-button color="gray">灰色按钮</s-button>
        <s-button color="yellow">黄色按钮</s-button>
        <s-button color="red">红色按钮</s-button>
    </div>
    <div style="margin-bottom: 20px">
        <s-button color="blue" plain>主要按钮</s-button>
        <s-button color="green" plain>绿色按钮</s-button>
        <s-button color="gray" plain>灰色按钮</s-button>
        <s-button color="yellow" plain>黄色按钮</s-button>
        <s-button color="red" plain>红色按钮</s-button>
    </div>
    <div style="margin-bottom: 20px">
        <s-button color="blue" size="small">小按钮</s-button>
        <s-button color="blue" size="medium">中按钮</s-button>
        <s-button color="blue" size="large">大按钮</s-button>
    </div>
    <div style="margin-bottom: 20px">
        <s-button color="blue" icon="search" plain>搜索按钮</s-button>
        <s-button color="green" icon="edit" plain>编辑按钮</s-button>
        <s-button color="gray" icon="check" plain>成功按钮</s-button>
        <s-button color="yellow" icon="message" plain>提示按钮</s-button>
        <s-button color="red" icon="delete" plain>删除按钮</s-button>
    </div>
    <div style="margin-bottom: 20px">
        <s-button color="blue" icon="search" plain round></s-button>
        <s-button color="green" icon="edit" plain round></s-button>
        <s-button color="gray" icon="check" plain round></s-button>
        <s-button color="yellow" icon="message" plain round></s-button>
        <s-button color="red" icon="delete" plain round></s-button>
    </div>
</template>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
 <div class="flex flex-row">
  <SButton icon="edit" plain></SButton>
  <SButton icon="delete" plain></SButton>
  <SButton icon="share" plain></SButton>
  <SButton round plain icon="search">搜索</SButton>
 </div>
</template>
```