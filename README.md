# 增强antd输入框 加入增删标签功能

## 安装

```sh
yarn add antd-input-tag
or
npm install antd-input-tag
```
## 在线例子
<https://codesandbox.io/s/smoosh-cache-9zbfg?file=/src/App.js>

支持键盘删除，enter自动分割（头条号搜索关键字）

## 快速使用
```sh
import React, { useRef, useCallback } from "react";
import AntdInputTag from "antd-input-tag";
export default function App() {
  const childRef = useRef();
  const updateChildState = () => {
    // changeVal 子组件暴露方法
    console.log(childRef.current.changeVal());
  };
  return (
    <div className="App" style={{ paddingTop: "100px" }}>
      <AntdInputTag value={["aa", "bb", "cc", "dd"]} ref={childRef} />
      <button onClick={updateChildState}>获取子组件数据</button>
    </div>
  );
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 传入数据 | array | [] |
| ref | ref | ref | - |


