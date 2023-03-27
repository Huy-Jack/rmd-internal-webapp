import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PROGRESS_LIST } from 'src/app/interface/constant';
import { Product, TableData } from 'src/app/interface/interface';
import { Progress } from 'src/app/interface/type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: TableData;
  @Input() disableProgress: boolean = false;
  @Input() disableTotalPrice: boolean = false;
  @Output() tableClick = new EventEmitter();
  @Output() productClick = new EventEmitter();

  readonly PROGRESS = PROGRESS_LIST;

  constructor() {}

  getProgressName(progress: Progress) {
    return PROGRESS_LIST[progress];
  }
  getClass(progress: Progress) {
    const action: Record<Progress, string> = {
      noOrder: 'text-success',
      orderReceived: 'text-danger',
      inProgress: 'text-primary',
    };
    return action[progress];
  }

  onTableClick(data: TableData) {
    this.tableClick.emit(data);
  }
  onProductClick(data: Product) {
    this.productClick.emit(data);
  }

  onProgressClick(progress: string) {}
}
