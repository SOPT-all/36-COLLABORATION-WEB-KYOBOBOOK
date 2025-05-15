import Dropdown from '@/components/Footer/Dropdown/Dropdown';
import {
  noticeContainer,
  logoContainer,
  noticeStyle,
  linkStyle,
  businessInfoContainer,
  authButtonsContainer,
  authButton,
  legalButtonsContainer,
  legalButton,
  dropdwonContainer,
  snsButtonContainer,
  snsButtonWrapper,
  designSystemWrapper,
} from '@/components/Footer/Footer.style';
import { authButtonLabels, legalButtonLabels } from '@/components/Footer/Footer.constants';
import Icon from '@/components/Icon';
import ButtonList from '@/components/Footer/ButtonList/ButtonList';
import { theme } from '@/styles/theme';

const Footer = () => {
  return (
    <>
      <div css={noticeContainer}>
        <span css={noticeStyle}>공지사항</span>
        <span css={linkStyle}>컬쳐랜드 시스템 점검 안내(4/24)</span>
      </div>

      <div css={logoContainer}>
        <Icon name="kyoboLogo" width={116} height={33} />
        <div css={businessInfoContainer}>
          <span>사업자정보</span>
          <Icon name="circleDown" width={20} height={20} fill={theme.colors.white} />
        </div>
      </div>

      <div css={authButtonsContainer}>
        <ButtonList items={authButtonLabels} style={authButton} />
      </div>

      <div css={legalButtonsContainer}>
        <ButtonList items={legalButtonLabels} style={legalButton} withBorder />
      </div>

      <div css={dropdwonContainer}>
        <Dropdown />
      </div>

      <div css={snsButtonContainer}>
        <span css={snsButtonWrapper}>
          <Icon name="youtubeCircle" width={30} height={30} fill={theme.colors.white} />
          <Icon name="facebookCircle" width={30} height={30} fill={theme.colors.white} />
          <Icon name="instagramCircle" width={30} height={30} fill={theme.colors.white} />
        </span>
        <span css={designSystemWrapper}>
          교보문고 디자인 시스템
          <Icon name="arrowCircle" width={18} height={18} />
        </span>
      </div>
    </>
  );
};

export default Footer;
