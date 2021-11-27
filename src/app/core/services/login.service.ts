import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedInObservable = this.isLoggedIn.asObservable();

  constructor() { }

  setLogin(data: boolean) {
    this.isLoggedIn.next(data);
  }
}
