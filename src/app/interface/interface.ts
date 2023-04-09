import { Progress } from './type';

export interface TransferBoxItem {
  name: string;
  value: string;
  selected: boolean;
}

export interface FirebaseProduct {
  imgSrc: string;
  productDescription: string;
  productID: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productSize: number;
  productStatus: Progress;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  status: boolean;
  imgSrc: string;
  category: string;
}
