import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private errorMessage$ = new BehaviorSubject<string>('');
  private successMessage$ = new BehaviorSubject<string>('');

  public get errorMessageObservable() {
    return this.errorMessage$.asObservable();
  }

  public get successMessageObservable() {
    return this.successMessage$.asObservable();
  }

  public get errorMessage() {
    return this.errorMessage$.value;
  }
  public set errorMessage(value) {
    this.errorMessage$.next(value);
  }

  public get successMessage() {
    return this.successMessage$.value;
  }
  public set successMessage(value) {
    this.successMessage$.next(value);
  }

  constructor() {}
}
