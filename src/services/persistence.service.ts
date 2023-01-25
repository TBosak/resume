import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
public TitleSubject: BehaviorSubject<string> = new BehaviorSubject("");

get Title() {
  return this.TitleSubject.value;
}

set Title(value: string) {
  this.TitleSubject.next(value);
}

constructor() { }

}
