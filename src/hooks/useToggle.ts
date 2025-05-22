import { useState } from 'react';

const useToggle = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return { isLiked, handleLike };
};

export default useToggle;
