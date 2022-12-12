import { forwardRef, memo, ReactNode } from 'react';
import { Btn, Icon, Sup } from '@components/Button/Button.styles';

type ButtonProps = {
  as?: 'a' | 'button';
  children?: ReactNode;
  type?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean | undefined;
  leftIcon?: string;
  rightIcon?: string;
  sup?: string;
  bgColor?: string;
  isPulsing?: boolean;
};

export const Button = memo<ButtonProps>(
  forwardRef(({ as = 'button', children, leftIcon, rightIcon, sup, bgColor = '23, 62, 125', ...props }, ref) => {
    return (
      <Btn
        as={as}
        // @ts-ignore
        ref={ref}
        bgColor={bgColor}
        {...props}
      >
        {leftIcon && <Icon iconUrl={leftIcon} position="left" />}
        {children}
        {sup && <Sup>{sup}</Sup>}
        {rightIcon && <Icon iconUrl={rightIcon} position="right" />}
      </Btn>
    );
  })
);

Button.displayName = 'Button';
