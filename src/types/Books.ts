

export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  price:number;
}

export interface CartItem extends Book {
  qty: number;
}