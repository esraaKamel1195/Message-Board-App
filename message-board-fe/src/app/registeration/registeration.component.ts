import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})

export class RegisterationComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});
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
    })
  }

  onSubmit() {
    console.log( this.registerForm.value );
  }

  isValid(control: string) {
    return this.registerForm.controls[control].invalid && this.registerForm.controls[control].touched;
  }
}
