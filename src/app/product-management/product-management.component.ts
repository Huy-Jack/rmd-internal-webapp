import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferBoxItem } from '../interface/interface';
import { fakeProduct } from '../fakedata';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent {
  isLoadingRights = false;
  allProducts: TransferBoxItem[] = fakeProduct;
  assignedProducts: TransferBoxItem[] = [];

  constructor(private router: Router) { }

  onAssignedRightsChange(addedRoles: Array<TransferBoxItem>) {
    // const addedRoleValues: Array<string | number> = addedRoles.map(
    //   (role) => role.value
    // );
    // this.formData.controls.availableRights.patchValue(addedRoleValues);
  }
  onSave() {
    // TODO: call API
  }
  onCancel() {
    this.router.navigate(['/home']);
  }
}
