---header
sort: 10
---

### 三种大小

```tsx
import { Empty } from 'corn-h5'

const Demo: React.FC = () => {
  return (
    <>
      <Empty size="large" />
      <Empty  />
      <Empty size="small" />
    </>
  )
}

export default Demo
```
可以通过`size`属性设置组件的大小
