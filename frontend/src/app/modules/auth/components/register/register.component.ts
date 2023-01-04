import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jic-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerFormGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.registerFormGroup = this._fb.group({
      name: new FormControl<string>('', [Validators.required, Validators.email]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.email]),
    })
  }

  public onRegister(event: SubmitEvent) {
    event.preventDefault();
    const formGroupValue = this.registerFormGroup.value;
    console.log(formGroupValue);
  }
}
