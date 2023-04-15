import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

/**
 * Service pour les users
 * @date 4/14/2023 - 9:42:41 AM
 *
 * @export
 * @class UserService
 * @typedef {UserService}
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * Endpoint de l'api pour les users
   * @date 4/14/2023 - 9:42:41 AM
   *
   * @type {string}
   */
  url = 'http://localhost:8080/users';

  /**
   * Creates an instance of UserService.
   * @date 4/14/2023 - 9:42:41 AM
   *
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Récupére tous les users
   * @date 4/14/2023 - 9:42:41 AM
   *
   * @returns {Observable<User[]>}
   */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
