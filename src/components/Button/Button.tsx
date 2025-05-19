import { buttonVariantStyles } from './Button.styles';
import type { ButtonTypes } from './buttonTypes';

export const Button = ({ variant, icon, children }: ButtonTypes) => {
  return (
    <button css={buttonVariantStyles[variant]}>
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: children ? '0.125rem' : 0,
            verticalAlign: 'middle',
            lineHeight: 0,
            color: 'currentColor',
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};
