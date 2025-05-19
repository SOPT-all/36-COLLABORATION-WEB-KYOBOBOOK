import { useState } from 'react';
import { useTheme } from '@emotion/react';

import {
  dropdownWrapper,
  triggerButton,
  dropdownMenu,
} from '@/components/Footer/Dropdown/Dropdown.style';
import { FAMILY_SITE_OPTIONS } from '@/components/Footer/Footer.constants';
import Icon from '@/components/Icon';

const Dropdown = () => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={dropdownWrapper}>
      <button css={triggerButton(theme)} onClick={() => setIsOpen((prev) => !prev)}>
        <span>Family Site</span>
        <Icon name={'down'} width={15} />
      </button>
      {isOpen && (
        <ul css={dropdownMenu(theme)}>
          {FAMILY_SITE_OPTIONS.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
