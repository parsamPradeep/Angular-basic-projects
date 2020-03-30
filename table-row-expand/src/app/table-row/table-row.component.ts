import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableRowComponent implements OnInit {
  dataSource: PeriodicElement[] = [
    {
      Token: 1,
      TokenTime: '10:30:01'
    }, {
      Token: 2,
      TokenTime: '10:30:00'
    }, {
      Token: 3,
      TokenTime: '10:55:18'
    }, {
      Token: 4,
      TokenTime: '12:45:11'
    }, {
      Token: 5,
      TokenTime: '11:44:11'
    }, {
      Token: 6,
      TokenTime: '1:22:19'
    }, {
      Token: 7,
      TokenTime: '2:55:17'
    },
  ];
  columnsToDisplay = ['Token', 'TokenTime'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  TokenTime: string;
  Token: number;
}
