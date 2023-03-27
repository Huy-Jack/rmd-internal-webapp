import { Component, Input } from '@angular/core';
import { TransferBoxItem } from 'src/app/interface/interface';

@Component({
  selector: 'app-role-box',
  templateUrl: './role-box.component.html',
  styleUrls: ['./role-box.component.css'],
})
export class RoleBoxComponent {
  searchText: string = '';
  @Input() items: Array<TransferBoxItem> = [];
}
