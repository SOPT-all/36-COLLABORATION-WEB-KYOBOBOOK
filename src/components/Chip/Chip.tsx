// Chip.tsx
import { useTheme } from '@emotion/react';
import type { ReactNode } from 'react';

import { chipVariantStyles } from './Chip.styles';

export type ChipProps = {
  variant: keyof typeof chipVariantStyles;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function Chip({ variant, icon, children }: ChipProps) {
  const theme = useTheme();

  return (
    <span css={chipVariantStyles[variant]}>
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: children ? '0.4rem' : 0,
            lineHeight: 0,
            color: 'currentColor',
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
