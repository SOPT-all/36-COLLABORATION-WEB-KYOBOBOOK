export interface CardTypes {
  imgUrl: string;
  title?: string;
  type?: 'rectangular' | 'square';
}

export interface cartCardTypes {
  imgUrl: string;
  title: string;
  price: number;
  type?: 'rectangular' | 'square';
}
