// services.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private updatedDataSubject = new BehaviorSubject<any>(null);
  updatedData$ = this.updatedDataSubject.asObservable();

  constructor() {}

  updateItem(updatedItem: any) {
    this.updatedDataSubject.next(updatedItem);
  }
}
