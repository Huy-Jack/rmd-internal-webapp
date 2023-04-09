import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferBoxItem } from '../interface/interface';
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
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  onAssignedRightsChange(addedRoles: Array<TransferBoxItem>) {
    const addedRoleValues: Array<string | number> = addedRoles.map(
      (role) => role.value
    );
    // this.formData.controls.availableRights.patchValue(addedRoleValues);
  }
  onSave() {
    // TODO: call API
    this.updateAvailableProducts();
  }
  onCancel() {
    this.router.navigate(['/home']);
  }

  private getAllProduct() {
    this.loadingService.isLoading = true;
    this.api.getAllProducts().subscribe((res) => {
      this.allProducts = res.map((product) => {
        const transferBoxItem: TransferBoxItem = {
          name: product.name,
          value: product.id,
          selected: false,
        };
        return transferBoxItem;
      });
      this.loadingService.isLoading = false;
    });
  }
  private updateAvailableProducts() {
    const ids = this.getIds(this.assignedProducts);
    this.api.updateAvailableProducts(ids).subscribe((_res) => {
      this.router.navigateByUrl('/home');
    });
  }
  private getIds(list: Array<TransferBoxItem>) {
    return list.map((item) => item.value);
  }
}
