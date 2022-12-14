---header
sort: 3
---

### ActionSheetItem 一致的样式

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
如果对于编写ActionSheet一致风格的样式感觉到麻烦，使用可以`ActionSheetItem` 组件
