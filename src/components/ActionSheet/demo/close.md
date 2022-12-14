---header
sort: 6
---

### 开启关闭按钮

```tsx
import { useState } from 'react'
import { ActionSheet, ActionSheetItem, Button } from 'corn-h5'

const list = ['广州', '深圳']

const Demo: React.FC = () => {
  const [city, setCity] = useState('')
  const [show, setShow] = useState(false)

  const onSelect = (city: string): void => {
    setCity(city)
    setShow(false)
  }

  return (
    <>
      <Button onClick={() => setShow(true)}>选择城市: {city}</Button>
      <ActionSheet
        title="请选择城市"
        visible={show}
        closable
        onClose={() => setShow(false)}
      >
        {list.map((item) => (
          <ActionSheetItem key={item} onClick={() => onSelect(item)} text={item} />
        ))}
      </ActionSheet>
    </>
  )
}

export default Demo
```
`closable` 属性控制是否显示右上角的关闭按钮
