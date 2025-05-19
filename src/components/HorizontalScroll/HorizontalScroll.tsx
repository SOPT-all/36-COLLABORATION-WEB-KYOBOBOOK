import type { ReactNode } from 'react';

import * as s from '@/components/HorizontalScroll/HorizontalScroll.style';

interface HorizontalScrollPropTypes {
  children: ReactNode[];
  gap?: string;
  sidePadding?: string;
}

const HorizontalScrollList = ({
  children,
  gap = '1.6rem',
  sidePadding = '2.4rem',
}: HorizontalScrollPropTypes) => {
  return (
    <div css={s.rowScrollStyle(gap)}>
      {children.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === children.length - 1;

        return (
          <div
            key={index}
            css={[
              s.classItemStyle,
              isFirst && s.firstClassItemStyle(sidePadding),
              isLast && s.lastClassItemStyle(sidePadding),
            ]}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScrollList;
