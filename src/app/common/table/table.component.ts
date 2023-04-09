import { Component, EventEmitter, Input, Output } from '@angular/core';
import { forIn } from 'lodash';
import { PROGRESS_LIST } from 'src/app/interface/constant';
import { FirebaseProduct } from 'src/app/interface/interface';
import { FirebaseTable, Progress } from 'src/app/interface/type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableId: number;
  @Input() productList: FirebaseTable;
  @Input() type: 'order' | 'payment';

  @Output() detailClick = new EventEmitter();
  @Output() productClick = new EventEmitter();

  readonly PROGRESS = PROGRESS_LIST;

  get totalPrice() {
    let sum = 0;
    forIn(this.productList, (product) => {
      sum += product.productPrice;
    });
    return sum;
  }

  constructor() {}

  getProgressName(progress: Progress) {
    return PROGRESS_LIST[progress];
  }
  getTotalPrice(quantity: number, price: number) {
    return quantity * price;
  }
  getClass(progress: Progress) {
    const action: Record<Progress, string> = {
      done: 'text-success',
      orderReceived: 'text-danger',
      inProgress: 'text-primary',
    };
    return action[progress];
  }

  onDetailClick(productList: FirebaseTable) {
    this.detailClick.emit(productList);
  }
  onProductClick(key: string, product: FirebaseProduct) {
    const data = { key: key, product: product };
    this.productClick.emit(data);
  }

  onProgressClick(progress: string) {}
}
