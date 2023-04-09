import { ChangeDetectorRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/environment/environment';
import { Product } from '../interface/interface';
import { finalize, pipe, tap } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAllProducts() {
    // inside your method that triggers the change
    const url = `${apiURL}/products`;
    return this.http.get<Array<Product>>(url);
  }
  updateAvailableProducts(ids: Array<string>) {
    const url = `${apiURL}/availableProducts`;
    return this.http.put(url, ids);
  }
}
