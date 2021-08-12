---header
sort: 2
---

### 多达6种的按钮大小

```tsx
import { Button } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button size="max">max</Button>
      <Button size="big">big</Button>
      <Button size="large">large</Button>
      <Button size="middle">middle</Button>
      <Button size="small">small</Button>
      <Button size="mini">mini</Button>
    </>
  )
}

export default Demo
```
可以通过`size`属性控制按钮风格，具有五个可选属性：`max` `big` `large` `middle` `small` `mini`  ，默认为`middle`。
 - `max`：一个顶级最大的按钮
 - `big`：一个超大的按钮
 - `large`：一个大大的按钮
 - `middle`：中等大小的按钮，默认是这个
 - `small`：比较小的按钮
 - `mini`：迷你大小的按钮