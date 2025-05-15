import type { SerializedStyles } from '@emotion/react';

import { legalButtonBorder } from '@/components/Footer/ButtonList/ButtonList.style';

const ButtonList = ({
  items,
  style,
  withBorder = false,
}: {
  items: string[];
  style: SerializedStyles;
  withBorder?: boolean;
}) => (
  <>
    {items.map((text, i) => (
      <button key={text} css={[style, withBorder && i !== 0 && legalButtonBorder]}>
        {text}
      </button>
    ))}
  </>
);
export default ButtonList;
