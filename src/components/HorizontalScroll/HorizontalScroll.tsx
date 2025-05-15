import type { ReactNode } from 'react';

import {
  rowScrollStyle,
  classItemStyle,
  firstClassItemStyle,
  lastClassItemStyle,
} from '@/components/HorizontalScroll/HorizontalScroll.style';

interface HorizontalScrollListProps {
  children: ReactNode[];
  gap?: string;
  sideMargin?: string;
}

const HorizontalScrollList = ({
  children,
  gap = '1.6rem',
  sideMargin = '2.4rem',
}: HorizontalScrollListProps) => {
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
              isFirst && firstClassItemStyle(sideMargin),
              isLast && lastClassItemStyle(sideMargin),
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
