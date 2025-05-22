import type { HomeBestTypes, AddBookTypes } from '@/types/HomeBestResponseTypes';

export const addBookInfo = (book: HomeBestTypes): AddBookTypes => {
  const discountRate = 10;
const point = Math.floor(Number(book.price) * 0.05);
  const today = new Date();
  const deliveryDate = `오늘(${today.getMonth() + 1}/${today.getDate()}, ${
    ['일', '월', '화', '수', '목', '금', '토'][today.getDay()]
  })`;

  return {
    ...book,
    discountRate,
    point,
    deliveryDate,
    isLiked: false,
  };
};
