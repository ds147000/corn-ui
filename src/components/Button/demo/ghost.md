---header
sort: 4
---

### ghost
镂空的幽灵风格按钮

```tsx
import { Button } from 'corn-h5'

const Demo: React.FC = () => {

  return (
    <>
      <Button type="primary" ghost >primary</Button>
      <Button type="warn" ghost >warn</Button>
      <Button type="error" ghost >error</Button>
      <Button type="link" ghost >link</Button>
      <Button type="pop" ghost >pop</Button>
    </>
  )
}

export default Demo
```
可以通过`ghost`属性来开启镂空的按钮风格，默认为不开启
