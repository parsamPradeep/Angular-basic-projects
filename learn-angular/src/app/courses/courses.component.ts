import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
   <p>{{text | summary }}</p>
  `,
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  text = "loakjsadansd aslkdjsald  adlads adna dasida sdasiocnc nosnc acanskc sncsasoincancl";

  ngOnInit(): void {
  }
}
