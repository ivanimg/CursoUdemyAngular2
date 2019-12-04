import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/busqueda', termino])
    console.log( "obj", termino);
  }

}
