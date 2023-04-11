import { Component } from '@angular/core';
import { PROGRESS_LIST } from '../interface/constant';
import { FirebaseProduct } from '../interface/interface';
import { FirebaseTable } from '../interface/type';
import { FirebaseService } from '../services/firebase.service';
import { LoadingService } from '../services/loading.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  readonly PROGRESS = PROGRESS_LIST;
  tableList: FirebaseTable[];
  currProduct: FirebaseProduct;
  currProductId: string;
  currTableId: number;
  searchText: number;

  constructor(
    public loadingService: LoadingService,
    private modal: ModalService,
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.tableListObservable.subscribe((tableList) => {
      this.tableList = tableList;
    });
  }

  onProductClick(
    data: { key: string; product: FirebaseProduct },
    index: number
  ) {
    this.currProduct = data.product;
    this.currProductId = data.key;
    this.currTableId = index;
    setTimeout(() => {
      this.modal.onOpenModal('productDetailModal');
    }, 0);
  }

  onProgressClick(progress: keyof typeof PROGRESS_LIST) {
    this.currProduct.productStatus = progress;
    this.firebaseService.updateProduct(
      this.currTableId,
      this.currProductId,
      this.currProduct
    );
    this.modal.onCloseModal('productDetailModal');
  }
}
