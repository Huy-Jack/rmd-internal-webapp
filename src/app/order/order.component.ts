import { Component } from '@angular/core';
import { tableDataList } from '../fakedata';
import { Product, TableData } from '../interface/interface';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  listTableData: Array<TableData> = tableDataList;
  currTableData: TableData;
  currProduct: Product;

  constructor(public modal: ModalService) {}

  onTableClick(tableData: TableData) {
    this.currTableData = tableData;
    setTimeout(() => {
      this.modal.onOpenModal('tableDetailModal');
    }, 0);
  }
  onProductClick(product: Product) {
    console.log('product: ', product);
    this.currProduct = product;
    setTimeout(() => {
      this.modal.onOpenModal('productDetailModal');
    }, 0);
  }
}
