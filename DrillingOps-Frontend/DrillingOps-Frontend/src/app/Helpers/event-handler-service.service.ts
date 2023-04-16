import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventHandlerServiceService {
  _formSaved = new BehaviorSubject<any>('');

  constructor() {}
}
