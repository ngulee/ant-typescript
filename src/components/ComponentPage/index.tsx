import React from 'react';
import Button, { ButtonType, ButtonSize } from '../Button';

const ContextPage = () => {
  return (
    <div>
      <Button> normal Button</Button>
        <Button disabled={true}> disabled Button</Button>
        <Button size={ButtonSize.Large}> Large Button</Button>
        <Button size={ButtonSize.Small}> Small Button</Button>
        <Button 
          type={ButtonType.Link} 
          href='www.baidu.com'
        > Link Button</Button>
    </div>
  )
}

export default ContextPage;