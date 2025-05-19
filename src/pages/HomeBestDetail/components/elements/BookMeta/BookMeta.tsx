import { useTheme } from '@emotion/react';

import {
  titleText,
  contentText,
  metaContainer,
} from '@/pages/HomeBestDetail/components/elements/BookMeta/BookMeta.style';

type BookMetaTypes = {
  title: string;
  content: string;
  index: number;
};

export default function BookMeta({ title, content, index }: BookMetaTypes) {
  const theme = useTheme();

  return (
    <div css={metaContainer(theme, index)}>
      <span css={titleText(theme)}>{title}</span>
      <span css={contentText(theme)}>{content}</span>
    </div>
  );
}
