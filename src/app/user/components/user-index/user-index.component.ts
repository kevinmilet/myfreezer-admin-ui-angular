import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { PaginationInstance } from 'ngx-pagination';

/**
 * User index component
 * @date 4/14/2023 - 9:27:45 AM
 *
 * @export
 * @class UserIndexComponent
 * @typedef {UserIndexComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss'],
})
export class UserIndexComponent implements OnInit {
  /**
   * Icone
   * @date 4/14/2023 - 9:27:45 AM
   *
   * @type {*}
   */
  faUserPen = faUserPen;

  /**
   * Liste des users (Observable) - Non utilisé
   * @date 4/14/2023 - 9:27:45 AM
   *
   * @type {!Observable<any>}
   */
  users$!: Observable<User[]>;

  /**
   * Liste des users
   * @date 4/14/2023 - 1:17:10 PM
   *
   * @type {!User[]}
   */
  users!: User[];

  /**
   * Numéro de la pagez courante
   * @date 4/14/2023 - 1:17:10 PM
   *
   * @type {number}
   */
  p: number = 1;

  /**
   * Libellés pour la pagination
   * @date 4/14/2023 - 1:17:10 PM
   *
   * @public
   * @type {*}
   */
  public labels: any = {
    previousLabel: 'Précédent',
    nextLabel: 'Suivant',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `Page`,
  };

  /**
   * Creates an instance of UserIndexComponent.
   * @date 4/14/2023 - 9:27:45 AM
   *
   * @constructor
   * @param {UserService} userService
   */
  constructor(private userService: UserService) {}

  /**
   * OnInit
   * @date 4/14/2023 - 9:27:45 AM
   */
  ngOnInit(): void {
    // this.posts$ = this.route.data.pipe(map((data) => data['posts']));
    this.userService.getAllUsers().subscribe((users) => (this.users = users));
    //this.users$ = this.userService.getAllUsers();
  }
}
