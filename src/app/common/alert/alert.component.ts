import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  readonly timer = 3000;

  successMessage: string;
  errorMessage: string;

  constructor(private alert: AlertService) {
    this.alert.successMessageObservable.subscribe((msg) => {
      this.successMessage = msg;
      !!this.successMessage &&
        setTimeout(() => {
          this.successMessage = '';
        }, this.timer);
    });
    this.alert.errorMessageObservable.subscribe((msg) => {
      this.errorMessage = msg;
      !!this.successMessage &&
        setTimeout(() => {
          this.errorMessage = '';
        }, this.timer);
    });
  }
}
