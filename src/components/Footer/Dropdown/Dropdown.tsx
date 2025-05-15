import { useState } from 'react';

import { dropdownWrapper, triggerButton, dropdownMenu } from './Dropdown.style';

import { FAMILY_SITE_OPTIONS } from '@/components/Footer/Footer.constants';
import Icon from '@/components/Icon';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={dropdownWrapper}>
      <button css={triggerButton} onClick={() => setIsOpen((prev) => !prev)}>
        <span>Family Site</span>
        <Icon name={'down'} width={15} />
      </button>
      {isOpen && (
        <ul css={dropdownMenu}>
          {FAMILY_SITE_OPTIONS.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
