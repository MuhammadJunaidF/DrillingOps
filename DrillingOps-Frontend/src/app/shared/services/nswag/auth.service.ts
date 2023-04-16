import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,

    private localStorageService: LocalStorageService
  ) {}

  _userlogedIn$ = new BehaviorSubject<any>('');
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getUser(): any | null {
    let tempItem = this.localStorageService.get<any>('user');
    if (tempItem) return tempItem;
    else return null;
  }

  getFullName(): string | null {
    let tempItem = this.getUser();
    if (tempItem) return tempItem.fullName;
    else return null;
  }

  getToken(): string | null {
    let tempItem = this.getUser();
    if (tempItem) return tempItem.accessToken;
    else return null;
  }

  getUserRoles(): any | null {
    let tempItem = this.getUser();
    if (tempItem) return tempItem.roles;
    else return null;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    this._userlogedIn$.next('');
    this.localStorageService.remove('ls_user');
    this.localStorageService.remove('userId');
    this.localStorageService.remove('userName');
    this.localStorageService.remove('user');
    this.localStorageService.remove('roles');
    this.localStorageService.remove('ls_roles');
    this.router.navigate(['/auth']);
  }

  login(completeObjectWithToken: any): Observable<any> {
    console.log(completeObjectWithToken.roles);
    this.localStorageService.add(
      'user',
      completeObjectWithToken,
      completeObjectWithToken.expiresIn / 3600
    );
    this.localStorageService.add(
      'userName',
      completeObjectWithToken.fullName,
      completeObjectWithToken.expiresIn / 3600
    );
    this.localStorageService.add(
      'userId',
      completeObjectWithToken.userId,
      completeObjectWithToken.expiresIn / 3600
    );
    this.localStorageService.add(
      'roles',
      completeObjectWithToken.roles,
      completeObjectWithToken.expiresIn / 3600
    );
    this._userlogedIn$.next(completeObjectWithToken.roles);
    return of({});
  }
}
