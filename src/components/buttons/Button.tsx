import { buttonVariantStyles } from './buttonStyle';

type ButtonProps = {
  variant: keyof typeof buttonVariantStyles;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export const Button = ({ variant, icon, children }: ButtonProps) => {
  return (
    <button css={buttonVariantStyles[variant]}>
      {icon && <span style={{ display: 'flex' }}>{icon}</span>}
      {children}
    </button>
  );
};

