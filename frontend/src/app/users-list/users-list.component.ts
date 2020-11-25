import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnChanges {
  @Input() users: any;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnChanges(): void {
    console.log("CurrentUsers:", this.users);
  }

  public getUsers() {
    this.usersService.getUsers();
  }

  public deleteUser(user: IUser) {
    console.log("Deleting user:", user);
    this.usersService
      .deleteUser(user)
      .then((users) => {
        this.users = users;
      })
  }

  public updateUser(user: IUser){
    console.log("Updating user:", user);
    this.router.navigate(['/user/update'], { state: { data: user} });

  }

}
