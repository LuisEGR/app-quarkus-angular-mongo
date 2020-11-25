import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../users.service';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  @Input() actualUser: IUser;
  @Output() onSubmitForm = new EventEmitter<IUser>();
  isSubmitted = false;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
    });


  }

  ngOnInit(): void {
    this.actualUser = {
      ...{
        firstName: '',
        lastName: '',
        email: ''
      },
      ...this.actualUser,
    } as IUser;

    this.userForm.setValue({
      firstName: this.actualUser.firstName,
      lastName: this.actualUser.lastName,
      email: this.actualUser.email
    })
  }

  submitForm() {
    this.isSubmitted = true;
    console.log("Submitting", this.userForm);
    this.onSubmitForm.emit({
      id: this.actualUser.id, // adds ID if needed
      ...this.userForm.value,
    });
  }

}
