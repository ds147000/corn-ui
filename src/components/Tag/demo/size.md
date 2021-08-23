---header
sort: 2
---

### 两种大小

```tsx
import { Tag } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <>
     <Tag size="middle">3-9岁</Tag>
      <Tag size="small">3-9岁</Tag>
    </>
  )
}

export default Demo
```
可以通过`size`属性控制按钮风格，可选属性： `middle` `small`  ，默认为`small`。
 - `middle`：打的标签，默认是这个
 - `small`：比较小的标签