import { css, useTheme } from '@emotion/react';
import type { Theme } from '@emotion/react';

export default function Divider() {
  const theme = useTheme();
  return <hr css={dividerStyle(theme)} />;
}

const dividerStyle = (theme: Theme) => css`
  width: 100%;
  height: 1rem;
  border: none;
  background-color: ${theme.colors.gray1};
`;
