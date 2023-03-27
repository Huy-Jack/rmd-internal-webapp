import { Component } from '@angular/core';
import { tableDataList } from '../fakedata';
import { TableData } from '../interface/interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  listTableData: Array<TableData> = tableDataList;
}
