---header
sort: 8
---

### 自定义底部的操作按钮的内容

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
        showCancel
        showOk
        cancelText="我就不选"
        okText="我选好了哦"
        title="请选择城市"
        visible={show}
        onClose={() => setShow(false)}
        onOk={() => setShow(false)}
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
`cancelText` `okText` 可以定义底部按钮的内容
