export interface HomeBestTypes {
  bookId: number;
  title: string;
  author: string;
  publisher: string;
  price: string;
  ranking: number;
  imageUrl: string;
  star: number;
  bestEmotion: string;
}

export type HomeBestResponseTypes = HomeBestTypes[];

export interface AddBookTypes extends HomeBestTypes {
  discountRate: number;
  point: number;
  deliveryDate: string;
  isLiked: boolean;
}
