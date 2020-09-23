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
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

/**
 * 按钮类按钮属性
 */
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

/**
 * 链接类按钮熟悉
 */
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

/**
 * Button 组件熟悉
 */
export type IButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    children,
    ...resetProps
  } = props;

  // btn
  // button size: btn-lg, btn-sm
  // button btnType: btn-primary, btn-danger,
  // button status: btn-disabled
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'btn-disabled': (btnType === ButtonType.Link) && disabled,
  });

  if(btnType === ButtonType.Link && href) {
    return (
      <a className={classes} {...resetProps}>{children}</a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...resetProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button;