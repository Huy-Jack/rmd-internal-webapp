import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RMD-webapp';
  isLoading: boolean;

  constructor(private loading: LoadingService) {
    this.loading.isLoadingObservable.subscribe((value) => {
      this.isLoading = value;
    });
  }
}
