import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';
import { headerWrapper, iconWrapper } from '@/components/DetailHeader/DetailHeader.style';

const DetailHeader = ({ scrollState }: { scrollState: number }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header css={headerWrapper(theme, scrollState)}>
      <button css={iconWrapper} onClick={handleBack}>
        <Icon
          name="left"
          width={28}
          height={28}
          fill={scrollState === 1 ? theme.colors.white : theme.colors.black1}
        />
      </button>
    </header>
  );
};

export default DetailHeader;
