import { Component } from '@angular/core';
import { forIn } from 'lodash';
import { FirebaseProduct } from '../interface/interface';
import { FirebaseTable, TableList } from '../interface/type';
import { FirebaseService } from '../services/firebase.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  tableList: TableList;
  currentTable: FirebaseTable;
  moneyReceived: number;
  searchText: number;

  get totalPrice() {
    let sum = 0;
    forIn(this.currentTable, (product) => {
      sum += product.productPrice;
    });
    return sum;
  }

  get change() {
    if (!this.totalPrice) return 0;
    return this.moneyReceived - this.totalPrice;
  }

  constructor(
    private modal: ModalService,
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.tableListObservable.subscribe((tableList) => {
      this.tableList = this.roundPrice(tableList);
    });
  }
  onDetailClick(table: FirebaseTable) {
    this.currentTable = table;
    setTimeout(() => {
      this.modal.onOpenModal('paymentDetailModal');
    }, 0);
  }

  private roundPrice(tableList: TableList) {
    return tableList.map((productList) => {
      const productListClone = productList;
      forIn(productListClone, (value, key) => {
        productListClone[key].productPrice = Math.round(value.productPrice);
      });
      return productListClone;
    });
  }
}
