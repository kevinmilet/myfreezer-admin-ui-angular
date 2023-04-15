/**
 * Interface décrivant les credentials pour la connexion
 * @date 4/15/2023 - 3:40:50 PM
 *
 * @export
 * @interface ICredential
 * @typedef {ICredential}
 */
export interface ICredential {
  /**
   * Email de login
   * @date 4/15/2023 - 3:40:50 PM
   *
   * @type {string}
   */
  email: string;
  /**
   * Mot de passe de login
   * @date 4/15/2023 - 3:40:50 PM
   *
   * @type {string}
   */
  password: string;
}
