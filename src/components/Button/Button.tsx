import { useTheme } from '@emotion/react';
import type { ReactNode } from 'react';

import { buttonVariantStyles } from './Button.styles';

type ButtonProps = {
  variant: keyof typeof buttonVariantStyles;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function Button({ variant, icon, children }: ButtonProps) {
  const theme = useTheme();

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
}
