import { Component } from '@angular/core';
import {
  faUsers,
  faSnowflake,
  faIceCream,
  faGears,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  faUsers = faUsers;
  faSnowflake = faSnowflake;
  faIceCream = faIceCream;
  faGears = faGears;
}
