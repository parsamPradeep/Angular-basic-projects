import { UserNameValidator } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss']
})
export class SingupFormComponent implements OnInit {
  form=new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required, 
        Validators.minLength(3)],             
        [UserNameValidator.shouldBeUnique]),
      password: new FormControl('', Validators.required)
    })
  })

  get username(){
    return this.form.get('account.username');
  }
  get password(){
    return this.form.get('account.password');
  }
  
  ngOnInit(): void {
  }

}
