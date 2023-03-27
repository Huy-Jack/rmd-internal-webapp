import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransferBoxItem } from '../../interface/interface';
import { transferItems } from './transfer-box.utility';

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html',
  styleUrls: ['./transfer-box.component.css'],
})
export class TransferBoxComponent {
  @Input()
  isLoading: boolean = false;
  @Input()
  availableItems: Array<TransferBoxItem> = [];
  @Input()
  assignedItems: Array<TransferBoxItem> = [];
  @Output()
  assignedItemsChanged: EventEmitter<Array<TransferBoxItem>> =
    new EventEmitter();

  onTransferItems(
    source: Array<TransferBoxItem>,
    target: Array<TransferBoxItem>
  ) {
    transferItems(source, target);
    this.assignedItemsChanged.emit(target);
  }

  onTransferAll(
    source: Array<TransferBoxItem>,
    target: Array<TransferBoxItem>
  ) {
    source.forEach((item) => (item.selected = true));
    transferItems(source, target);
    this.assignedItemsChanged.emit(target);
  }
}
