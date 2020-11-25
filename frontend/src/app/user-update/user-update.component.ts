import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  public actualUser : IUser;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { 

    
    let data = this.router.getCurrentNavigation()?.extras?.state?.data;
    console.log('data :', data);
    this.actualUser = data;
  }

  ngOnInit(): void {
  }

  public updateUser(user: IUser) {
    console.log("Update user --- user:", user);
    this.usersService.updateUser(user).then((res) => {
      console.log('Update response :', res);
      this.router.navigateByUrl('/users-list');
    })
  }


}
