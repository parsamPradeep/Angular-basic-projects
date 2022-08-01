import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactMethod:any=[
    {id: 1, name:'Email'},
    {id: 2, name:'Phone'}
  ];
  log(x: any){
    console.log(x);
  }

  ngOnInit(): void {
  }
  submit(f: any){
    console.log(f)
  }
}
