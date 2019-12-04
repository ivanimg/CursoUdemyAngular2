import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router
  ) {
    console.log("Constructor");  
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log("ngOnInit", this.heroes);    
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx])
  }

}
