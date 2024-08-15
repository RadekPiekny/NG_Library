import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssUpdateService {

  constructor() { }
  dataChange$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
}
