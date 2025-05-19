import { useState } from 'react';
import { useTheme } from '@emotion/react';

import FilterButton from '@/pages/HomeBestDetail/KeywordSection/FilterButton/FilterButton';
import {
  FILTER_BUTTON_LIST,
  KEYWORD_IMAGE_LIST,
} from '@/pages/HomeBestDetail/KeywordSection/KeywordSection.constants';
import Icon from '@/components/Icon';
import * as s from '@/pages/HomeBestDetail/KeywordSection/KeywordSection.style';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Card from '@/components/Card/Card';

const KeywordSection = () => {
  const theme = useTheme();

  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <>
      <div css={s.keywordSection}>
        <h2 css={s.titleSection(theme)}>
          키워드 Pick
          <Icon name="info" width={24} height={24} />
        </h2>
        <section css={s.filterButtonSection}>
          {FILTER_BUTTON_LIST.map((label, idx) => (
            <FilterButton
              key={label}
              label={label}
              active={activeFilter === idx}
              onClick={() => setActiveFilter(idx)}
            />
          ))}
        </section>
        <HorizontalScrollList sidePadding="2.4rem" gap="1.6rem">
          {KEYWORD_IMAGE_LIST.map((img, idx) => (
            <Card key={idx} imgUrl={img} />
          ))}
        </HorizontalScrollList>
      </div>
    </>
  );
};

export default KeywordSection;
