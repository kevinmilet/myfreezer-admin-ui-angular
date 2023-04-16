import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import * as dayJS from 'dayjs';
import 'dayjs/locale/fr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    accountId: '',
    created_at: '',
    updated_at: null,
    isActive: false,
    isAdmin: false,
  };

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id: string | null) {
    this.userService.getUserById(id).subscribe((data) => {
      let createdDate = data.created_at;

      if (data.updated_at !== null) {
        let updatedDate = data.updated_at;
        data.created_at = dayJS(updatedDate).locale('fr').format('YYYY-MM-DD');
      }

      data.created_at = dayJS(createdDate).locale('fr').format('YYYY-MM-DD');

      this.user = data;
      console.log(this.user);
    });
  }
}
