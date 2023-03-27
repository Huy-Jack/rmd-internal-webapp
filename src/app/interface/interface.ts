import { Progress } from './type';

export interface TransferBoxItem {
  name: string;
  value: string | number;
  selected: boolean;
}
export interface TableData {
  name: string;
  totalPrice: number;
  progress: Progress;
  productList: Array<Product>;
  discountTotalPrice?: number;
}
export interface Product {
  name: string;
  price: number;
  quantity: number;
  discount: number;
  description: string;
}
