import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
 <button class="btn btn-primary"> Save </button>
  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  imageUrl="https://picsum.photos/id/1/200/300";
  colSpan=2;
  constructor() { }

  ngOnInit(): void {
  }

}
