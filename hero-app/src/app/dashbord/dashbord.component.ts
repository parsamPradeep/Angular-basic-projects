import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroSerive: HeroService) { }

  ngOnInit() {
  }
  getHeroes(): void {
    this.heroSerive.getHeros().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
