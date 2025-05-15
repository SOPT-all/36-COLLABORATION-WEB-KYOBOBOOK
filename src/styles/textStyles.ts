import { css } from '@emotion/react';

// 멀티라인 말줄임 처리 유틸리티
// ✨ 사용법 : multilineEllipsis(원하는 라인 수)
export const multilineEllipsis = (lines: number = 2) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
