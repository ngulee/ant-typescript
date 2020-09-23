import React from 'react';
import Button, { ButtonType, ButtonSize } from '../Button';
import './index.scss';

const ButtonPage = () => {
  return (
    <div className='btns-box'>
      <Button size={ButtonSize.Small}> Small Button</Button>
      <Button> normal Button</Button>
      <Button 
        size={ButtonSize.Large}
        btnType={ButtonType.Primary}
      > Large Button</Button>

      <Button btnType={ButtonType.Danger}> Danger Button</Button>
      <Button disabled={true}> disabled Button</Button>
      <Button 
        btnType={ButtonType.Link} 
        href='www.baidu.com'
      > Link Button</Button>
      <Button 
        disabled={true}
        btnType={ButtonType.Link} 
        href='www.baidu.com'
      > Link Button</Button>
    </div>
  )
}

export default ButtonPage;