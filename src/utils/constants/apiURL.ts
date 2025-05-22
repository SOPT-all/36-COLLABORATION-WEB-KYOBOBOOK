export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_URL = {
  GET_TOP_BOOKS: '/books/top5',
  GET_BEST_BOOKS: '/books',
  GET_BOOK_DETAIL: (bookId: number) => `/books/${bookId}`,
  GET_BOOK_REVIEWS: (bookId: number) => `/reviews/${bookId}`,
  GET_BOOK_REVIEWS_STATISTIC: (bookId: number) => `/reviews/statistic/${bookId}`,
};
