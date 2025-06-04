export default interface Product {
  id: number,
  title: string,
  thumbnail: string,
  price: number,
  discountPercentage: number
}

export interface CartItem extends Product {
  quantity: number;
}
