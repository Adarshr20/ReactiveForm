import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms';

  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middleName: new FormControl('', [Validators.maxLength(20)]), 
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(50)]),
    Gender: new FormControl('', [Validators.maxLength(20)]),
    address: new FormGroup({
      Street: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      Landmark: new FormControl('', [Validators.maxLength(20)]),
      City: new FormControl('', [Validators.required, Validators.maxLength(20)]), 
      state: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      ZipCode: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.maxLength(20)]),
      
    }),
    hobbies: new FormArray([
      new FormControl('', [Validators.required, Validators.maxLength(20)])
    ])
  });

  get hobbies(){
    return this.loginForm.get('hobbies') as FormArray;
  }
   addHobby() {
    const hobbiesArray = this.loginForm.get('hobbies') as FormArray;
    hobbiesArray.push(new FormControl('', [Validators.required, Validators.maxLength(20)]));
  }
      submit(){
        if(!this.loginForm.valid)
        {
          window.alert("Enter all the required Fields");
        }
        else
        console.log(this.loginForm);
      }
  }

