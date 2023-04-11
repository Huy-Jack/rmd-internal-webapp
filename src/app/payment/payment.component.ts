import { Component } from '@angular/core';
import { forIn } from 'lodash';
import { FirebaseTable } from '../interface/type';
import { FirebaseService } from '../services/firebase.service';
import { LoadingService } from '../services/loading.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  tableList: FirebaseTable[];
  currentTable: FirebaseTable;
  moneyReceived: number;
  searchText: number;
  phoneNumber: string;

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
    public loadingService: LoadingService,
    private modal: ModalService,
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.tableListObservable.subscribe((tableList) => {
      this.tableList = this.getFormattedTableList(tableList);
    });
  }
  onDetailClick(table: FirebaseTable) {
    this.currentTable = table;
    this.phoneNumber = '';
    this.moneyReceived = 0;
    setTimeout(() => {
      this.modal.onOpenModal('paymentDetailModal');
    }, 0);
  }

  private getFormattedTableList(tableList: FirebaseTable[]) {
    return tableList.map((productList) => {
      const productListClone = productList;
      forIn(productListClone, (value, key) => {
        productListClone[key].productPrice = Math.round(value.productPrice);
      });
      return productListClone;
    });
  }
}
