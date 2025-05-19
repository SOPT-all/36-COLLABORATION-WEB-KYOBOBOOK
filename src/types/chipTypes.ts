import type { ReactNode } from 'react';

import { chipVariantStyles } from '@/components/Chip/Chip.styles';

export type ChipVariant = keyof typeof chipVariantStyles;

export type ChipTypes = {
  variant: ChipVariant;
  icon?: ReactNode;
  children?: ReactNode;
};
