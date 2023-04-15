import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

/**
 * Intercepteur
 * @date 4/14/2023 - 9:32:05 AM
 *
 * @export
 * @class JwtInterceptor
 * @typedef {JwtInterceptor}
 * @implements {HttpInterceptor}
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   * Creates an instance of JwtInterceptor.
   * @date 4/14/2023 - 9:32:05 AM
   *
   * @constructor
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Méthode de l'intercepteur
   * @date 4/14/2023 - 9:32:05 AM
   *
   * @param {HttpRequest<unknown>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<unknown>>}
   */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    if (token !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(clone).pipe(
        catchError((error) => {
          if (error.status === 401 || error.status === 403) {
            this.authService.clearToken();
            this.router.navigate(['auth']);
          }

          return throwError('Session expired');
        })
      );
    }

    return next.handle(request);
  }
}

/**
 * Exporte le provider de l'intercepteur pour qu'il soit utilisé partout
 * @date 4/14/2023 - 9:32:05 AM
 *
 * @type {{ provide: any; useClass: typeof JwtInterceptor; multi: boolean; }}
 */
export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
