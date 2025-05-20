export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_URL = {
  GET_TOP_BOOKS: '/api/books/top',
  GET_BEST_BOOKS: '/api/books',
  GET_BOOK_DETAIL: (bookId: number) => `/api/books/${bookId}`,
  GET_BOOK_REVIEWS: (bookId: number) => `/api/reviews/${bookId}`,
  GET_BOOK_REVIEWs_STATISTIC: (bookId: number) => `/api/reviews/statistic/${bookId}`,
};
