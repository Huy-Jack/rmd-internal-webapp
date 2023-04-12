import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferBoxItem } from '../interface/interface';
import { AlertService } from '../services/alert.service';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  isLoadingRights = false;
  allProducts: TransferBoxItem[];
  assignedProducts: TransferBoxItem[] = [];

  constructor(
    public loadingService: LoadingService,
    private router: Router,
    private api: ApiService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  onAssignedRightsChange(addedRoles: Array<TransferBoxItem>) {}

  onSave() {
    this.updateAvailableProducts();
  }
  onCancel() {
    this.router.navigate(['/home']);
  }

  private getAllProduct() {
    this.loadingService.isLoading = true;
    this.api
      .getAllProducts()
      .subscribe({
        next: (res) => {
          this.allProducts = res.map((product) => {
            const transferBoxItem: TransferBoxItem = {
              name: product.name,
              value: product.id,
              selected: false,
            };
            return transferBoxItem;
          });
        },
        error: ({ message }) => {
          this.alert.errorMessage = message;
        },
      })
      .add(() => (this.loadingService.isLoading = false));
  }
  private updateAvailableProducts() {
    this.loadingService.isLoading = true;
    const ids = this.getIds(this.assignedProducts);
    this.api
      .updateAvailableProducts(ids)
      .subscribe({
        next: (_res) => {
          this.loadingService.isLoading = false;
          this.router.navigateByUrl('/home');
          this.alert.successMessage = 'Save Successfully';
        },
        error: ({ message }) => {
          this.alert.errorMessage = message;
        },
      })
      .add(() => (this.loadingService.isLoading = false));
  }
  private getIds(list: Array<TransferBoxItem>) {
    return list.map((item) => item.value);
  }
}
