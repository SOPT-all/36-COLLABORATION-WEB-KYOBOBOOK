import { FoldButtonStyle as s } from '@/pages/HomeBestDetailCart/FourthCartView/FoldButton/FoldButton.style';
import Icon from '@/components/Icon';

type FoldButtonProps = {
  firstText: string;
  secondText: string;
};

const FoldButton = ({ firstText, secondText }: FoldButtonProps) => {
  return (
    <div css={s.foldButton}>
      <span>
        <span css={s.textFirst}>{firstText}</span> <span css={s.textSecond}>{secondText}</span>
      </span>
      <Icon name="down" width={16} height={16} />
    </div>
  );
};

export default FoldButton;
