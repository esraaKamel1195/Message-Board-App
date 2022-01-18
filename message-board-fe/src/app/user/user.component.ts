import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({});
  public user: { firstName: string, lastName: string, email: string } = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ]
    });

    this.userService.getUser().subscribe((res) => {
      this.user = res;

      this.userForm.setValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName
      });
    });
  }

  isValid(control: string) {
    return this.userForm.controls[control].invalid && this.userForm.controls[control].touched;
  }

  onSubmit() {
    if( this.userForm.errors ) {
      console.log( this.userForm.errors );
    } else {
      this.userService.saveUser(this.userForm.value);
    }
  }
}
