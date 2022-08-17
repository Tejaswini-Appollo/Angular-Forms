import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angularForms';
  genders = ['male', 'female'];
  signUpForm!: FormGroup;  
  forbiddenNames = ['Anna', 'John'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'ForbiddenNames': true};
    }
    return {'ForbiddenNames': true};   
  }

  // @ViewChild('f') form!: NgForm; 

  // defaultQuestion = 'teacher';
  // answer = "";  
  // genders = ['male', 'female'];
  // user = {
  //   userName: '',
  //   mail: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };
  // formSubmitted = false;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log("Submitted!");
  // }

  // onSuggest() {
  //   const suggestedValue = 'SuperUser';
  //   this.form.setValue({
  //     userData: {
  //       username: suggestedValue,
  //       email: ''
  //     },
  //     gender: 'male',
  //     secret: '',
  //     answer: ''
  //   })
  //   this.form.form.patchValue({
  //     userData: {
  //       username: suggestedValue
  //     }
  //   })
  // }

  // onSubmit() {
  //   this.formSubmitted = true;
  //   this.user.userName = this.form.value.userData.username;
  //   this.user.mail = this.form.value.userData.email;
  //   this.user.secretQuestion = this.form.value.secret;
  //   this.user.answer = this.form.value.answer;
  //   this.user.gender = this.form.value.gender;
    
  //   this.form.reset();
  // }
}
