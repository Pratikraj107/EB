import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryIdService {
  private id = new BehaviorSubject<string>("");
  currentId = this.id.asObservable();

  constructor() { }
  saveid(id: string){
   this.id.next(id);
  }
}
