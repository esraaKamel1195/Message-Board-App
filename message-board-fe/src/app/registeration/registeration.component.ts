import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})

export class RegisterationComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});
  public misMatechedField: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
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
      console.log( this.registerForm.value );
  }

  isValid(control: string) {
    return this.registerForm.controls[control].invalid && this.registerForm.controls[control].touched;
  }
}

function matchingValues( password1: string, password2: string): {} {
  return (form:FormGroup) => {
    if( form.controls[password1].value !== form.controls[password2].value ) {
      return { misMatchedField: true }
    } else {
      return null
    }
  }
}