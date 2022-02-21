import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private urlApiAuth = environment.urlApi + '/api/meals/api/public/auth';
  private headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  isAuth$ = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.isConnected();
  }

  /**
   * update isAuth$
   */
  isConnected(): void {
    const token = sessionStorage.getItem('token');
    if (token == null) {
      this.isAuth$.next(false);
      return;
    }

    this.http.post(`${this.urlApiAuth}/isValid`, JSON.stringify({ token }), { 'headers': this.headers }).subscribe({
      next: (response: any) => {
        console.log('TEST CONNECTED !');
        const isConnect: boolean = response.isValid;
        console.log('isConnect is :', isConnect);
        this.isAuth$.next(isConnect);
      },
      error: () => {
        console.log('TEST isConnected error !');
        this.isAuth$.next(false);
      }
    }
    );
  }

  /**
   * Connect the user and redirect him to /home, update isAuth$ and return a Promise<boolean> false if something is wrong
   * @param {string} email
   * @param {string} password
   * @return {Promise<boolean>}
   */
  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.urlApiAuth}/login`, JSON.stringify({ email, password }), { 'headers': this.headers })
        .subscribe({
          next: (response: any) => {
            const token = response.token;
            sessionStorage.setItem('token', token);
            this.isAuth$.next(true);
            this.router.navigate(['/home']); //TODO vérifier la route 
            resolve(true);
          },
          error: () => {
            this.isAuth$.next(false);
            reject(false);
          }
        });
    })
  }

  logout() {
    sessionStorage.removeItem('token');
    this.isAuth$.next(false);
  }

  /**
   * save the user on DB, and connect it
   */
  register() {
    this.http.post<{ token: string }>(`${this.urlApiAuth}/login`, {}, { headers: this.headers }).subscribe((response: { token: string }) => {
      const token = response.token;
      sessionStorage.setItem('token', token);
      this.router.navigate(['/home']); //TODO verifier la route 
    });
  }
}