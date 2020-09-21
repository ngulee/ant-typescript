import React from 'react';
import classnames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface IBaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<IBaseButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    type,
    href,
    children,
  } = props;

  // btn
  // button size: btn-lg, btn-sm
  // button type: btn-primary, btn-danger,
  // button status: btn-disabled
  const classes = classnames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'btn-disabled': (type === ButtonType.Link) && disabled,
  }, className);

  if(type === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>{children}</a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
}

export default Button;