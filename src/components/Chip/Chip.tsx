import { chipVariantStyles } from './Chip.styles';
import type { ChipTypes } from './chipTypes';

export const Chip = ({ variant, icon, children }: ChipTypes) => {
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
};

