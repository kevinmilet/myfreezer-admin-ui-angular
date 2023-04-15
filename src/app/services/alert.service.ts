import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service gérant les alertes
 * @date 4/15/2023 - 3:39:44 PM
 *
 * @export
 * @class AlertService
 * @typedef {AlertService}
 */
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  /**
   * Alert subject
   * @date 4/15/2023 - 3:39:44 PM
   *
   * @type {*}
   */
  alert = new Subject<number>();

  /**
   * Creates an instance of AlertService.
   * @date 4/15/2023 - 3:39:44 PM
   *
   * @constructor
   */
  constructor() {}

  /**
   * Méthode envoyant les alertes
   * @date 4/15/2023 - 3:39:44 PM
   *
   * @param {number} statusCode
   */
  sendAlert(statusCode: number): void {
    this.alert.next(statusCode);
  }
}
