import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public users = [];

  constructor(
    private usersService: UsersService
  ) { }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

}
