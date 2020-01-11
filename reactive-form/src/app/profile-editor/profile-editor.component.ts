import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileform = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.fb.group({
      state: [''],
      city: [''],
      zip: [''],
      street: ['']
    })
  });
  alias = this.fb.array([
    this.fb.control('')
  ]);
  profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstname: 'pradeep',
      address: {
        street: '123 abc'
      }
    });
    console.log(this.profileForm.value);
  }
  setvalue() {
    this.profileform.setValue({
      firstname: 'pradeepparsam',
      lastname: 'abc',
      address: {
        street: '123445',
        city: 'Banglore',
        zip: '23456',
        state: 'ka'
      }
    });
    console.log(this.profileform.value);
  }
}
