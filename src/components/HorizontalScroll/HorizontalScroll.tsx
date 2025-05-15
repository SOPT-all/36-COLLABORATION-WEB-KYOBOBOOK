import type { ReactNode } from 'react';

import {
  rowScrollStyle,
  classItemStyle,
  firstClassItemStyle,
  lastClassItemStyle,
} from '@/components/HorizontalScroll/HorizontalScroll.style';

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
    <div css={rowScrollStyle(gap)}>
      {children.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === children.length - 1;

        return (
          <div
            key={index}
            css={[
              classItemStyle,
              isFirst && firstClassItemStyle(sidePadding),
              isLast && lastClassItemStyle(sidePadding),
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
