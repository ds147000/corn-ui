---header
sort: 3
---

### 隐藏遮罩层

```tsx
import { useState } from 'react'
import { Drawer, Button } from 'corn-h5'

const Demo: React.FC = () => {
  const [ show, setShow ] = useState(false)

  const onChange = () => setShow(!show)

  return (
    <>
      <Button onClick={onChange} type="error" >没有遮罩层的抽屉{show ? '(隐藏)' : '(弹出)'}</Button>
      <Drawer visible={show} onClose={onChange} mask={false} >
        <div style={{ width: '100%', height: 300, backgroundColor: '#fff', fontSize: 40, textAlign: 'center', boxShadow: '0px -1px 5px 1px rgba(0, 0, 0, 0.2)' }}>
          @Corn
        </div>
      </Drawer>
    </>
  )
}

export default Demo
```
`mask`属性控制是否用于遮罩层
