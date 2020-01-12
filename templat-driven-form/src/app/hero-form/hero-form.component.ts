import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  powers = ['smart', 'super', 'super hot', 'weather change'];
  model = new Hero(18, 'Pradeep', this.powers[0], 'ABc');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}
