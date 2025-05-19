import type { SerializedStyles } from '@emotion/react';
import { useTheme } from '@emotion/react';

import { legalButtonBorder } from '@/components/Footer/ButtonList/ButtonList.style';

const ButtonList = ({
  items,
  style,
  withBorder = false,
}: {
  items: string[];
  style: SerializedStyles;
  withBorder?: boolean;
}) => {
  const theme = useTheme();

  return (
    <>
      {items.map((text, i) => (
        <button
          key={`${text}-${i}`}
          css={[style, withBorder && i !== 0 && legalButtonBorder(theme)]}
        >
          {text}
        </button>
      ))}
    </>
  );
};

export default ButtonList;
