---header
sort: 4
---

### 标题和副标题

```tsx
import { useState } from 'react'
import { ActionSheet, ActionSheetItem, Button } from 'corn-h5'

const list = ['广州', '深圳']

const Demo: React.FC = () => {
  const [city, setCity] = useState('')
  const [show, setShow] = useState(false)
  const [showSub, setShowSub] = useState(false)

  const onSelect = (city: string): void => {
    setCity(city)
    setShow(false)
  }

  return (
    <>
      <Button onClick={() => setShow(true)}>标题: {city}</Button>
      <Button onClick={() => setShowSub(true)}>副标题: {city}</Button>
      <ActionSheet
        title="请选择城市"
        visible={show}
        onClose={() => setShow(false)}
      >
        {list.map((item) => (
          <ActionSheetItem key={item} onClick={() => onSelect(item)} text={item} />
        ))}
      </ActionSheet>

      <ActionSheet
        title="请选择城市"
        subTitle="建议选广州"
        visible={showSub}
        onClose={() => setShowSub(false)}
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
`subTitle` 和 `title` 可以控制操作拌面的标题
