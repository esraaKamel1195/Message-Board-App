import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})

export class RegisterationComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [ Validators.required, emailValid() ] ],
      password: ['', Validators.required ],
      confirmPassword: ['', Validators.required ]
    }, {
      validators: matchingValues('password', 'confirmPassword')
    });
  }

  onSubmit() {
    if( this.registerForm.errors )
      console.log( this.registerForm.errors['misMatchedField'] );
    else
      this.authService.register( this.registerForm.value );
  }

  isValid(control: string) {
    return this.registerForm.controls[control].invalid && this.registerForm.controls[control].touched;
  }
}

function matchingValues( password1: string, password2: string): {} | null{
  return (form:FormGroup) => {
    if( form.controls[password1].value !== form.controls[password2].value ) {
      return { misMatchedField: true }
    } else {
      return null
    }
  }
}

function emailValid() {
  return (control: FormControl) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(control.value) ? null : { invalidEmail: true };
  }
}