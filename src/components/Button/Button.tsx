import { buttonVariantStyles } from './buttonStyle';

type ButtonProps = {
  variant: keyof typeof buttonVariantStyles;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export const Button = ({ variant, icon, children }: ButtonProps) => {
  return (
    <button css={buttonVariantStyles[variant]}>
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: children ? '0.125rem' : 0, // 아이콘-only일 때는 마진 제거
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


