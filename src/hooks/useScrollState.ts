import { useEffect, useState } from 'react';

const useScrollState = () => {
  const [scrollState, setScrollState] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const tabMenuElement = document.getElementById('tab-menu');
      const tabTop = tabMenuElement?.offsetTop || 0;
      const y = Math.ceil(window.scrollY);

      if (y >= tabTop) {
        setScrollState(3);
      } else if (y >= 500) {
        setScrollState(2);
      } else {
        setScrollState(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
};

export default useScrollState;
