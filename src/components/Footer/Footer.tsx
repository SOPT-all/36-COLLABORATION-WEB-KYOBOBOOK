import { useTheme } from '@emotion/react';

import Dropdown from '@/components/Footer/Dropdown/Dropdown';
import * as s from '@/components/Footer/Footer.style';
import { AUTH_BUTTON_LABELS, LEGAL_BUTTON_LABELS } from '@/components/Footer/Footer.constants';
import Icon from '@/components/Icon';
import ButtonList from '@/components/Footer/ButtonList/ButtonList';

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <div css={s.noticeContainer(theme)}>
        <span css={s.noticeStyle(theme)}>공지사항</span>
        <span css={s.linkStyle(theme)}>컬쳐랜드 시스템 점검 안내(4/24)</span>
      </div>

      <div css={s.logoContainer}>
        <Icon name="kyoboLogo" width={116} height={33} />
        <div css={s.businessInfoContainer(theme)}>
          <span>사업자정보</span>
          <Icon name="circleDown" width={20} height={20} fill={theme.colors.white} />
        </div>
      </div>

      <div css={s.authButtonsContainer(theme)}>
        <ButtonList items={AUTH_BUTTON_LABELS} style={s.authButton} />
      </div>

      <div css={s.legalButtonsContainer(theme)}>
        <ButtonList items={LEGAL_BUTTON_LABELS} style={s.legalButton} withBorder />
      </div>

      <div css={s.dropdwonContainer}>
        <Dropdown />
      </div>

      <div css={s.snsButtonContainer}>
        <span css={s.snsButtonWrapper}>
          <Icon name="youtubeCircle" width={30} height={30} fill={theme.colors.white} />
          <Icon name="facebookCircle" width={30} height={30} fill={theme.colors.white} />
          <Icon name="instagramCircle" width={30} height={30} fill={theme.colors.white} />
        </span>
        <span css={s.designSystemWrapper(theme)}>
          교보문고 디자인 시스템
          <Icon name="arrowCircle" width={18} height={18} />
        </span>
      </div>
    </>
  );
};

export default Footer;
