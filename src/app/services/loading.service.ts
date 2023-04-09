import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);

  get isLoadingObservable() {
    return this._isLoading$.asObservable();
  }

  get isLoading() {
    return this._isLoading$.value;
  }
  set isLoading(isLoading: boolean) {
    this._isLoading$.next(isLoading);
  }
  constructor() {}
}
