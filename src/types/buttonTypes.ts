import { buttonVariantStyles } from '@/components/Button/Button.styles';

export type ButtonVariant = keyof typeof buttonVariantStyles;

export type ButtonProps = {
  variant: ButtonVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};
