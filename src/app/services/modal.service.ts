import { Injectable } from '@angular/core';
import * as $AB from 'jquery';
import 'bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  onOpenModal(modalId: string) {
    const modalEl = $('#' + modalId);
    if (modalEl) {
      $(modalEl).modal('show');
    }
  }

  onCloseModal(modalId: string) {
    const modalEl = $('#' + modalId);
    if (modalEl) {
      $(modalEl).modal('hide');
    }
  }
}
