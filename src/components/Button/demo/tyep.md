#### 5种状态基础使用

```tsx
import { Button } from '@xrkmm/ui'

const Demo: React.FC = () => {

  return (
    <>
      <Button type="error">向日葵妈妈UI</Button>
      <Button type="link">向日葵妈妈UI</Button>
      <Button type="pop">向日葵妈妈UI</Button>
      <Button type="primary">向日葵妈妈UI</Button>
      <Button type="warn">向日葵妈妈UI</Button>
    </>
  )
}

export default Demo
```
可以通过`type`属性控制按钮风格，具有五个可选属性：`primary` `warn` `error` `link` `pop` ，默认为`primary`