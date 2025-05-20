import { useTheme } from '@emotion/react';

import { dividerStyle } from '@/components/Divider/Divider.style';

const Divider = () => {
  const theme = useTheme();

  return <hr css={dividerStyle(theme)} />;
};

export default Divider;
