import { chipVariantStyles } from '@/components/Chip/Chip.styles';

export type ChipVariant = keyof typeof chipVariantStyles;

export type ChipProps = {
  variant: ChipVariant;
  icon?: any;
  children?: any;
};
