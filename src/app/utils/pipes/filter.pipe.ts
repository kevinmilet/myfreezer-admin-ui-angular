import { User } from 'src/app/models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers',
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], filterText: string): User[] {
    if (filterText === '') {
      return users;
    } else {
      return users.filter((user) => {
        if (filterText.length >= 2) {
          return (
            user.lastname.toLowerCase().includes(filterText.toLowerCase()) ||
            user.firstname.toLowerCase().includes(filterText.toLowerCase()) ||
            user.email.toLowerCase().includes(filterText.toLowerCase())
          );
        }
        return users;
      });
    }
  }
}
