---header
sort: 1
---

### API方式调用

```tsx
import { useState } from 'react'
import { showActionSheet, Button } from 'corn-h5'

const list = ['广州', '深圳']

const Demo: React.FC = () => {
  const [city, setCity] = useState('')

  const showAction = () => {
    showActionSheet({ list: list  })
      .then((res) => setCity(list[res.tapIndex]))
      .catch((err) => console.error)
  }

  return (
    <Button onClick={showAction}>选择城市: {city}</Button>
  )
}

export default Demo
```
可以直接通过API唤起 `ActionSheet` 。对于比较简单的场景可以直接使用此方式。API返回一个`Promise`对象。用户选择会执行 `then`。取消和唤起失败执行`catch`
