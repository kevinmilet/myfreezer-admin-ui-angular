import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredential } from '../interfaces/credential.interface';
import { Observable } from 'rxjs';

/**
 * Service gérant l'authentification et la gestion de la connexion
 * @date 4/14/2023 - 9:32:22 AM
 *
 * @export
 * @class AuthService
 * @typedef {AuthService}
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Endpoint de l'api pour l'authenfication
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @type {string}
   */
  url = 'http://localhost:8080/auth/login';

  /**
   * Creates an instance of AuthService.
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Login
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @param {ICredential} credentials
   * @returns {Observable<any>}
   */
  // login(credentials: ICredential): Observable<any> {
  //   const headers = { 'Content-Type': 'application/json' };

  //   return this.http.post<any>(this.url, credentials, {
  //     headers: headers,
  //     observe: 'response',
  //     responseType: 'json',
  //   });
  // }
  login(credentials: ICredential): Observable<any> {
    return this.http.post<any>(this.url, credentials);
  }

  /**
   * Sauvegarde du jwt token dans le session storage
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @param {string} jwt_token
   */
  saveToken(jwt_token: string): void {
    sessionStorage.setItem('jwt_token', jwt_token);
  }

  /**
   * Efface le jwt token dans le session storage
   * @date 4/14/2023 - 9:32:22 AM
   */
  clearToken(): void {
    sessionStorage.removeItem('jwt_token');
  }

  /**
   * Verifie la présenvce du jwt token dans le session storage
   * pour savoir si l'utilisateur est connecté
   *
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @returns {boolean}
   */
  isLogged(): boolean {
    const jwt_token = sessionStorage.getItem('jwt_token');
    return !!jwt_token;
  }

  /**
   * Récupére le jwt token dans le session storage
   * @date 4/14/2023 - 9:32:22 AM
   *
   * @returns {(string | null)}
   */
  getToken(): string | null {
    return sessionStorage.getItem('jwt_token');
  }
}
