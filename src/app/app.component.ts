import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form2';

  signUp= new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.maxLength(18), Validators.minLength(8)])
  })

  getControl(name:any):AbstractControl | null{
    return this.signUp.get(name)
  }

  registrationFn(){
    console.log(this.signUp.value);
  }
}
