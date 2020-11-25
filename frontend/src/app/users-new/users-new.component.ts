import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public createUser(user: IUser) {
    console.log("Create user --- user:", user);
    this.userService.createUser(user).then((res) => {
      console.log("ResponseCreate:", res);
      this.router.navigateByUrl('/users-list');
    });
  }
}
