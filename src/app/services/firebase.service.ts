import { Injectable, NgZone } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { FirebaseProduct } from '../interface/interface';
import { TableList } from '../interface/type';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _tableList$ = new BehaviorSubject<TableList>([]);
  private productsRef: AngularFireObject<any>;

  public get tableListObservable() {
    return this._tableList$.asObservable();
  }

  public get tableList() {
    return this._tableList$.value;
  }

  public set tableList(value: TableList) {
    this._tableList$.next(value);
  }

  constructor(
    private db: AngularFireDatabase,
    private loadingService: LoadingService
  ) {
    this.subscribeFirebase();
  }

  public updateProduct(
    tableId: number,
    productId: string,
    newData: FirebaseProduct
  ) {
    // update the product with the given ID with the new data
    this.productsRef = this.db.object(`tableorderedproducts/${tableId}`);
    this.productsRef.update({ [productId]: newData });
  }
  private subscribeFirebase() {
    this.loadingService.isLoading = true;
    this.db
      .object<TableList>('/tableorderedproducts/')
      .valueChanges()
      .subscribe((productList) => {
        this.loadingService.isLoading = false;
        !!productList && (this.tableList = productList);
      });
  }
}
