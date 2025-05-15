import { useTheme } from '@emotion/react';

import { dividerStyle } from '@/components/Divider/Divider.style';

export default function Divider() {
  const theme = useTheme();
  return <hr css={dividerStyle(theme)} />;
}
