import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit
{

  private urlApiAuth = environment.urlApi + '/api/public/auth';

  private headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Credentials', 'true');


  isAuth$ = new ReplaySubject<boolean>();

  constructor(private http: HttpClient, private router: Router, private _tokenService: TokenService)
  {
    this.isConnected();
  }

  ngOnInit(): void
  {
  }

  /**
   * update isAuth$
   */
  isConnected(): void
  {

    const token = this._tokenService.getToken();
    if (token == null)
    {
      this.isAuth$.next(false);
      return;
    }


    this.http.post(`${this.urlApiAuth}/isTokenValid`, JSON.stringify({ token }),
      { 'headers': this.headers, withCredentials: true })
      .subscribe({
        next: (response: any) =>
        {
          const isConnect: boolean = response.isValid;
          this.isAuth$.next(isConnect);
        },
        error: () =>
        {
          this.isAuth$.next(false);
          this._tokenService.removeToken();
        }
      });
  }

  /**
   * Connect the user and redirect him to /home, update isAuth$ and return a Promise<boolean> false if something is wrong
   * @param {string} email
   * @param {string} password
   * @return {Promise<boolean>}
   */
  login(email: string, password: string): Promise<boolean>
  {
    return new Promise<boolean>((resolve, reject) =>
    {
      this.http.post(`${this.urlApiAuth}/login`, JSON.stringify({ email, password }), { 'headers': this.headers, withCredentials: true })
        .subscribe({
          next: (response: any) =>
          {
            const token = response.token;
            this._tokenService.setToken(token);
            this.isAuth$.next(true);
            this.router.navigate(['/']);
            resolve(true);
          },
          error: () =>
          {
            this.isAuth$.next(false);
            resolve(false);
          }
        });
    })
  }

  logout()
  {
    this._tokenService.removeToken();
    this.isAuth$.next(false);
  }

  /**
   * save the user on DB, and connect it
   */
  register(lastname: string, firstname: string, email: string, password: string)
  {
    this.http.post<{ token: string }>(`${this.urlApiAuth}/register`, JSON.stringify({ lastname, firstname, email, password }), { headers: this.headers, withCredentials: true }).subscribe((response: { token: string }) =>
    {
      const token = response.token;
      sessionStorage.setItem('token', token);
      this.router.navigate(['/']); //TODO verifier la route 
    });
  }
}