import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IRegisterForm {
  name: string;
  apellido: string;
  email: string;
  telefono: number;
  dni: number;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-register-template-form',
  templateUrl: './register-template-form.component.html',
  styleUrls: ['./register-template-form.component.css'],
})
export class RegisterTemplateFormComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        name: '',
        apellido: '',
        email: '',
        telefono: '',
        dni: '',
        password: '',
        repeatPass: '',
      },
      {
        validator: this.MustMatch('password', 'repeatPass'), // Validando
      }
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        apellido: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, Validators.pattern],
        ],
        telefono: [
          '',
          [Validators.required, Validators.pattern, Validators.maxLength(9)],
        ],
        dni: [
          '',
          [Validators.required, Validators.pattern, Validators.maxLength(8)],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPass: ['', Validators.required],
      },
      {
        validator: this.MustMatch('password', 'repeatPass'), // Validando
      }
    );
  }

  // custom validator to check that two fields match
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.hasError('mustMatch')) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('EXITO!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
