export interface BookTypes {
  id: number;
  title: string;
  author: string;
  publisher: string;
  price: number;
  rank: number;
  imageUrl: string;
  star: number;
  bestEmotion: string;
}

export interface AddBookTypes extends BookTypes {
  discountRate: number;
  point: number;
  deliveryDate: string;
  isLiked: boolean;
}
