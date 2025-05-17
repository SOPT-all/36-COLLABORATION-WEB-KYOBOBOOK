import { chipVariantStyles } from './chipStyle';

export type ChipProps = {
  variant: keyof typeof chipVariantStyles;
  children: React.ReactNode;
};

const Chip = ({ variant, children }: ChipProps) => {
  return <span css={chipVariantStyles[variant]}>{children}</span>;
};

export default Chip;