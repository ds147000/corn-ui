---header
sort: 3
---
### 具有图标的toast

```tsx
import { Button, Toast } from 'corn-h5'

const Demo: React.FC = () => {
  const onClick = () => {
    Toast.show({
      title: '我是通过配置唤起的，我5秒才消失',
      icon: 'success'
    })
  }

  return (
    <Button onClick={onClick}>带有成功的图标</Button>)
}

export default Demo
```
`Option.icon` 可以配置一个图标toast
