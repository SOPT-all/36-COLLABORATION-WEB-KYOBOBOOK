import { useParams } from 'react-router-dom';

export const useBookId = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const numericBookId = Number(bookId);

  if (isNaN(numericBookId)) {
    throw new Error('존재하지 않는 책입니다 🥲');
  }

  return numericBookId;
};
