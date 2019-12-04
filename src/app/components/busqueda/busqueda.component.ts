import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit{
  
  bheroes:any = {};
  termino: any;
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService      
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.bheroes = this._heroesService.buscarHeroes(this.termino);
      console.log("heroe", this.bheroes);
    })
  }

}
