import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const Wrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  background-color: ${theme.colors.white};
`;

const firstBox = (theme: Theme) => css`
  background-color: ${theme.colors.white};
`;

const topWrapper = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 2rem 1.6rem;
  border-bottom: 1px solid ${theme.colors.gray2};
`;

const imageStyle = () => css``;

const Banner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.8rem;
`;

const iconButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
`;

const bannerTop = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  p {
    font: ${theme.fonts.body2};
    color: ${theme.colors.black1};

    .highlight {
      font: ${theme.fonts.subtitle4};
      color: ${theme.colors.purple6};
    }

    .bold {
      font: ${theme.fonts.subtitle4};
      color: ${theme.colors.black1};
    }
  }
`;

const thingButton = (theme: Theme) => css`
  padding: 0.4rem 0.5rem;
  font: ${theme.fonts.caption3};
  color: ${theme.colors.black1};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 4px;
  background-color: ${theme.colors.white};
  cursor: pointer;
`;

const deliveryBar = (theme: Theme) => css`
  width: 100%;
  height: 0.6rem;
  background-color: ${theme.colors.purple6};
  border-radius: 1rem;
  margin-bottom: 0.4rem;
`;

const uniText = (theme: Theme) => css`
  font: ${theme.fonts.caption3};
  color: ${theme.colors.gray4};
`;

const secondBox = (theme: Theme) => css`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray2};
`;

const sectionHeader = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 2rem 1.6rem;

  .title {
    font: ${theme.fonts.subtitle1};
    color: ${theme.colors.black1};
    flex: 1;
  }
`;

const Card = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem 1.6rem;
  background-color: ${theme.colors.white};
`;

const cardHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const bookTag = () => css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

const titleText = (theme: Theme) => css`
  font: ${theme.fonts.body1};
  color: ${theme.colors.black1};
`;

const cardBody = (theme: Theme) => css`
  display: flex;
  gap: 1.2rem;

  .priceSection {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .priceBox {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 0.4rem;
    }

    .discount {
      text: ${theme.fonts.subtitle1};
      color: ${theme.colors.green1};
    }

    .finalPrice {
      text: ${theme.fonts.subtitle1};
      color: ${theme.colors.black1};
    }

    .origin {
      text: ${theme.fonts.caption3};
      color: ${theme.colors.gray4};
    }

    .originPrice {
        text-decoration: line-through;
    }

    .point {
        margin-left: 0.2rem;
    }

    .countController {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.4rem;

      button {
        width: 2rem;
        height: 2rem;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 0.4rem;
        cursor: pointer;

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }

      span {
        width: 2rem;
        text-align: center;
        text: ${theme.fonts.caption3};
        color: ${theme.colors.black1};
      }
    }
      .chips {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-top: 0.8rem;
      font: ${theme.fonts.caption1};
      color: ${theme.colors.black1};

      .line {
        display: flex;
        align-items: center;
        gap: 0.4rem;
  }
`;

const footerButton = (theme: Theme) => css`
  margin-top: 0.8rem;
  background-color: ${theme.colors.purple2};
  color: ${theme.colors.black1};
  font: ${theme.fonts.subtitle4};
  text-align: center;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Chip = (theme: Theme) => css`
  padding: 0.125rem 0.5rem;
  font: ${theme.fonts.caption1};
  color: ${theme.colors.purple7};
  background-color: ${theme.colors.purple1};
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const FirstCartViewStyle = {
  Wrapper,
  firstBox,
  topWrapper,
  imageStyle,
  Banner,
  bannerTop,
  iconButton,
  thingButton,
  deliveryBar,
  uniText,
  secondBox,
  sectionHeader,
  Card,
  cardHeader,
  bookTag,
  titleText,
  cardBody,
  footerButton,
  Chip,
};
