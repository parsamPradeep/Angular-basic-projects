import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero[];
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeros().subscribe(data => this.hero = data);
  }
  goBack(): void {
    this.location.back();
  }
}
