---header
sort: 5
---
### 直接使用子节点定义内容

```tsx
import { useState } from "react";
import { Modal, Button } from "corn-h5";

const Demo: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)} >
        JSX使用模态框
      </Button>
      <Modal
        visible={show}
        title="这是标题"
        button={[
          { text: '取消', style: 'cancel' },
          { text: '确定' }
        ]}
        onButtonClick={() => setShow(false)}
      >
        这是文案这是文案这是文案这是文案
      </Modal>
    </>
  );
};

export default Demo;
```
使用子节点方式直接定义模特框内容
