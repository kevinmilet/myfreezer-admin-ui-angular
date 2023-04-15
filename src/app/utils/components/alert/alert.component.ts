import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

/**
 * Composant d'alerte
 * @date 4/15/2023 - 3:37:45 PM
 *
 * @export
 * @class AlertComponent
 * @typedef {AlertComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  /**
   * Variable contenant le message à envoyer
   * @date 4/15/2023 - 3:37:45 PM
   *
   * @type {string}
   */
  message = '';

  /**
   * Variable contenant le code erreur reçu
   * @date 4/15/2023 - 3:37:45 PM
   *
   * @type {!number}
   */
  errorCode!: number;

  /**
   * Creates an instance of AlertComponent.
   * @date 4/15/2023 - 3:37:45 PM
   *
   * @constructor
   * @param {AlertService} alertService
   */
  constructor(private alertService: AlertService) {}

  /**
   * OnInit
   * @date 4/15/2023 - 3:37:45 PM
   */
  ngOnInit(): void {
    this.alertService.alert.subscribe((data) => {
      this.errorCode = data;
      this.showMessage(this.errorCode);
    });
  }

  /**
   * Méthode permettant de définir le message d'erreur
   * @date 4/15/2023 - 3:37:45 PM
   *
   * @param {number} errorCode
   */
  showMessage(errorCode: number) {
    switch (errorCode) {
      case 403:
        this.message = 'Email ou mot de passe incorrecte, veuillez réessayer';
        break;
      case 401:
        this.message = 'Erreur - Non authorisé';
        break;
      case 0:
        this.message = 'Service indisponible, veuillez réessayer plus tard';
        break;
      default:
        this.message = 'Erreur inconnue';
        break;
    }
  }
}
