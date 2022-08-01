import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-from',
  templateUrl: './new-course-from.component.html',
  styleUrls: ['./new-course-from.component.scss']
})
export class NewCourseFromComponent implements OnInit {
  form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
  
  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value="";
  }

  get topics(){
    return (this.form.get('topics') as FormArray).controls;
  }
  removeTopic(topic: AbstractControl){
    let index = this.topics.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(index);
  }

  ngOnInit(): void {
  }

}
