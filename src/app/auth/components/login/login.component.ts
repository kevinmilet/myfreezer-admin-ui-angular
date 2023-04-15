import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICredential } from 'src/app/interfaces/credential.interface';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Composant de login
 * @date 4/15/2023 - 3:34:33 PM
 *
 * @export
 * @class LoginComponent
 * @typedef {LoginComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**
   * Credentials
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @type {ICredential}
   */
  credentials: ICredential = {
    email: '',
    password: '',
  };

  /**
   * Déclatation FormGroup
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @type {!FormGroup}
   */
  loginForm!: FormGroup;

  /**
   * Déclaration boolean loading
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @type {boolean}
   */
  loading = false;

  /**
   * Déclaration boolean submitted
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @type {boolean}
   */
  submitted = false;

  /**
   * Creates an instance of LoginComponent.
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @constructor
   * @param {AuthService} authService
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {AlertService} alertService
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {
    if (this.authService.isLogged()) {
      this.router.navigate(['/']);
    }
  }

  /**
   * OnInit
   * @date 4/15/2023 - 3:34:33 PM
   */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * getter permettant d'accéder aux champs du formulaire
   * @date 4/15/2023 - 3:34:33 PM
   *
   * @readonly
   * @type {*}
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Méthode onSubmit qui envoie les données du formulaire de connexion
   * @date 4/15/2023 - 3:34:33 PM
   */
  onSubmit(): void {
    this.submitted = true;

    // On stop si le formulaire est invalide
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.credentials = {
      email: this.f['email'].value,
      password: this.f['password'].value,
    };

    this.authService.login(this.credentials).subscribe(
      (res) => {
        let bearerToken = res?.headers?.get('authorization');

        let isAmin: boolean = res?.body?.isAdmin;

        if (isAmin) {
          if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            this.authService.saveToken(jwt);
            this.loading = false;
            this.router.navigate(['/']);
          }
        } else {
          alert("Vous n'avez pas l'authorisation d'accéder à cette page");
        }
      },
      (err) => {
        console.log(err);
        this.loading = false;
        // On envoi une alerte si la connexion a échouée
        this.alertService.sendAlert(err.status);
      }
    );
  }
}
